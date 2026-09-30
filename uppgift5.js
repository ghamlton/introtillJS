//Programmet skapar en array med 5 olika maträtter. 
//Punkt 1-3 skriver ut elementen på olika sätt. Punkt 4-5 modifierar arrayen. Punkt 6 skriver ut den modifierade arrayen.
//Skrivet av Gabriel Hamilton, 2026

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