class Airplane implements IFly{

    private _pilotName: string;
    private _companyName: string;
    private _destination: string;

    public get pilotName(): string {
        return this._pilotName;
    }

    public set pilotName(pilotName: string) {
        this._pilotName = pilotName;
    }

    public get companyName(): string {
        return this._companyName;
    }

    public set companyName(companyName: string) {
        this._companyName = companyName;
    }

    public get destination(): string {
        return this._destination;
    }

    public set destination(destination: string) {
        this._destination = destination;
    }

    public fly(speed: number): void {
        document.write("airplane fly<br/>");

    }

    public land(): boolean {
        document.write("airplane land<br/>");

        return true;
    }
}