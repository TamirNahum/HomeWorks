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
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(fullName, age, idNumber, isMale) {
        return _super.call(this, fullName, age, idNumber, isMale) || this;
    }
    Object.defineProperty(Teacher.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (seniority) {
            this._seniority = seniority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "studyingSubject", {
        get: function () {
            return this._studyingSubject;
        },
        set: function (studyingSubject) {
            this.studyingSubject = studyingSubject;
        },
        enumerable: true,
        configurable: true
    });
    Teacher.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        document.write("studying Subject: " + this.studyingSubject + "<br/>seniority: " + this.seniority + "<br/>");
    };
    return Teacher;
}(Person));
//# sourceMappingURL=teacher.js.map