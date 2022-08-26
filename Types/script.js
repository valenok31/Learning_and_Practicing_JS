let cell = document.getElementById('cell');
const heads = 'rgb(255, 60, 0)';
const tails = 'rgb(141,255,27)';
let playingCards = [];
let numberCities = 16;
let cardA = false;
let cardB = false;

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
    let firstHalf = [];
    for (let i = 0; i < numberCities / 2; i++) {
        firstHalf.push(Math.floor(Math.random() * 10))
    }
    let secondHalf = [...firstHalf];
    shuffle(secondHalf);
    playingCards = firstHalf.concat(secondHalf);
    //console.log(playingCards)
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generatorCard2() {
    for (let r = 0; r < numberCities; r++) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!playingCards[r]) {
            playingCards[r] = randomNumber;
            let double = Math.floor(Math.random() * numberCities);
            while (playingCards[double]) {
                double = Math.floor(Math.random() * numberCities);
                //console.log(double);
            }
            playingCards[double] = randomNumber;
        }
    }
    // console.log(playingCards)
}


createCard();
generatorCard();

function status(bul) {
    if (!bul) {
        document.body.style.backgroundColor = 'red';
    }
    if (bul) {
        document.body.style.backgroundColor = '';
    }
}

function turn(event) {
    //console.log(event.target)

    status(false);
    let idClick = event.target;

    flip(idClick);


}


function flip(idClick) {
    /*    const newspaperSpinning = [
            {transform: 'scaleX(1)'},
            {transform: 'scaleX(0)'},
            {transform: 'scaleX(1)'},
        ];
        const newspaperTiming = {
            duration: 400,
            iterations: 1,
        }*/


    idClick.addEventListener('transitionend', () => {
        changingColor(idClick);
        coincidences(idClick);
        idClick.style.width = '100px';
        idClick.addEventListener('transitionend', () => status(true));
    });
    //idClick.animate(newspaperSpinning, newspaperTiming);
    idClick.style.width = '0px';


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

function coincidences(idClick) {
    if (cardA) {
        cardB = idClick;
    } else {
        cardA = idClick;
    }
    //console.log(cardA);
    //console.log(cardB);
    if (cardA && cardB) {
        if (playingCards[cardA.id] === playingCards[cardB.id]) {
            cardA.style.backgroundColor = 'rgb(27,202,255)';
            cardB.style.backgroundColor = 'rgb(27,202,255)';
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
            }, 500)
        }

    }

    //console.log(cardA)
    //console.log(cardB)
}

