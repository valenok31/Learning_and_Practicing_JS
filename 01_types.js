let arr = [1, 2, 3, 4, 5];


function arrPopShift() {
    //const lengthArr = arr.length;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr.shift());
    }
}

arrPopShift();