'use strict'

var edad = 26;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Acabas de cumplir a mayoria de edad";
        break;
    case 25:
        imprime = "Eres un adulto joven";
        break;
    case 40:
        imprime = "Crisis de los cuarenta";
        break;
    case 75:
        imprime = "Eres ya un anciano";
        break;
    
    default:
        imprime = "tu edad es neutra";
        break;
}

console.log(imprime);