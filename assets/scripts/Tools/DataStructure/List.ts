export class List<T>{
    private arr: Array<T> = [];

    public constructor(arr?: Array<T>) {
        if (arr) {
            this.arr = arr;
        }
    }

    public Get(index: number): T {
        return this.arr[index];
    }

    public get Count(): number {
        return this.arr.length;
    }

    public Add(data: T) {
        if (data)
            this.arr.push(data);
    }

    public AddRange(arr: Array<T>) {
        if (arr)
            this.arr = this.arr.concat(arr);
    }

    public Clear() {
        while (this.arr.length > 0) {
            this.arr.pop();
        }
    }

    public Remove(data: T): boolean {
        if (data) {
            let index = this.arr.indexOf(data);
            if (index >= 0)
                this.arr.splice(index, 1);
        }
        return false;
    }

    public RemoveAt(index: number): boolean {
        if (index < 0 || index >= this.arr.length)
            return false;
        this.arr.splice(index, 1);
    }

    public Insert(index: number, item: T) {
        this.arr.splice(index, 0, item);
    }

    public Sort() {
        this.arr.sort();
    }

    public Reverse() {
        this.arr.reverse();
    }

    public ToArray(): T[] {
        let result: Array<T> = [];
        result.concat(this.arr);
        return result;
    }

    public Contains(item: T): boolean {
        return this.arr.indexOf(item) >= 0;
    }

    public IndexOf(item: T): number {
        return this.arr.indexOf(item);
    }

    public LastIndexOf(item: T): number {
        return this.arr.lastIndexOf(item);
    }

    public ToString(): string{
        let result:string="";
        for(let item of this.arr){
            result += item + " ";
        }
        return result;
    }
}