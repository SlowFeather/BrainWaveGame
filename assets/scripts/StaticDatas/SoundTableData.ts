import { ReadTable, TableReader } from "../Tools/TableReader";


export class SoundTableData
{
	id: number ; //soundId 
	path: string; //文件路径
	str: string; //说明
	
	constructor(){
		this.id = 0;
		this.path = "";
		this.str = "";
	}
	
	readOriginal(buffer: TableReader, version:number = Number.MAX_SAFE_INTEGER)
	{
		this.id = buffer.getNumber(); //soundId 
		this.path = buffer.getString(); //文件路径
		this.str = buffer.getString(); //说明
	}
	
	protected static dataMap: Map<number, SoundTableData>;

	static getById(id:number): SoundTableData 
	{
		let dataMap = SoundTableData.getDataMap();
		return dataMap.get(id);
	}
	
	static getDataMap(): Map<number, SoundTableData>
	{
		if(!SoundTableData.dataMap)
		{
			SoundTableData.dataMap = new Map<number, SoundTableData>();
			ReadTable(SoundTableData.getFilename(), SoundTableData);
		}
		return SoundTableData.dataMap;
	}
	
	static getFilename(): string
	{
		return "SoundTableData"
	}

	isAutoId():boolean { return false; }
	insertData(id: number) {
		SoundTableData.dataMap.set(id, this);
	}
};
