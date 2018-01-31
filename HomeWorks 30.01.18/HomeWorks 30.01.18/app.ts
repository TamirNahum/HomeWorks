
let iFlyArr: Array<IFly> = new Array<IFly>(10);

for (let i: number = 0; i < iFlyArr.length; i++) {
    iFlyArr[i] = createFly();
  //  if (iFlyArr instanceof Bird) {
        iFlyArr[i].fly(10);
        iFlyArr[i].land();
//  //  }

// //   if (iFlyArr instanceof Airplane) {
//        (iFlyArr[i] as Airplane).fly(20);
//       (iFlyArr[i] as Airplane).land();
////    }

////if (iFlyArr instanceof Kite) {
//        (iFlyArr[i] as Kite).fly(10);
//        (iFlyArr[i] as Kite).land();
//   // }
}



function createFly(): IFly {
    let rndType = Math.round((Math.random() * (2 )));
    if (rndType == 0) {
        return new Bird();
    }
    if (rndType == 1) {
        return new Airplane();
    }
    if (rndType == 2) {
        return new Kite();
    }
    
}