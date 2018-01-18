class Pizza {
    private _diameter: number;
    private _numOfSlices: number;
    private _toppings: number;
    public static sumOfToppings: number=0;

    public constructor(diameter?: number, numOfSlices?: number, toppings?: number) {
        if (!diameter) {
            this._diameter=this.getRandNum(10, 50)
        } else this.setDiameter(diameter);

        if (!numOfSlices) {
            this._numOfSlices= this.getRandNum(1, 8)
        } else this.setNumOfSlices(numOfSlices);

        if (!toppings) {
            this._toppings = this.getRandNum(0, 5);
            Pizza.sumOfToppings += this._toppings;
        } else this.setToppings(toppings);

    }

    public getDiameter(): number {
        return this._diameter;
    }

    public setDiameter(diameter: number): void {
        if (diameter >= 10 && diameter <= 50) {
            this._diameter = diameter;
        }
    }
    public getNumOfSlices(): number {
        return this._numOfSlices;
    }

    public setNumOfSlices(numOfSlices: number): void {
        if (numOfSlices >= 1 && numOfSlices <= 8) {
            this._numOfSlices = numOfSlices;
        }
    }
    public getToppings(): number {
        return this._toppings;
    }

    public setToppings(toppings: number): void {
        if (toppings >= 0 && toppings <= 5) {
            Pizza.sumOfToppings += toppings;
            this._toppings = toppings;
        }
    }

    private getRandNum(min: number, max: number): number {

        return (Math.round((Math.random() * (max - min)) + min))
    }

    public isBasicPizza(): boolean {
        if (this._toppings == 0)
            return true;
        return false;
    }

    public printInfo(): void {
        document.write(`diameter:${this._diameter}<br/>number of slices:${this._numOfSlices}<br/>number of toppings:${this._toppings}<br/><br/>`);
    }
}