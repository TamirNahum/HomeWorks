var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fullName, age, idNumber, isMale) {
        return _super.call(this, fullName, age, idNumber, isMale) || this;
    }
    Object.defineProperty(Student.prototype, "school", {
        get: function () {
            return this._school;
        },
        set: function (school) {
            this._school = school;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "studySubject", {
        get: function () {
            return this._studySubject;
        },
        set: function (studySubject) {
            this._studySubject = studySubject;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        document.write("<br/>school: " + this.school + "<br/>study subject: " + this.studySubject + "<br/>");
    };
    return Student;
}(Person));
//# sourceMappingURL=student.js.map