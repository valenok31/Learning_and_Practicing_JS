for (let i = 1; i < 1; i++) {
    let div = document.createElement('div');
    div.className = "kletka";
    div.id = 'sd' + i;
    div.onclick = eventClickTdBox;
    div.innerHTML = i;
    wrapper.append(div);
}
let arr = [['X',4,2,5,8,4,3,8,0],[4,'X',2,6,8,1,3,0,0],[1,2,'X',4,5,6,7,8,9],
    [7,4,2,'X',8,3,9,8,0],[5,4,5,5,'X',4,5,8,0],[0,1,2,4,8,'X',3,8,0],
    [9,4,2,5,8,4,'X',9,0],[3,4,3,5,8,4,3,'X',3],[4,4,4,5,8,4,4,8,'X']];
let arrTu=[];

function eventClickTdBox(event) {
    let idElem = event.currentTarget;
    idElem.classList.toggle("article")

    let wrapper=document.getElementById('wrapper');
    let divs = wrapper.getElementsByTagName('div');
    let i=0;
        arrTu = arr[idElem.id];
        console.log(arrTu)
    for (let div of divs) {

            div.innerHTML = arrTu[i];
            i++

    }

    //idElem.innerHTML = 3;
    //alert(idElem.className)
}


let wrapper=document.getElementById('wrapper');
let divs = wrapper.getElementsByTagName('div');
for (let div of divs) {
    div.onclick = eventClickTdBox;
}