class FullTime extends BasicDate {
    private _hour: number;
    private _minutes: number;
    private _seconds: number;

    public constructor(day: number, month: number, year: number, hour: number, minutes: number, seconds: number) {
        super(day, month,year);
        this.hour = hour;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    public get hour(): number {
        return this._hour;
    }

    public set hour(hour: number) {
        if (hour >= 0 && hour <= 23)
            this._hour = hour;
    }

    public get minutes(): number {
        return this._minutes;
    }

    public set minutes(minutes: number) {
        if (minutes >= 0 && minutes <= 59)
            this._minutes = minutes;
    }

    public get seconds(): number {
        return this._seconds;
    }

    public set seconds(seconds: number) {
        if (seconds >= 0 && seconds <= 59)
            this._seconds = seconds;
    }

    public toString(): string {
        return super.toString()+ `${this.hour}:${this._minutes}:${this._seconds}<br/>`;
    }


}