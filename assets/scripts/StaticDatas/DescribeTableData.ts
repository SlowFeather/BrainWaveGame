import { TableReader, ReadTable } from "./TableReader"

export class DescribeTableData
{
	id: number ; //DescribeId
	str: string; //说明
	other: string; //其他
	
	constructor(){
		this.id = 0;
		this.str = "";
		this.other = "";
	}
	
	readOriginal(buffer: TableReader, version:number = Number.MAX_SAFE_INTEGER)
	{
		this.id = buffer.getNumber(); //DescribeId
		this.str = buffer.getString(); //说明
		this.other = buffer.getString(); //其他
	}
	
	protected static dataMap: Map<number, DescribeTableData>;

	static getById(id:number): DescribeTableData 
	{
		let dataMap = DescribeTableData.getDataMap();
		return dataMap.get(id);
	}
	
	static getDataMap(): Map<number, DescribeTableData>
	{
		if(!DescribeTableData.dataMap)
		{
			DescribeTableData.dataMap = new Map<number, DescribeTableData>();
			ReadTable(DescribeTableData.getFilename(), DescribeTableData);
		}
		return DescribeTableData.dataMap;
	}
	
	static getFilename(): string
	{
		return "DescribeTableData"
	}

	isAutoId():boolean { return false; }
	insertData(id: number) {
		DescribeTableData.dataMap.set(id, this);
	}
};
