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
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(name, price, day, month, year, hour, minutes, seconds) {
        var _this = _super.call(this, day, month, year, hour, minutes, seconds) || this;
        _this.productName = name;
        _this.price = price;
        return _this;
    }
    Object.defineProperty(Product.prototype, "productName", {
        get: function () {
            return this._productName;
        },
        set: function (productName) {
            this._productName = productName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            if (price >= 0)
                this._price = price;
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.toString = function () {
        return "product name: " + this._productName + "<br/>price:" + this._price + "<br/>" + _super.prototype.toString.call(this);
    };
    return Product;
}(FullTime));
//# sourceMappingURL=product.js.map