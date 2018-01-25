class Student extends Person {
    private _school: string;
    private _studySubject: string;



    public constructor(fullName: string, age: number, idNumber: string, isMale: boolean) {
        super(fullName, age, idNumber, isMale);
    }



    public get school(): string {
        return this._school;
    }

    public set school(school: string) {
        this._school = school;
    }

    public get studySubject(): string {
        return this._studySubject;
    }

    public set studySubject(studySubject: string) {
        this._studySubject = studySubject;
    }



    public printInfo(): void {
        super.printInfo();
        document.write( "<br/>school: " + this.school + "<br/>study subject: " + this.studySubject + "<br/>");
    }
}