"use static";

let numbers = [5, 7, 10, 18, 23];

// Funktionen tar emot en array som argument och använder en for-loop som itererar över varje element. Värdet av varje element (array[i] läggs till i variabeln "sum" som sedan returneras)

function arraySum(array)
{
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }

    return sum;
}

//Utskrift där arraySum() tar emot numbers[] som argument 

console.log("Summan är: " + arraySum(numbers));