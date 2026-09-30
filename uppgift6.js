//Programmet innehåller en funktion som tar emot bredd och höjd för att räkna ut area som sedan returneras.
//Funktionen anropas med olika argument i console.log där olika resultat skrivs ut.
//Skrivet av Gabriel Hamilton, 2026

"use strict";

//Funktionen med som tar emot två argument och returnerar "area"

function calculateArea(width, height)
{
    let area = width * height;
    return area;
}

//Utskrift med olika värden som argument i calculateArea()

console.log("Arean är: " + calculateArea(10,20));
console.log("Arean är: " + calculateArea(4,8));
console.log("Arean är: " + calculateArea(5,9));