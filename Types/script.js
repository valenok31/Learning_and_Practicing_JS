let cell = document.getElementById('cell');
const heads = 'rgb(255, 60, 0)';
const tails = 'rgb(141,255,27)';
let playingCards = [];
let numberCities = 9;
let cardA;
let cardB;

function createCard() {
    for (let i = 0; i < numberCities; i++) {
        let div = document.createElement('div');
        div.id = `${i}`;
        div.className = 'city';
        div.style.backgroundColor = tails;
        div.addEventListener('click', turn);
        cell.append(div);
    }
}


function generatorCard() {
    for (let i = 0; i < numberCities; i++) {
        playingCards.push(Math.floor(Math.random() * 10))
    }
}

createCard();
generatorCard();

function turn(event) {
    let idClick = event.target.id;
    idClick = document.getElementById(idClick);
    flip(idClick);
    setTimeout(() => changingColor(idClick), 150);
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
        coincidences(idClick, playingCards[idClick.id]);

    }
}

function coincidences(idClick, playingCards){
    if(cardA){cardB =playingCards;}else{cardA = playingCards;}

    if(cardA && cardB){
        if(cardA===cardB){
            idClick.style.backgroundColor = 'rgb(27,202,255)';
        }
        if(cardA!==cardB){
            cardA=undefined;
            cardB=undefined;
            flip(idClick);
        }
    }

    console.log(cardA)
    console.log(cardB)
}

