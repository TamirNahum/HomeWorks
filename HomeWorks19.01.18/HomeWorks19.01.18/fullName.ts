class FullName {
    private _firstName: string;
    private _lastName: string;

    public set lastName(lastName: string) {
        this._lastName = lastName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public printInfo(): void {
        document.write("name: " +this._firstName+"&nbsp"+this._lastName+"<br/>");
    }
}