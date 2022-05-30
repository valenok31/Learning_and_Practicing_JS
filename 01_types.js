function slowT(z) {
    console.log(`z: ${z}`);
    return z;
}

function cachingDecorator(func) {
    return function(xt) {
        let result = func(xt);
        return result;
    };
}
//slow = function (xt){
//         return slowT(xt);
//     };


slow = cachingDecorator(slowT);
console.log(cachingDecorator(slowT)(5))
console.log( slow(1) );