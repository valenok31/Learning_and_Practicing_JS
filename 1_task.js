// What the console will show?

let arr = [1, 2, 3, 4, 5];

function arrPopShift() {
    for (let i = 0; i < arr.length; i++) arr.shift()
    console.log(arr)
}

arrPopShift();