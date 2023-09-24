const fs = require('fs');
const multiplicar=require("./multiplicar.js")
const sumar=require("./suma.js")
const division=require("./division.js")

// Registra una operación y su resultado en el archivo JSON
function copiar (callback,a,b){
 
}
const registro = {
 operacion: sumar,
 resultado: sumar
};
fs.writeFileSync('registros.json', JSON.stringify(registro));
// Muestra la operación y resultado en pantalla
console.log('Operación:'+ "division" +'registro.resultado'+ "registro.resultado");
console.log(multiplicar(2,2))