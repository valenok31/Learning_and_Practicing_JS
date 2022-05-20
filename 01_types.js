let a = 'rebus';
let arr = [1,2,3,4,5,7,7,8,88,76,5,4,3,]
let obj = {
    [arr]:arr,
    'b':5,
    c:34,
    d:'let',
    e:true,
    f:new Map([
        [8,true],
        [true,'po'],
        [NaN,'uoi']
    ]),
}


console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))
