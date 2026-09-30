//Programmet räknar ut totalpriset för produkter som köps och 25% moms som läggs på
//Skrivet av Gabriel Hamilton, 2026

"use strict";

// Variabler

let price = 100;
let amount = 5;

// Utskrift i konsol med beräkningar genomförda med operatorer och variabler

console.log(`Pris: ${price} kr`);
console.log(`Antal: ${amount}`);
console.log("Totalt: " + price * amount);
console.log("Totalt inklusive moms: " + ((price*amount) * 1.25));