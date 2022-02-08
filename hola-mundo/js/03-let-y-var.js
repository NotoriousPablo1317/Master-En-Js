'use strict'
/*let permite definir variables limitando su alcance al bloque, declaracion o expresion donde se esta usando
var define una variable global o local en una función sin importar el hambito del bloque

Pruebas con let y var
el alcance que tiene las variables y como actuan en en funcion de diferentes bloques
*/
// Prueba con var
var numero = 40;
console.log(numero); // numero valor 40

if(true) {
    var numero = 50;
    console.log(numero); // numero deberia valer 50
}

console.log(numero); // numero valor sera 50

// Prueba con let a nivel de bloque(de codigo)
var texto = "Entrenando js siempre es bueno";
console.log(texto); // valor js

if (true) { /* Bloque let */
    let texto = "Sí, siempre es bueno entrenar JS";
    console.log(texto); // afirmacion de js
}

console.log(texto);