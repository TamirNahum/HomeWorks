var Kite = /** @class */ (function () {
    function Kite() {
    }
    Object.defineProperty(Kite.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kite.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            if (price > 0)
                this._price = price;
        },
        enumerable: true,
        configurable: true
    });
    Kite.prototype.fly = function (speed) {
        document.write("kite fly<br/>");
    };
    Kite.prototype.land = function () {
        document.write("kite land<br/>");
        return true;
    };
    return Kite;
}());
//# sourceMappingURL=kite.js.map