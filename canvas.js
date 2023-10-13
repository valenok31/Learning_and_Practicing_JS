let func = function(){
    let a = 0;
    return function(){
        return a++;
    }
}

let f1 = func();
let f2 = func();


console.log(f1());
console.log(f1());
console.log(f1());
console.log(f2());
console.log(f2());
console.log(f2());