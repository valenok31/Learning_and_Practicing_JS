let func = function(){
    var a = 0;
    return function(){
        return a++;
    }
}

let a
console.log(a)

console.log(func()());
