let cell = document.getElementById('cell');
const heads = 'rgb(255, 60, 0)';
const tails = 'rgb(141,255,27)';
let playingCards = [];
let numberCities = 16;
let cardA = false;
let cardB = false;
let flag = false;

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
            }
            playingCards[double] = randomNumber;
        }
    }
}


createCard();
generatorCard();

function status(bul) {
    if (!bul) {
        console.log('start')
        flag = false;
    }
    if (bul) {
        console.log('end')
        flag = true;
    }
}

function turn(event) {
    status(false);
    let idClick = event.target;
    flip(idClick);
    setTimeout(() => {
        coincidences(idClick);
    }, 1000)
    setTimeout(() => {
        changingColor(idClick);
    }, 500)

}

function flip(idClick) {
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
        setTimeout(()=>{
            idClick.style.backgroundColor = tails;
        },500)
        setTimeout(()=>{
            idClick.innerHTML = '';
        },300)
    } else {
        idClick.style.backgroundColor = heads;
        idClick.innerHTML = playingCards[idClick.id];

    }
}

function coincidences(idClick) {
    console.log(cardA, cardB);
    if (cardA) {
        cardB = idClick;
    } else {
        cardA = idClick;
    }
    if (cardA && cardB) {
        if (playingCards[cardA.id] === playingCards[cardB.id]) {
            cardA.style.backgroundColor = 'rgb(27,202,255)';
            cardB.style.backgroundColor = 'rgb(27,202,255)';
            cardA = false;
            cardB = false;
        }
        if (playingCards[cardA.id] !== playingCards[cardB.id]) {
            setTimeout(() => {
                //alert('qrewt')
                flip(cardA);
                changingColor(cardA);
                flip(cardB);
                changingColor(cardB);
                cardA = false;
                cardB = false;
            }, 500)
        }
    }
}

