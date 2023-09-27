let a = function (){
    let b = [...arguments];
    b.push(343)
    return b;
}



console.log(a(3,4,5,3,2))