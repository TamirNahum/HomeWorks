class Teacher extends Person {
    private _seniority: number;
    private _studyingSubject: string;



    public constructor(fullName: string, age: number, idNumber: string, isMale: boolean) {
        super(fullName, age, idNumber, isMale);
    }



    public get seniority(): number {
        return this._seniority;
    }

    public set seniority(seniority: number) {
        this._seniority = seniority;
    }

    public get studyingSubject(): string {
        return this._studyingSubject;
    }

    public set studyingSubject(studyingSubject: string) {
        this.studyingSubject = studyingSubject;
    }



    public printInfo(): void {
        super.printInfo()
        document.write( "studying Subject: " + this.studyingSubject + "<br/>seniority: " + this.seniority + "<br/>");
    }
}