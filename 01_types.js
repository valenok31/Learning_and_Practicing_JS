let a = 'rebus';
let arr = [1, 2, 3, 4, 5, 7, 7, 8, 88, 76, 5, 4, 3,]
let obj = {
    a: 4,
    'b': 5,
    c: 34,
    d: 'let',
    e: true,
    f: 43,
    }

let arrArr = Object.entries(obj)

console.log(arrArr[3]);
console.log(Object.fromEntries(arrArr));
