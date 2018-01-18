let pizza1: Pizza;
let pizza2: Pizza;
let pizza3: Pizza;
let pizza4: Pizza;
let pizza5: Pizza;

let pizzaArr: Array<Pizza> = [pizza1, pizza2, pizza3, pizza4, pizza5];

for (let i: number = 0; i < pizzaArr.length; i++) {
    pizzaArr[i] = new Pizza();
    document.write(""+ pizzaArr[i].isBasicPizza()+"<br/>");
    pizzaArr[i].printInfo();
}

document.write("sum of toppings:"+Pizza.sumOfToppings);