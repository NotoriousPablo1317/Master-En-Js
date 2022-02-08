'use strict'

var year = 2018
/* While es menos estricto que el for y podemos hacer bucles infinitos. pero debemos saber
quebrarlo */
/*
 while (year <= 2051) {
     // ejecuta esto
     console.log("Estamos en el año: " + year);
     year++;
}
*/

// Decrementar
while (year != 1991) {
    // ejecuta esto
    console.log("Estamos en el año: " + year);

    if(year == 2000){
        break;
    }

    year--;
}

// Do while
var years = 26;

do{
    alert("Solo cuando sea diferente a 20")
    years--;
} while(years > 25)