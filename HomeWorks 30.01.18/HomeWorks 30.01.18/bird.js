var Bird = /** @class */ (function () {
    function Bird() {
    }
    Object.defineProperty(Bird.prototype, "birdType", {
        get: function () {
            return this._birdType;
        },
        set: function (birdType) {
            this._birdType = birdType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Bird.prototype.fly = function (speed) {
        document.write("bird fly<br/>");
    };
    Bird.prototype.land = function () {
        document.write("bird land<br/>");
        return false;
    };
    return Bird;
}());
//# sourceMappingURL=bird.js.map