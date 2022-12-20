// Exersice 1 recipe for carbonara

let spaghetti = 400;
let guanciale = 250;
let egg = 6;
let cheese = 50;
let pepper = 4;
let water = 3000;
let salt = 20;

console.log("ingredients");
console.log("spaghetti",spaghetti);
console.log("guanciale",guanciale)
console.log("egg",egg);
console.log("cheese",cheese);
console.log("pepper",pepper);
console.log("water",water);
console.log("salt",salt);

let cheeseSauce = egg + cheese;
console.log("add eggs with cheese",cheeseSauce)

let dashOfPepper = pepper -1;
pepper -=1;
//console.log(dashOfPepper)
let eggyCheese = cheeseSauce + dashOfPepper;
console.log("add a dashOfPeper", eggyCheese)

let pot = water + salt;
console.log("boil water with pinch of salt", pot)

pot += spaghetti;
console.log("put saghetti in water",pot);
let pastaWater = 200 +2;
console.log("put some water aside",pastaWater);
pot -= pastaWater;
salt -= 2;
let absorbsionAmount = 2;
let cookingWater = spaghetti * absorbsionAmount;

console.log(cookingWater);

let discardedWater = water - pastaWater-cookingWater;



console.log(discardedWater);



/*
BigBowl = BigBowl + .25*pan;
//console.log(BigBowl);

let FryingPan = guanciale;
let pot = spaghetti;

FryingPan = FryingPan + pot;
FryingPan = FryingPan + BigBowl;
FryingPan + .75 * pepper;

//console.log(FryingPan);
*/

