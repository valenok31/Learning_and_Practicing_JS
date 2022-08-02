let arr = [
    [16, 55, 88, 14, 27, 35, 87, 96, 23], [76, 70, 32, 89, 15, 95, 29, 59, 97], [49, 10, 93, 67, 80, 62, 54, 12, 73],
    [43, 85, 58, 48, 68, 46, 74, 72, 22], [53, 60, 83, 42, 51, 91, 81, 37, 57], [56, 44, 77, 64, 66, 38, 52, 13, 40],
    [71, 11, 78, 34, 28, 39, 36, 21, 31], [90, 47, 94, 30, 99, 20, 86, 41, 63], [19, 61, 26, 33, 98, 82, 50, 69, 24]];
let arrSum = [];
let sum = 0;
let wrapper = document.getElementById('wrapper');
let divs = wrapper.getElementsByTagName('div');


const clickedSquare = function (event) {
    let idEvent = document.getElementById(this.id);
    if (idEvent.innerHTML != 'X') {
        idEvent.style.backgroundColor = 'red';
        for (let divK of divs) {
            document.getElementById(divK.id).innerHTML = arr[this.id][divK.id];
            arr[divK.id][this.id] = 'X';
        }
        console.log(this)
        sum += +this.innerHTML;
        document.getElementById('wrapper__score').innerHTML = sum;
        idEvent.innerHTML = 'X';
    }
}

for (let divK of divs) {
    divK.onclick = clickedSquare;
}


const resetClick = function () {
    for (let divK of divs) {
        divK.innerHTML = '';
        divK.style = '';
    }
    arr = [
        [16, 55, 88, 14, 27, 35, 87, 96, 23], [76, 70, 32, 89, 15, 95, 29, 59, 97], [49, 10, 93, 67, 80, 62, 54, 12, 73],
        [43, 85, 58, 48, 68, 46, 74, 72, 22], [53, 60, 83, 42, 51, 91, 81, 37, 57], [56, 44, 77, 64, 66, 38, 52, 13, 40],
        [71, 11, 78, 34, 28, 39, 36, 21, 31], [90, 47, 94, 30, 99, 20, 86, 41, 63], [19, 61, 26, 33, 98, 82, 50, 69, 24]];
    arrSum = [];
    sum = 0;
}