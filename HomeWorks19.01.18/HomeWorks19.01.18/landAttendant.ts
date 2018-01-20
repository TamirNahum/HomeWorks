class LandAttendant extends FullName {
    private _originCountry: string;
    private _seniority: number;
    private _landWork: string;

    public set originCountry(originCountry: string) {
        this._originCountry = originCountry;
    }

    public get originCountry(): string {
        return this._originCountry;
    }

    public set landWork(landWork: string) {
        this._landWork = landWork;
    }

    public get landWork(): string {
        return this._landWork;
    }

    public set seniority(seniority: number) {
        this._seniority = seniority;
    }

    public get seniority(): number {
        return this._seniority;
    }

    public printInfo(): void {
        document.write("LandAttendant<br/>");
        super.printInfo();
        document.write("origin country: " + this._originCountry + "<br/>senyority: " + this._seniority + "<br/>" + "land work: " + this._landWork + "<br/><br/>");

    }
}