var Airplane = /** @class */ (function () {
    function Airplane() {
    }
    Object.defineProperty(Airplane.prototype, "pilotName", {
        get: function () {
            return this._pilotName;
        },
        set: function (pilotName) {
            this._pilotName = pilotName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "companyName", {
        get: function () {
            return this._companyName;
        },
        set: function (companyName) {
            this._companyName = companyName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "destination", {
        get: function () {
            return this._destination;
        },
        set: function (destination) {
            this._destination = destination;
        },
        enumerable: true,
        configurable: true
    });
    Airplane.prototype.fly = function (speed) {
        document.write("airplane fly<br/>");
    };
    Airplane.prototype.land = function () {
        document.write("airplane land<br/>");
        return true;
    };
    return Airplane;
}());
//# sourceMappingURL=airplane.js.map