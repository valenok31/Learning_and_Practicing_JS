let func = function(){
    let a = 0;
    return function(){
        return a++;
    }
}


console.log(func()());
