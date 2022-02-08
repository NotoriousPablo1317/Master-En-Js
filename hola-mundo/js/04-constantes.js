'use stricted'

// Constantes
// como una variable, pero su valor no puede cambiar

var web = "https://www.google.cl";
const ip = "192.88.0.12";

web = "https://duckduckgo.com";
// ip = "123465"; // nos dara un error en consola ya que una constante no puede ser modificada
console.log(web, ip);