class Person {
    private _fullName: string;
    private _age: number;
    private _idNumber: string;
    private _isMale: boolean;

    public constructor(fullName: string, age: number, idNumber: string, isMale: boolean) {
        this.fullName = fullName;
        this.age = age;
        this.idNumber = idNumber;
        this.isMale = isMale;
    }

    public get fullName(): string {
        return this._fullName;
    }

    public set fullName(fullName: string) {
        this._fullName = fullName;
    }

    public get age(): number {
        return this._age;
    }

    public set age(age: number) {
        if (age >= 0 && age <= 120)
            this._age = age;
    }

    public get idNumber(): string {
        return this._idNumber;
    }

    public set idNumber(idNumber: string) {
        if (idNumber.length == 9) {
                this._idNumber = idNumber;
            }
        }

    

    public get isMale(): boolean {
        return this._isMale;
    }

    public set isMale(isMale: boolean) {
        this._isMale = isMale;
    }

    public printInfo(): void {
        document.write("name:" + this._fullName + "<br/>age:" + this._age + "<br/>id number:" + this._idNumber + "<br/>male:" + this._isMale + "<br/>");
    }
}