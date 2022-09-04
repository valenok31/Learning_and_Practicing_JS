selectIdBox();
let fieldPlaying = document.getElementById('fieldPlaying');
window.addEventListener('scroll', selectIdBox);
let colorDiv1 = `#${generatorColor()}`;
let colorDiv2 = `#${generatorColor()}`;
let infoTest;
let n = 0;

function generatorColor() {
    let RR = Math.round(Math.random() * 239 + 16);
    //RR = 250
    let GG = Math.round(Math.random() * 239 + 16);
    let BB = Math.round(Math.random() * 239 + 16);
    return RR.toString(16) + '' + GG.toString(16) + '' + BB.toString(16);
}


// Make a request for a user with a given ID
axios.get('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&attractionId=1&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV')
    .then(function (response) {
        // handle success
        //infoTest = response.data._embedded.events;
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });


function enumeration() {
    return n++;
}


async function addDiv(i) {
    let idN = enumeration();
    //console.log(await infoTest)
    let infTes = await infoTest[idN].name;
    colorDiv2 = colorDiv1;
    colorDiv1 = `#${generatorColor()}`;
    let div = document.createElement('div');
    div.className = "cell";
    div.id = idN;
    div.innerHTML = `<strong>${infTes}</strong>`;
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

