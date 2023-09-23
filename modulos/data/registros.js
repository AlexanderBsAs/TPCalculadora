const fs = require('fs');
const multiplicar=require("./multiplicar.js")
// Registra una operación y su resultado en el archivo JSON
const registro = {
 operacion: multiplicar,
 resultado: multiplicar
};
fs.writeFileSync('registros.json', JSON.stringify(registro));
// Muestra la operación y resultado en pantalla
console.log('Operación:'+ multiplicar +'registro.resultado'+ registro.resultado);