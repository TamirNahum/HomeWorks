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
var Traveler = /** @class */ (function (_super) {
    __extends(Traveler, _super);
    function Traveler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Traveler.prototype, "passportNumber", {
        get: function () {
            return this._passportNumber;
        },
        set: function (passportNumber) {
            this._passportNumber = passportNumber;
        },
        enumerable: true,
        configurable: true
    });
    Traveler.prototype.printInfo = function () {
        document.write("Traveler<br/>");
        _super.prototype.printInfo.call(this);
        document.write("passport number: " + this._passportNumber + "<br/><br/>");
    };
    return Traveler;
}(FullName));
//# sourceMappingURL=traveler.js.map