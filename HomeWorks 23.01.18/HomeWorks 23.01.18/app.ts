let cinema: Cinema = new Cinema();
cinema.cinemaName = "tamir cinema";
cinema.moviePrice = 60;
document.write("" + cinema.studentDiscount + " " + cinema.teacherDiscount + "<br/>");

let personArr = new Array<Person>(15);
setValToPersonArr(personArr);
profits(personArr, cinema);


function profits(personArr: Array<Person>, cinema: Cinema): void {
    let sumProfits: number = 0;
    let studentsCount: number = 0;
    let teacherCount: number = 0;
    let employeeCount: number = 0;

    for (let i: number = 0; i < personArr.length; i++) {
        if (personArr[i] instanceof Employee) {
            sumProfits += cinema.moviePrice;
            employeeCount++;
        }

        if (personArr[i] instanceof Student) {
            sumProfits += cinema.moviePrice-( cinema.moviePrice * (cinema.studentDiscount / 100));
            studentsCount++;
        }

        if (personArr[i] instanceof Teacher) {
            sumProfits += cinema.moviePrice - (cinema.moviePrice * (cinema.teacherDiscount / 100)); teacherCount++;
        }
    }

    document.write("cinema profit today:" + sumProfits + "<br/>movie price at the cinema:" + cinema.moviePrice + "<br/>number of viewers today:" + personArr.length + "<br/>sudents viewrs:" + studentsCount + "<br/>trachers viewrs:" + teacherCount + "<br/>employee viewrs:" + employeeCount);
}


function setValToPersonArr(personArr: Array<Person>): void {
    for (let i: number = 0; i < personArr.length; i++) {
        let rndType = Math.round((Math.random() * (2)));
        switch (rndType) {
            case 0: personArr[i] = new Student("S", 12, "123456789", true); break;
            case 1: personArr[i] = new Teacher("T", 30, "111222333", false); break;
            case 2: personArr[i] = new Employee("E", 42, "987654321", true); break;

        }

        
    }
}