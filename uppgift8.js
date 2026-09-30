//Programmet skapar ett objekt "book" som innehåller tre olika properties. 
//En funktion bookInfo() tar emot ett objekt "book" och skriver ut info om boken.
//Skrivet av Gabriel Hamilton, 2026

"use strict";

//Boken är ett objekt med namnet book som innehåller properties för namn, författare och utgivningsår.

let book = {
    title: "Brott och straff",
    author: "Fjodor Dostojevskij",
    release: 1866
};

//Funktionen tar emot ett objekt (book i detta fall) som argument och skriver ut varje property i konsolen.

function bookInfo(book){
    console.log("Titel: " + book.title);
    console.log("Författare: " + book.author);
    console.log("Utgivningsår: " + book.release);
}

bookInfo(book);

