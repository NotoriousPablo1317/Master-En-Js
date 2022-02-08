'use strict'
// alert('comprobando la carga')

// Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2; // puede ocupar -, *, /, % saca el resto de la division entre 2 numeros.

alert("El resultadod de la operacion es: " + operacion);

// Tipos de datos
var numero_entero = 44;
var cadena_texto = 'Hola soy pablo me llaman "el turco"'; // tambien puede ocupar ' '.
var verdadero_o_falso = true;

var numero_falso = "33";

// convierte numero string a numero de lo contrario solo lo concatena al ser texto
console.log(Number(numero_falso)+7);
//console.log(parseInt(numero_falso)+7); // numero redondeado
//console.log(parseFloat(numero_falso)+7); //numero flotante
//console.log(String(numero_entero)+4); //numero a texto

// Visualizar tipo de dato de las variables
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);