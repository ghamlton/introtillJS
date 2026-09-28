"use strict";

let dishes = ["Ugnspannkaka", "Köttfärssås", "Fried Rice", "Lasagne", "Stroganoff"];

// Punkt 1
console.log("");
console.log("Punkt 1:");
for(let i = 0; i < dishes.length; i++){
    console.log(dishes[i]);
}

// Punkt 2
console.log("");
console.log("Punkt 2:");
console.log(dishes[0]);

//Punkt 3
console.log("");
console.log("Punkt 3:");
console.log(dishes[4]);

// Punkt 4

dishes.push("Pad Thai");

// Punkt 5

dishes.shift();

// Punkt 6
console.log("");
console.log("Punkt 6:");
for(let i = 0; i < dishes.length; i++){
    console.log(dishes[i]);
}