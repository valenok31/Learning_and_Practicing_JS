for (let i = 1; i < 1; i++) {
    let div = document.createElement('div');
    div.className = "kletka";
    div.id = 'sd' + i;
    div.onclick = eventClickTdBox;
    div.innerHTML = i;
    wrapper.append(div);
}
let arr = [['X',5, 1, 3, 4, 6, 9, 7, 8],[7,'X', 9, 6, 1, 3, 2, 5, 8],[2,8,'X',1, 5, 9, 4, 6, 3],
    [5,8,9,'X',7, 1, 4, 3, 6],[2, 7, 9, 1,'X',4, 5, 8, 3],[9, 2, 3, 7, 4,'X',6,5,8],
    [9, 7, 8, 6, 2, 5,'X',4,3],[4, 8, 7, 1, 6, 2, 3,'X',9],[1, 5, 7, 3, 2, 8, 4, 6,'X']];
let arrTu=[];
let sum=0;

function eventClickTdBox(event) {
    let idElem = event.currentTarget;
    idElem.classList.toggle("article")
sum+=+idElem.innerHTML;
    let wrapper=document.getElementById('wrapper');
    let divs = wrapper.getElementsByTagName('div');
    let i=0;
        arrTu = arr[idElem.id];
    console.log(sum)
        //console.log(arr)
    for (let div of divs) {

        arr[i][idElem.id]='S';
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