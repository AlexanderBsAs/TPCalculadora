function resta (...args){
    
    return args.reduce(function(acum,elem){
        return acum - elem
    })
    
}

module.exports = resta