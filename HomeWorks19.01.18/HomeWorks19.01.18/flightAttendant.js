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
var FlightAttendant = /** @class */ (function (_super) {
    __extends(FlightAttendant, _super);
    function FlightAttendant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FlightAttendant.prototype, "originCountry", {
        get: function () {
            return this._originCountry;
        },
        set: function (originCountry) {
            this._originCountry = originCountry;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlightAttendant.prototype, "unit", {
        get: function () {
            return this._unit;
        },
        set: function (unit) {
            if (unit == "buisness" || unit == "economy" || unit == "first class")
                this._unit = unit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlightAttendant.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (seniority) {
            this._seniority = seniority;
        },
        enumerable: true,
        configurable: true
    });
    FlightAttendant.prototype.printInfo = function () {
        document.write("flightAttendant<br/>");
        _super.prototype.printInfo.call(this);
        document.write("origin country: " + this._originCountry + "<br/>senyority: " + this._seniority + "<br/>" + "unit: " + this._unit + "<br/><br/>");
    };
    return FlightAttendant;
}(FullName));
//# sourceMappingURL=flightAttendant.js.map