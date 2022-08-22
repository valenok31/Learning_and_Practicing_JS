let cell = document.getElementById('cell');
cell = cell.children;
//console.log(cell)
for (let ar of cell) {
    ar.addEventListener('click', turn);
}


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
        if(this.style.backgroundColor==='rgb(255, 60, 0)')
        {idClick.style.backgroundColor = '#CD5C5CFF';}else{idClick.style.backgroundColor = '#FF3C00FF';}
        console.log(this.style.backgroundColor)
    }, 150);



}

