let arr = [
    [16, '55', 88, 14, 27, 35, 87, 96, 23], [76, 70, 32, 89, 15, 95, 29, 59, 97], [49, 10, 93, 67, 80, 62, 54, 12, 73],
    [43, 85, 58, 48, 68, 46, 74, 72, 22], [53, 60, 83, 42, 51, 91, 81, 37, 57], [56, 44, 77, 64, 66, 38, 52, 13, 40],
    [71, 11, 78, 34, 28, 39, 36, 21, 31], [90, 47, 94, 30, 99, 20, 86, 41, 63], [19, 61, 26, 33, 98, 82, 50, 69, 24]];
let arrSum = [];
let sum = 0;
let sum2 = []
let wrapper = document.getElementById('wrapper');
let divs = wrapper.getElementsByTagName('div');


const clickedSquare = function (event) {
    let idEvent = document.getElementById(event.target.id);
    if (idEvent.innerHTML != 'X') {
        idEvent.style.backgroundColor = 'red';
        console.log(event.target.dataset.getr);

        sum += +event.target.innerHTML;
        sum2.push(+event.target.innerHTML);

        let z = sum2.reduce((a, b) => {
            return a += b;
        })
        document.getElementById('wrapper__score').innerHTML = z;
        for (let divK of divs) {
            document.getElementById(divK.id).innerHTML = arr[event.target.id][divK.id];
            arr[divK.id][event.target.id] = 'X';
        }
        idEvent.innerHTML = 'X';
        if (sum2.length == 9) {
            arrSum.push(z)
            document.getElementById('wrapper__score_arr').innerHTML = arrSum;
            console.log(arrSum)
        }
    }
}

for (let divK of divs) {
    //divK.onclick = clickedSquare;
    divK.addEventListener('click', clickedSquare)


}

/*wrapper.onclick = clickedSquare;*/



const resetClick = function () {
    for (let divK of divs) {
        divK.innerHTML = '';
        divK.style = '';
        divK.title = '';
    }
    arr = [
        [16, 55, 88, 14, 27, 35, 87, 96, 23], [76, 70, 32, 89, 15, 95, 29, 59, 97], [49, 10, 93, 67, 80, 62, 54, 12, 73],
        [43, 85, 58, 48, 68, 46, 74, 72, 22], [53, 60, 83, 42, 51, 91, 81, 37, 57], [56, 44, 77, 64, 66, 38, 52, 13, 40],
        [71, 11, 78, 34, 28, 39, 36, 21, 31], [90, 47, 94, 30, 99, 20, 86, 41, 63], [19, 61, 26, 33, 98, 82, 50, 69, 24]];
    sum2 = [];
    sum = 0;
    document.getElementById('wrapper__score').innerHTML = sum;
}