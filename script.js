let arr = [['X', 5, 1, 3, 4, 6, 9, 7, 8], [7, 'X', 9, 6, 1, 3, 2, 5, 8], [2, 8, 'X', 1, 5, 9, 4, 6, 3],
    [5, 8, 9, 'X', 7, 1, 4, 3, 6], [2, 7, 9, 1, 'X', 4, 5, 8, 3], [9, 2, 3, 7, 4, 'X', 6, 5, 8],
    [9, 7, 8, 6, 2, 5, 'X', 4, 3], [4, 8, 7, 1, 6, 2, 3, 'X', 9], [1, 5, 7, 3, 2, 8, 4, 6, 'X']];
let arrTu = [];
let sum = 0;
let wrapper = document.getElementById('wrapper');
let divs = wrapper.getElementsByTagName('div');

function eventClickTdBox(event) {
    let idElem = event.currentTarget;
    sum += +idElem.innerHTML;
    let i = 0;
    if(idElem.innerHTML != '0'){
    arrTu = arr[idElem.id];
    for (let div of divs) {
        arr[i][idElem.id] = '0';
        div.innerHTML = arrTu[i];
        i++
    }}
    wrapper__score.innerHTML = sum;
}


//let wrapper = document.getElementById('wrapper');
//let divs = wrapper.getElementsByTagName('div');
for (let div of divs) {
    div.onclick = eventClickTdBox;
}

let resetKletka = () => {
    let divs = wrapper.getElementsByTagName('div');
    console.log(sum)
    for (let div of divs) {
        console.log(div.className);
        div.innerHTML = '';
    }
    arr = [['X', 5, 1, 3, 4, 6, 9, 7, 8], [7, 'X', 9, 6, 1, 3, 2, 5, 8], [2, 8, 'X', 1, 5, 9, 4, 6, 3],
        [5, 8, 9, 'X', 7, 1, 4, 3, 6], [2, 7, 9, 1, 'X', 4, 5, 8, 3], [9, 2, 3, 7, 4, 'X', 6, 5, 8],
        [9, 7, 8, 6, 2, 5, 'X', 4, 3], [4, 8, 7, 1, 6, 2, 3, 'X', 9], [1, 5, 7, 3, 2, 8, 4, 6, 'X']];
    arrTu = [];
    sum = 0;
    wrapper__score.innerHTML = 'sum';
}