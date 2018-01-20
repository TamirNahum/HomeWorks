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
var LandAttendant = /** @class */ (function (_super) {
    __extends(LandAttendant, _super);
    function LandAttendant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LandAttendant.prototype, "originCountry", {
        get: function () {
            return this._originCountry;
        },
        set: function (originCountry) {
            this._originCountry = originCountry;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LandAttendant.prototype, "landWork", {
        get: function () {
            return this._landWork;
        },
        set: function (landWork) {
            this._landWork = landWork;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LandAttendant.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (seniority) {
            this._seniority = seniority;
        },
        enumerable: true,
        configurable: true
    });
    LandAttendant.prototype.printInfo = function () {
        document.write("LandAttendant<br/>");
        _super.prototype.printInfo.call(this);
        document.write("origin country: " + this._originCountry + "<br/>senyority: " + this._seniority + "<br/>" + "land work: " + this._landWork + "<br/><br/>");
    };
    return LandAttendant;
}(FullName));
//# sourceMappingURL=landAttendant.js.map