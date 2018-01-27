class Product extends FullTime {
    private _productName: string;
    private _price: number;

    public constructor(name: string, price: number, day: number, month: number, year: number, hour: number, minutes: number, seconds: number) {
        super(day, month, year, hour, minutes, seconds);
        this.productName = name;
        this.price = price;
    }

    public get productName(): string {
        return this._productName;
    }

    public set productName(productName: string) {
        this._productName = productName;
    }

    public get price(): number {
        return this._price;
    }

    public set price(price: number) {
        if (price >=0 )
            this._price = price;
    }

    public toString(): string {
        return `product name: ${this._productName}<br/>price:${this._price}<br/>` + super.toString();
    }
}