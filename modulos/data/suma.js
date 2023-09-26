function sumar (...args){
    let suma=0

return args.reduce(function (acumulador,elemento){
    return acumulador+elemento
})
    
}

module.exports = sumar