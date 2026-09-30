//Programmet skriver först ut tal från 1-20 och sedan enbart jämna tal mellan 1-20
//Skrivet av Gabriel Hamilton, 2026

"use strict";

//Första delen som skriver ut heltal från 1 till 20

for(let i = 1; i<=20; i++){
    console.log(i);
}

// Ändrad for-loop som skriver ut enbart jämna tal

for(let i = 1; i<=20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}