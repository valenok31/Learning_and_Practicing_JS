let cell = document.getElementById('cell');
//cell = cell.children;
/*for (let ar of cell.children) {
    ar.addEventListener('click', turn);
}*/

const heads = 'rgb(255, 60, 0)';
const tails = 'rgb(205,92,92)';
let playingCards=[];

function createCard(){
    for(let i =0; i < 19; i++){
        let div = document.createElement('div');
        div.id = `${i}`;
        div.className = 'city';
        div.addEventListener('click', turn);
        cell.append(div);
    }
}


function generatorCard (){
    let ziz=cell.querySelectorAll('div');
    for(let i=0; i<ziz.length; i++){
        playingCards.push(Math.floor(Math.random()*10))
    }
    console.log(playingCards)
}





createCard();
generatorCard();
function turn(event) {
    let idClick = event.target.id;
    idClick = document.getElementById(idClick);
    flip(idClick);
    setTimeout(()=>changingColor(idClick), 150);
   // console.log(idClick.id)
}

function flip(idClick) {
    const newspaperSpinning = [
        {transform: 'scaleX(1)'},
        {transform: 'scaleX(0)'},
        {transform: 'scaleX(1)'},
    ];

    const newspaperTiming = {
        duration: 300,
        iterations: 1,
    }
    idClick.animate(newspaperSpinning, newspaperTiming);
}

function changingColor(idClick) {
    if (idClick.style.backgroundColor === heads) {
        idClick.style.backgroundColor = tails;
        idClick.innerHTML = '';
    } else {
        idClick.style.backgroundColor = heads;
        idClick.innerHTML = playingCards[idClick.id];
    }
}