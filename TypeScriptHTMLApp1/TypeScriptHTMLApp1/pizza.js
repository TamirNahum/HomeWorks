var Pizza = /** @class */ (function () {
    function Pizza(diameter, numOfSlices, toppings) {
        if (!diameter) {
            this._diameter = this.getRandNum(10, 50);
        }
        else
            this.setDiameter(diameter);
        if (!numOfSlices) {
            this._numOfSlices = this.getRandNum(1, 8);
        }
        else
            this.setNumOfSlices(numOfSlices);
        if (!toppings) {
            this._toppings = this.getRandNum(0, 5);
            Pizza.sumOfToppings += this._toppings;
        }
        else
            this.setToppings(toppings);
    }
    Pizza.prototype.getDiameter = function () {
        return this._diameter;
    };
    Pizza.prototype.setDiameter = function (diameter) {
        if (diameter >= 10 && diameter <= 50) {
            this._diameter = diameter;
        }
    };
    Pizza.prototype.getNumOfSlices = function () {
        return this._numOfSlices;
    };
    Pizza.prototype.setNumOfSlices = function (numOfSlices) {
        if (numOfSlices >= 1 && numOfSlices <= 8) {
            this._numOfSlices = numOfSlices;
        }
    };
    Pizza.prototype.getToppings = function () {
        return this._toppings;
    };
    Pizza.prototype.setToppings = function (toppings) {
        if (toppings >= 0 && toppings <= 5) {
            Pizza.sumOfToppings += toppings;
            this._toppings = toppings;
        }
    };
    Pizza.prototype.getRandNum = function (min, max) {
        return (Math.round((Math.random() * (max - min)) + min));
    };
    Pizza.prototype.isBasicPizza = function () {
        if (this._toppings == 0)
            return true;
        return false;
    };
    Pizza.prototype.printInfo = function () {
        document.write("diameter:" + this._diameter + "<br/>number of slices:" + this._numOfSlices + "<br/>number of toppings:" + this._toppings + "<br/><br/>");
    };
    Pizza.sumOfToppings = 0;
    return Pizza;
}());
//# sourceMappingURL=pizza.js.map