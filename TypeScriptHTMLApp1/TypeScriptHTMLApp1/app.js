var pizza1;
var pizza2;
var pizza3;
var pizza4;
var pizza5;
var pizzaArr = [pizza1, pizza2, pizza3, pizza4, pizza5];
for (var i = 0; i < pizzaArr.length; i++) {
    pizzaArr[i] = new Pizza();
    document.write("" + pizzaArr[i].isBasicPizza() + "<br/>");
    pizzaArr[i].printInfo();
}
document.write("sum of toppings:" + Pizza.sumOfToppings);
//# sourceMappingURL=app.js.map