// Copy Array

let arr = [1, 2, 3, 4, 5];

let arrS = arr.slice;
let arrD = [...arr];
let arrCC = arr.concat();
let arrJSON = JSON.parse(JSON.stringify(arr))

console.log(arrCC)