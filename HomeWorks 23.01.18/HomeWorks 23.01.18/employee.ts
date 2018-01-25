class Employee extends Person {
    private _salary: number;


    public constructor(fullName: string, age: number, idNumber: string, isMale: boolean) {
        super(fullName, age, idNumber, isMale);
    }



    public get salary(): number {
        return this._salary;
    }

    public set salary(salary: number) {
        this._salary = salary;
    }

    public printInfo(): void {
        super.printInfo();
        document.write("" + this.salary + "<br/>");
    }
}