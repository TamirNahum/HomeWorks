var FullName = /** @class */ (function () {
    function FullName() {
    }
    Object.defineProperty(FullName.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullName.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    FullName.prototype.printInfo = function () {
        document.write("name: " + this._firstName + "&nbsp" + this._lastName + "<br/>");
    };
    return FullName;
}());
//# sourceMappingURL=fullName.js.map