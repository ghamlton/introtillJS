//Programmet skapar en array med objekt där varje objekt är en person med namn, ålder och stad
//En funktion personInfo() tar emot element från "people" och skriver ut info baserat på om personen är myndig eller ej.
//Skrivet av Gabriel Hamilton, 2026 

"use strict";

//Array där varje element är objekt som innehåller name, age och city som properties.

let people = [
    {
        name: "Kalle",
        age: 17,
        city: "Härnösand"
    },
    {
        name: "Gustaf",
        age: 32,
        city: "Visby"
    },
    {
        name: "Joel",
        age: 54,
        city: "Malmö"
    }
]

//Funktion som tar emot element från "people" array och sedan kollar om de är myndiga eller ej baserat på "age" property.
//Efter ålderskontroll så skrivs resultat ut i konsolen

function personInfo(person){
    if(person.age < 18){
        console.log(`${person.name} bor i ${person.city} och är inte myndig`);

    }
    else{
        console.log(`${person.name} bor i ${person.city} och är myndig`);
    }
}

//En for-loop som loopar igenom hela arrayen och skickar varje element till personInfo() funktionen.

for(let i = 0; i < people.length; i++){
    personInfo(people[i]);
}
