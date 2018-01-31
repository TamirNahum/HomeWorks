class Kite implements IFly {

    private _color: string;
    private _price: number;


    public get color(): string {
        return this._color;
    }

    public set color(color: string) {
        this._color = color;
    }

    public get price(): number {
        return this._price;
    }

    public set price(price: number) {
        if(price>0)
        this._price = price;
    }

    public fly(speed: number): void {
        document.write("kite fly<br/>");


    }

    public land(): boolean {
        document.write("kite land<br/>");

        return true;
    }
}