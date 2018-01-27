var BasicDate = /** @class */ (function () {
    function BasicDate(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    Object.defineProperty(BasicDate.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (day) {
            if (day >= 1 && day <= 31)
                this._day = day;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (month) {
            if (month >= 1 && month <= 12)
                this._month = month;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (year) {
            if (year >= 2020 && year <= 2050)
                this._year = year;
        },
        enumerable: true,
        configurable: true
    });
    BasicDate.prototype.toString = function () {
        return this.day + "/" + this.month + "/" + this.year + "<br/>";
    };
    return BasicDate;
}());
//# sourceMappingURL=basicDate.js.map