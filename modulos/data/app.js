let fs = require("fs")
let multiplicar=require("./multiplicar")
let sumar=require("./suma")
let dividir=require("./division")
let restar=require("./resta")

let leer =fs.readFileSync(__dirname+"/registros.json","utf-8")

/* const registro = {
    operacion: 'suma',
    resultado: 10
   }; */
 let parse=JSON.parse(leer)
   let registro={}
let variables=process.argv.filter(function (elemento,indice){
  if(indice>2){
    return +elemento
  }
})
   let variables2=variables.map(elemento=> +elemento)
   function copiar(operacion,...args){
 operacion=process.argv[2].toLowerCase() 
/* operacion=process.argv[2] */


args=variables2
/* args= +process.argv[5] */


    switch(operacion) {
        case "sumar":
          registro= {
            operacion: 'sumar',
            resultado: sumar(...args)
           }
           parse.push(registro)
           fs.writeFileSync('registros.json',JSON.stringify(parse))
          
            console.log('Operación:'+ " Sumar " +'registro: resultado '+ sumar(...args))
          break;
           ; 
           case "restar":
            registro= {
              operacion: 'restar',
              resultado: restar(...args)
             }
             parse.push(registro)
             fs.writeFileSync('registros.json',JSON.stringify(parse))
             console.log('Operación:'+ " Restar " +'registro: resultado '+ restar(...args)) 
            break;
            case "multiplicar":
              registro= {
                operacion: 'multiplicar',
                resultado: multiplicar(...args)
               }
               parse.push(registro)
               fs.writeFileSync('registros.json',JSON.stringify(parse))
               console.log('Operación:'+ " Multiplicar " +'registro: resultado '+ multiplicar(...args));
               break;
                case "division":
                  registro= {
                    operacion: 'Division',
                    resultado: dividir(...args)
                   }
                   parse.push(registro)
                   fs.writeFileSync('registros.json',JSON.stringify(parse))
                   console.log('Operación:'+ " DIVISION " +'registro: resultado '+ dividir(...args))
                   break;
                    ;
                    
            case "listar": 
            console.log(parse)
             return
    }
   }
copiar(...variables2)