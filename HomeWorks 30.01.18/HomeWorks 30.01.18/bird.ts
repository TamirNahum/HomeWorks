class Bird implements IFly{

    private _birdType: string;
    private _color: string;
    private _age: number;

    public get birdType(): string {
        return this._birdType;
    }

    public set birdType(birdType: string) {
        this._birdType = birdType;
    }

    public get color(): string {
        return this._color;
    }

    public set color(color: string) {
        this._color = color;
    }

    public get age(): number {
        return this._age;
    }

    public set age(age: number) {
        this._age = age;
    }

    public fly(speed: number): void {
        document.write("bird fly<br/>");

    }

    public land(): boolean {
        document.write("bird land<br/>");

        return false;
    }
}