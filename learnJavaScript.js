//'use strict'
const funcNew = function (){
    console.log('it worked!')
    return
}

const obj = {
    a:3,
    funcNew (){
        console.log('and it worked too!')
        return
    }
}


let b = obj.funcNew;

b.call()