let cell = document.getElementById('cell');
const heads = 'rgb(255, 60, 0)';
const tails = 'rgb(141,255,27)';
let playingCards = [];
let numberCities = 16;
let cardA = false;
let cardB = false;
let flag = true;
let timeTurn = 100;


function createCard() {
    for (let i = 0; i < numberCities; i++) {
        let div = document.createElement('div');
        div.id = `${i}`;
        div.className = 'city';
        div.style.transitionDuration = timeTurn +'ms';
        div.style.backgroundColor = tails;
        div.addEventListener('click', turn);
        cell.append(div);
    }
}

function generatorCard(){
    let firstHalf=[1,2,3,4,5,6,7,8];
    let secondHalf = [...firstHalf];
    playingCards = firstHalf.concat(secondHalf);
    shuffle(playingCards);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

createCard();
generatorCard();

function status(bul) {
    if (!bul) {
        flag = false;
    }
    if (bul) {
        flag = true;
    }
}

function turn(event) {

    let idClick = event.target;
    console.log(idClick)
    if(flag){
        flip(idClick);

        setTimeout(() => {
            changingColor(idClick);
        }, timeTurn)
        setTimeout(() => {
            coincidences(idClick);
        }, timeTurn)
    }
}

function flip(idClick) {
    status(false);
    idClick.addEventListener('transitionend', () => {
        idClick.style.width = '100px';
        idClick.addEventListener('transitionend', () => {
            status(true);
        });
    });
    idClick.style.width = '0px';
}


function changingColor(idClick) {
    if (idClick.style.backgroundColor === heads) {
        setTimeout(() => {
            idClick.style.backgroundColor = tails;
        }, timeTurn)
        setTimeout(() => {
            idClick.innerHTML = '';
        }, timeTurn)
    } else {
        idClick.style.backgroundColor = heads;
        idClick.innerHTML = playingCards[idClick.id];

    }
}

function coincidences(idClick) {
    //console.log(cardA, cardB);
    if (cardA) {
        cardB = idClick;
    } else {
        cardA = idClick;
    }
    if (cardA && cardB) {
        if (playingCards[cardA.id] === playingCards[cardB.id]) {
            cardA.style.backgroundColor = 'rgb(27,202,255)';
            cardB.style.backgroundColor = 'rgb(27,202,255)';
            cardA.removeEventListener("click", turn);
            cardB.removeEventListener("click", turn);
            cardA = false;
            cardB = false;
        }
        if (playingCards[cardA.id] !== playingCards[cardB.id]) {
            setTimeout(() => {
                flip(cardA);
                changingColor(cardA);
                flip(cardB);
                changingColor(cardB);
                cardA = false;
                cardB = false;
            }, timeTurn*2)
        }
    }
}

