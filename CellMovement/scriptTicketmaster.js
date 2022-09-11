let fieldPlaying = document.getElementById('fieldPlaying');
window.addEventListener('scroll', selectIdBox);
let keyword = document.getElementById('keywordS');
let search = document.getElementById('search');
search.addEventListener('click', searchR);
noneDiv.addEventListener('click', () => {
    fieldPlaying.classList.toggle("noneElem")
});
let queryTag = '';
let offsetS;
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


werwer(queryTag, offsetS);

function werwer(queryTag1, offset = 0) {
// Make a request for a user with a given ID
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${queryTag1}&classificationName=-sports&size=100&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
        .then(function (response) {
            // handle success
            //infoTest = response.data._embedded.events;
            inputAllData.innerHTML = response.data.page.totalElements;
            infoTest = response.data._embedded.events;
            let iMin = Math.min(infoTest.length, 10);
            for (let i = 0; i < iMin; i++) {
                addDiv()
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

function enumeration() {
    return n++;
}

function searchR() {
    queryTag = keyword.value;
    fieldPlaying.innerHTML = '';
    n = 0;
    werwer(queryTag);
}


function addDiv() {
    let idN = enumeration();
    let infTes = infoTest[idN];
    let infTesW =infTes._embedded.venues[0];
    //let infTesA =infTes._embedded.attractions[0];
        //let infTesW = await infoTest[idN]._embedded.venues[0];
    console.log(infTesW.city.name)
    //let infTesA = await infoTest[idN]._embedded.attractions[0];

    colorDiv2 = colorDiv1;
    colorDiv1 = `#${generatorColor()}`;
    let div = document.createElement('div');
    div.className = "cell";
    //div.id = idN;
    let werety;
    let weretyH;

    for (let heig of infTes.images) {
        if (heig.height < 400 || heig.height > 1000) {
            continue
        }
        werety = heig.url;
        weretyH = heig.height;

    }

    //let werety = infTes.images[2].url;
    div.style.background = `url(${werety}) no-repeat center/cover`;
    div.innerHTML = `<div><strong>${infTes.name} - ${infTesW.city.name}</strong></div>`;
    //div.style.background = "linear-gradient(to top, " + colorDiv1 + ", " + colorDiv2 + ")";
    div.style.backgroundColor = colorDiv1;
    fieldPlaying.append(div);
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

