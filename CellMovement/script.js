let fieldPlaying = document.getElementById('fieldPlaying');
window.addEventListener('scroll', selectIdBox);
let colorDiv1 = `#${generatorColor()}`;
let colorDiv2 = `#${generatorColor()}`;

function generatorColor() {
    let RR = Math.round(Math.random() * 239 + 16);
     //RR = 250
    let GG = Math.round(Math.random() * 239 + 16);
    let BB = Math.round(Math.random() * 239 + 16);
    return RR.toString(16) + '' + GG.toString(16) + '' + BB.toString(16);
}

function addDiv(i) {
    colorDiv2 = colorDiv1;
    colorDiv1 = `#${generatorColor()}`;
    let div = document.createElement('div');
    div.className = "cell";
    div.innerHTML = `<strong>${colorDiv1}</strong>`;
    //div.style.backgroundColor = colorDiv;
    div.style.background = "linear-gradient(to top, " + colorDiv1 + ", " + colorDiv2 + ")";
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

    if ((pageYOffset + clientHeightDDE) > (scrollHeight - 100)) {
        addDiv();
    }
}

