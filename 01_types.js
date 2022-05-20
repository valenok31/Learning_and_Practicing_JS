let a = 'rebus';
let b;
let obj = {
    [a]:3,
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


console.log(obj.f)