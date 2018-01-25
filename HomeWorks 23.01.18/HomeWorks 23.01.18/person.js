var Person = /** @class */ (function () {
    function Person(fullName, age, idNumber, isMale) {
        this.fullName = fullName;
        this.age = age;
        this.idNumber = idNumber;
        this.isMale = isMale;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (fullName) {
            this._fullName = fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            if (age >= 0 && age <= 120)
                this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "idNumber", {
        get: function () {
            return this._idNumber;
        },
        set: function (idNumber) {
            if (idNumber.length == 9) {
                this._idNumber = idNumber;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "isMale", {
        get: function () {
            return this._isMale;
        },
        set: function (isMale) {
            this._isMale = isMale;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.printInfo = function () {
        document.write("name:" + this._fullName + "<br/>age:" + this._age + "<br/>id number:" + this._idNumber + "<br/>male:" + this._isMale + "<br/>");
    };
    return Person;
}());
//# sourceMappingURL=person.js.map