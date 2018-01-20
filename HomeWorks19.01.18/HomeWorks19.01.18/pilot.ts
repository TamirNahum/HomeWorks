class Pilot extends FullName {
    private _licenceYears: number;
    private _seniority: number;

    public set licenceYears(licenceYears: number) {
        this._licenceYears = licenceYears;
    }

    public get licenceYears(): number {
        return this._licenceYears;
    }

    public set seniority(seniority: number) {
        this._seniority = seniority;
    }

    public get seniority(): number {
        return this._seniority;
    }

    public printInfo(): void {
        document.write("Pilot<br/>");
        super.printInfo();
        document.write("years of licence: " + this._licenceYears + "<br/>senyority: " + this._seniority + "<br/><br/>");

    }
}