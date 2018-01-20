class Traveler extends FullName {
    private _passportNumber: string;

    public get passportNumber(): string {
        return this._passportNumber;
    }

    public set passportNumber(passportNumber: string) {
        this._passportNumber = passportNumber;
    }

    public printInfo(): void {
        document.write("Traveler<br/>");
        super.printInfo();
        document.write("passport number: " + this._passportNumber + "<br/><br/>");

    }
}