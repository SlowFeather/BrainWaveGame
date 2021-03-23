
const CSV_DIR = "StaticDatas/";
// const CSV_DIR = "Data/";


async function PreLoadAllCsv() {
    await new Promise(function (resolve, reject) {
        cc.loader.loadResDir(CSV_DIR, cc.TextAsset, function (error: Error, resource: any[], urls: string[]) {
            //resolve();
        })
    })
}
//PreLoadAllCsv();

export async function PreLoadCsvSync(tableName: string, callback: Function): Promise<boolean> {
    let ret = await PreLoadCsv(tableName);
    if (callback) {
        if (!ret) {
            console.error("************表加载失败：", tableName)
        }
        callback(ret);
    }
    return ret;
}

export function PreLoadCsv(tableName: string): Promise<boolean> {
    let assetName = tableName;// CSV_DIR + tableName;
    let asset = cc.loader.getRes(assetName, cc.TextAsset);
    if (asset) {
        return Promise.resolve(true);
    }

    return new Promise(function (resolve, reject) {
        cc.loader.loadRes(assetName, cc.TextAsset, function (error: Error, resource: any) {
            if (error) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        })
    })
}

interface TalbeFunc extends Function {
    getById(id: number): any;
    getFilename(): string;
}
export async function GetTableDataAsync(tableType: TalbeFunc, id: number): Promise<any> {
    let bLoad = await PreLoadCsv(tableType.getFilename());
    if (!bLoad) {
        return Promise.resolve(null);
    }
    return Promise.resolve(tableType.getById(id));
}

export class TableReader {
    constructor(str: string) {
        this.m_str = str;
        this.m_pos = 0;
    }
    getChar(offset: number = 0): string {
        return this.m_str[offset];
    }
    readChar(): string {
        return this.getChar(this.m_pos++);
    }
    getNumber(): number {
        return Number(this.readNextToken());
    }
    getString(): string {
        return this.readNextToken();
    }
    getBoolean(): boolean {
        return Boolean(this.readNextToken());
    }

    public getLen(): number {
        return this.m_str.length;
    }

    public getPos(): number {
        return this.m_pos;
    }

    public resetPos() {
        this.m_pos = 0;
    }

    public advance(num: number) {
        this.m_pos += num;
    }

    protected readNextToken(isIgnoreNewline: boolean = false): string {
        if (this.getPos() == this.getLen()) {
            return "";
        }
        else if (this.getPos() > this.getLen()) {
            throw new Error(`readNextToken value.getPos=${this.getPos()} > value.getLen=${this.getLen()}`);
        }
        let strResult: string = "";
        let c: string = "";
        let isQuota = false;
        while (true) {
            if (this.getPos() >= this.getLen()) {
                break;
            }
            c = this.readChar();
            if (c == '\r')
                continue;
            if (!isQuota) {
                if (c == '\"' && strResult.length == 0) {
                    isQuota = true;
                }
                else if (c == ',') {
                    break;
                }
                else if (c == '\n') {
                    if (!isIgnoreNewline)
                        break;
                }
                else {
                    strResult += c;
                }
            }
            else {
                if (c == '\"') {
                    if (this.getPos() < this.getLen() && this.getChar() == '\"') {
                        strResult += '\"';
                        this.advance(1);
                    }
                    else {
                        isQuota = false;
                    }
                }
                else {
                    strResult += c;
                }
            }
        }

        return strResult;
    }

    protected m_str: string;
    protected m_pos: number;
}

interface TableInterface {
    id?: number;
    readOriginal(buffer: TableReader): void;
    isAutoId(): boolean;
    insertData(id: number): void;
}
export function ReadTable<T extends TableInterface>(strTableName: string, TB: new () => T) {
    let txtAsset: cc.TextAsset = cc.loader.getRes(CSV_DIR + strTableName, cc.TextAsset) as cc.TextAsset;
    if (!txtAsset) {
        return;
    }

    //split line
    let lineArray = txtAsset.text.split("\r\n");
    let iID: number = 0;
    //skip first 3 lines
    for (let i = 3; i < lineArray.length; ++i) {
        if (lineArray[i].length == 0) {
            continue;
        }

        let line = new TableReader(lineArray[i]);
        let data: T = new TB;
        data.readOriginal(line);

        if (data.isAutoId()) {
            ++iID;
        }
        else {
            if (data.id <= 0) {
                console.error(`Warning: ${strTableName}:${i} id <= 0`)
            }
            iID = data.id;
        }
        data.insertData(iID);
    }
}