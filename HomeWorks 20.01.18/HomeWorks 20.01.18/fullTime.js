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
var FullTime = /** @class */ (function (_super) {
    __extends(FullTime, _super);
    function FullTime(day, month, year, hour, minutes, seconds) {
        var _this = _super.call(this, day, month, year) || this;
        _this.hour = hour;
        _this.minutes = minutes;
        _this.seconds = seconds;
        return _this;
    }
    Object.defineProperty(FullTime.prototype, "hour", {
        get: function () {
            return this._hour;
        },
        set: function (hour) {
            if (hour >= 0 && hour <= 23)
                this._hour = hour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTime.prototype, "minutes", {
        get: function () {
            return this._minutes;
        },
        set: function (minutes) {
            if (minutes >= 0 && minutes <= 59)
                this._minutes = minutes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTime.prototype, "seconds", {
        get: function () {
            return this._seconds;
        },
        set: function (seconds) {
            if (seconds >= 0 && seconds <= 59)
                this._seconds = seconds;
        },
        enumerable: true,
        configurable: true
    });
    FullTime.prototype.toString = function () {
        return _super.prototype.toString.call(this) + (this.hour + ":" + this._minutes + ":" + this._seconds + "<br/>");
    };
    return FullTime;
}(BasicDate));
//# sourceMappingURL=fullTime.js.map