// #1 What the console will show?
let arr = [1, 2, 3, 4, 5];
function arrPopShift() {
    for (let i = 0; i < arr.length; i++) arr.shift()
    console.log(arr)
}
arrPopShift();

// #2 What will be the result
let func = (a = 2) => {
    a ??= 3;
    return a == 5;
}
let result = func(5)
console.log(result)