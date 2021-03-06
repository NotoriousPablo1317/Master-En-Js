'use strict'
//alert("Cargando...")

// Condicional if
// Estructura de control que permite comprar algo ejemplo
// Si A es igual a B entonces haz algo

/* ejemplo 1
var edad1 = 32;
var edad2 = 12;

// si pasa esto
if (edad1 > edad2) {
    // ejecuta esto
    console.log("Edad 1 es mayor que edad2");
} else {
    console.log("La edad 1 es inferior");
}
*/

// Ejemplo 2
var edad = 26;
var nombre = 'Pablo G Diaz'
/*
Operadores relacionales
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
igual: ==
Distinto: !=
*/
    // Si pasa esto
if(edad >= 18) {
    // Ejecuta esto
    console.log(nombre+" tiene "+edad+ " años, es mayor de edad");

    if(edad >= 33){
        console.log('Todavia eres millenial');
    } else if(edad >= 70){
        console.log('Eres de la tercera edad');
    } else{
        console.log('Ya no eres millenial');
    }
} else{
    console.log(nombre+" tiene "+edad+ " años, es menor de edad");
}

/*
Operadores logicos
AND(Y): &&
OR(O): ||
NEGACION: !
*/

var year = 2022;
// Negacion

if (year != 2019) {
    console.log("El año no es 2016 realmente es " + year);
}

// And
if (year >= 2000 && year <= 2022) {
    console.log("Estamos en la era actual");
} else{
    console.log("Estamos en la era post moderna");
}

// OR
if (year == 2002 || (year >= 2022 && year == 2022)) {
    console.log("El año acaba en 2 ");
} else{
    console.log("Año no registrado");
}