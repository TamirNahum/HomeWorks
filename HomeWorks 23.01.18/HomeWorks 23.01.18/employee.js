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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fullName, age, idNumber, isMale) {
        return _super.call(this, fullName, age, idNumber, isMale) || this;
    }
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (salary) {
            this._salary = salary;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        document.write("" + this.salary + "<br/>");
    };
    return Employee;
}(Person));
//# sourceMappingURL=employee.js.map