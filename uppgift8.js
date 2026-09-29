"use static";

//Boken är ett object med namnet book som innehåller properties för namn, författare och utgivningsår.

let book = {
    title: "Brott och straff",
    author: "Fjodor Dostojevskij",
    release: 1866
};

//Funktionen tar emot ett object (book i detta fall) som argument och skriver ut varje property i konsolen.

function bookInfo(book){
    console.log("Titel: " + book.title);
    console.log("Författare: " + book.author);
    console.log("Utgivningsår: " + book.release);
}

bookInfo(book);

