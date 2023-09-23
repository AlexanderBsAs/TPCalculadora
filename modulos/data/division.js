function dividir(num1, num2){
    let dividendo = num1;
    let divisor = num2;
    let resultado
        if (divisor == 0){
            console.log("No se puede dividir por 0")
            return null
        }
        else {
            resultado = dividendo / divisor;
        } return resultado 
    }
module.exports = dividir