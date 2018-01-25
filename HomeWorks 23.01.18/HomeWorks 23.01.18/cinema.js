var Cinema = /** @class */ (function () {
    function Cinema() {
        this._studentDiscount = Math.round((Math.random() * (10)) + 10);
        this._teacherDiscount = Math.round((Math.random() * (5)) + 5);
    }
    Object.defineProperty(Cinema.prototype, "cinemaName", {
        get: function () {
            return this._cinemaName;
        },
        set: function (cinemaName) {
            this._cinemaName = cinemaName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "moviePrice", {
        get: function () {
            return this._moviePrice;
        },
        set: function (moviePrice) {
            if (moviePrice >= 30 && moviePrice <= 200)
                this._moviePrice = moviePrice;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "studentDiscount", {
        get: function () {
            return this._studentDiscount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "teacherDiscount", {
        //public set studentDiscount(studentDiscount: number) {
        //    this._studentDiscount = studentDiscount;
        //}
        get: function () {
            return this._teacherDiscount;
        },
        enumerable: true,
        configurable: true
    });
    return Cinema;
}());
//# sourceMappingURL=cinema.js.map