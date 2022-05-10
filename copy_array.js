// Copy Array

let arr = [1, 2, 3, 4, 5];

let arr_slice = arr.slice;
let arrD = [...arr];
let arr_concat = arr.concat();
let arr_filter = arr.filter(()=>true)
let arr_JSON = JSON.parse(JSON.stringify(arr))

console.log(arr_concat)