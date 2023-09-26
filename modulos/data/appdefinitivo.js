const fs = require('fs');
const multiplicar=require("./multiplicar.js")
const sumar=require("./suma.js")
const division=require("./division.js")
const resta=require("./resta.js")

// Registra una operación y su resultado en el archivo JSON

/*  const registro = {
 operacion: sumar,
 resultado: sumar
};  */
  
   let leyendo=fs.readFileSync(__dirname+"/registros.json","utf-8")
   let parse=JSON.parse(leyendo)
function copiar (operacion,a,b){
 /*  let completado=callback(a,b)  */
  operacion=process.argv[2].toLowerCase()
  a=+process.argv[3]
  b=+process.argv[4]
  
   let sumatoria={}
 switch (operacion){

  case "sumar":
     sumatoria={
      operacion: "sumar",
      resultado: sumar(a,b)
     }
 parse.push(sumatoria)
 fs.writeFileSync('registros.json',JSON.stringify(parse))
 console.log('Operación:'+ "SUMAR, " +'registro: resultado '+ sumar(a,b));
 break;
 case "division":
  if(b==0){
    return "No se puede dividir un numero por 0"
  }
  sumatoria={
    operacion: "division",
    resultado: division(a,b)
   }
parse.push(sumatoria)
  fs.writeFileSync('registros.json',JSON.stringify(parse))
  console.log('Operación:'+ " DIVISION " +'registro: resultado '+ division(a,b));
 ;
 break;
 case "multiplicar":
  sumatoria={
    operacion: "multiplicar",
    resultado: multiplicar(a,b)
   }
parse.push(sumatoria)
  fs.writeFileSync('registros.json',JSON.stringify(parse))
  console.log('Operación:'+ " MULTIPLICAR " +'registro: resultado '+ multiplicar(a,b));
  break;
  case "listar":
    console.log(parse);
    break;
    case "restar":
      sumatoria={
        operacion: "restar",
        resultado: resta(a,b)
       }
    parse.push(sumatoria)
      fs.writeFileSync('registros.json',JSON.stringify(parse))
      console.log('Operación:'+ " RESTAR " +'registro: resultado '+ resta(a,b));
      break;
}
   
 
}
;
// Muestra la operación y resultado en pantalla
;
console.log((copiar()))