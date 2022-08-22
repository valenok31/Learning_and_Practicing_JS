let cell = document.getElementById('cell');
cell = cell.children;
//console.log(cell)
for (let ar of cell) {
    ar.addEventListener('click', turn);
}

const heads='rgb(255, 60, 0)';
const tails='rgb(205,92,92)';


function turn(event) {

    let idClick = event.target.id;
    idClick = document.getElementById(idClick);
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

    setTimeout(() => {
        if(this.style.backgroundColor===heads)
        {idClick.style.backgroundColor = tails;this.innerHTML = '';}else{idClick.style.backgroundColor = heads;this.innerHTML = 'jk';}
        console.log(this.style.backgroundColor)
    }, 150);



}

