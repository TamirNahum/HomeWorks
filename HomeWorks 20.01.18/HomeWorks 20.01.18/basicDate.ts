class BasicDate {
    private _day: number;
    private _month: number;
    private _year: number;


    public constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public get day(): number {
        return this._day;
    }

    public set day(day: number) {
        if(day>=1&&day<=31)
        this._day = day;
    }

    public get month(): number {
        return this._month;
    }

    public set month(month: number) {
        if (month >= 1 && month <= 12)
            this._month = month;
    }

    public get year(): number {
        return this._year;
    }

    public set year(year: number) {
        if (year >= 2020 && year <= 2050)
            this._year = year;
    }

    public toString(): string {
        return `${this.day}/${this.month}/${this.year}<br/>`;
    }

}