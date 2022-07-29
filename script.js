let     arr = [
    [16, 55, 88, 14, 27, 35, 87, 96, 23], [76, 70, 32, 89, 15, 95, 29, 59, 97], [49, 10, 93, 67, 80, 62, 54, 12, 73],
    [43, 85, 58, 48, 68, 46, 74, 72, 22], [53, 60, 83, 42, 51, 91, 81, 37, 57], [56, 44, 77, 64, 66, 38, 52, 13, 40],
    [71, 11, 78, 34, 28, 39, 36, 21, 31], [90, 47, 94, 30, 99, 20, 86, 41, 63], [19, 61, 26, 33, 98, 82, 50, 69, 24]];
let arrTu = [];
let sum = 0;
let wrapper = document.getElementById('wrapper');
let divs = wrapper.getElementsByTagName('div');

function eventClickTdBox(event) {
    let idElem = event.currentTarget;
    sum += +idElem.innerHTML;
    let i = 0;
    if (idElem.innerHTML != '0') {
        arrTu = arr[idElem.id];
        for (let div of divs) {
            arr[i][idElem.id] = '0';
            div.innerHTML = arrTu[i];
            i++
        }
    }
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
    arr = [
        [16, 55, 88, 14, 27, 35, 87, 96, 23], [76, 70, 32, 89, 15, 95, 29, 59, 97], [49, 10, 93, 67, 80, 62, 54, 12, 73],
        [43, 85, 58, 48, 68, 46, 74, 72, 22], [53, 60, 83, 42, 51, 91, 81, 37, 57], [56, 44, 77, 64, 66, 38, 52, 13, 40],
        [71, 11, 78, 34, 28, 39, 36, 21, 31], [90, 47, 94, 30, 99, 20, 86, 41, 63], [19, 61, 26, 33, 98, 82, 50, 69, 24]];
    arrTu = [];
    sum = 0;
    wrapper__score.innerHTML = 'sum';
}