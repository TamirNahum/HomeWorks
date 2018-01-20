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
var Pilot = /** @class */ (function (_super) {
    __extends(Pilot, _super);
    function Pilot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Pilot.prototype, "licenceYears", {
        get: function () {
            return this._licenceYears;
        },
        set: function (licenceYears) {
            this._licenceYears = licenceYears;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pilot.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (seniority) {
            this._seniority = seniority;
        },
        enumerable: true,
        configurable: true
    });
    Pilot.prototype.printInfo = function () {
        document.write("Pilot<br/>");
        _super.prototype.printInfo.call(this);
        document.write("years of licence: " + this._licenceYears + "<br/>senyority: " + this._seniority + "<br/><br/>");
    };
    return Pilot;
}(FullName));
//# sourceMappingURL=pilot.js.map