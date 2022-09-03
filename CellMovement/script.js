let fieldPlaying = document.getElementById('fieldPlaying');
window.addEventListener('scroll', selectIdBox);

function generatorColor (){

    let RR = Math.round(Math.random()*239+16);
    let GG = Math.round(Math.random()*239+16);
    let BB = Math.round(Math.random()*239+16);
    let randomColor = RR.toString(16) + '' + GG.toString(16) + '' + BB.toString(16);
    return randomColor;
}

function addDiv(i) {
    let colorDiv = `#${generatorColor()}`;
    let div = document.createElement('div');
    div.className = "cell";
    div.innerHTML = `<strong>${colorDiv}</strong>`;
    div.style.backgroundColor = colorDiv;
    fieldPlaying.append(div);
}

for (let i = 0; i < 10; i++) {
    addDiv(i)
}

function selectIdBox(event) {
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    let clientHeightDDE = document.documentElement.clientHeight;
    let pageYOffset = window.pageYOffset;
    //console.log(pageYOffset+clientHeightDDE + '/' + scrollHeight)
    console.log((pageYOffset + clientHeightDDE) > (scrollHeight - 100))
    if ((pageYOffset + clientHeightDDE) > (scrollHeight - 100)) {

        addDiv();
    }

}

