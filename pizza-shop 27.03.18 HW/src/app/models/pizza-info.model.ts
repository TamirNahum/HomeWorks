import {Pizza} from './pizza.model';

export function getPizzas():Array<Pizza>{
    let arr:Array<Pizza>=new Array<Pizza>(100);
    let rndDiameter:number;
    let rndNumOfSlices:number;
    let rndNumOfToppings:number;


for(let i:number=0;i<100;i++){
    
    rndDiameter=Math.floor(Math.random() * 40) + 10;
    rndNumOfSlices= Math.floor(Math.random() * 5) + 3;
    rndNumOfToppings= Math.floor(Math.random() * 4);
    arr[i]=new Pizza();
    arr[i].diameter=rndDiameter;
    arr[i].slices=rndNumOfSlices;
    arr[i].toppings=rndNumOfToppings;
    arr[i].price=rndDiameter+(rndNumOfSlices*rndNumOfToppings);

}



    return arr;

}