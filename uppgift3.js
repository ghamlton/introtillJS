//Programmet kollar värdet av en variabel "age" för att se vilken åldersgrupp de tillhör
//Skrivet av Gabriel Hamilton, 2026

"use strict";

//Variabel som kan ändras för att testa programmet

let age = 1;

//Beräkning med hjälp av if, else if, else som sedan skriver ut svaret i konsol

if(age < 18){
    console.log("Barn");
}
else if(age >= 18 && age <= 64){
    console.log("Vuxen");
}
else{
    console.log("Pensionär");
}