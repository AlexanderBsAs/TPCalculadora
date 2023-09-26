function multiplicar(...args){
    return args.reduce(function(acum,elem){
        return acum * elem
    })
}

module.exports= multiplicar