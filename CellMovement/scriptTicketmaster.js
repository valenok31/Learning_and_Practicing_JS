let fieldPlaying = document.getElementById('fieldPlaying');
let detailedDescription = document.getElementById('detailedDescription');
window.addEventListener('scroll', selectIdBox);
let keyword = document.getElementById('keywordS');
let age = document.getElementById('age');
let search = document.getElementById('search');
search.addEventListener('click', searchR);
fieldPlaying.addEventListener('click', openDetails);
//noneDiv.addEventListener('click', openDetails);
let queryTag = '';
let dateTime = `2022-09-20`;
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


werwer(queryTag, dateTime);

function werwer(queryTag1, dateTime = '2022-09-13') {
// Make a request for a user with a given ID
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=&classificationName=${queryTag1}&size=102&
    startDateTime=${dateTime}T00:00:00Z&endDateTime=${dateTime}T23:59:59Z
    &countryCode=US&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
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
    fieldPlaying.innerHTML = '';
    n = 0;
    queryTag = keyword.value;
    dateTime = age.value;

    if (!dateTime) {
        dateTime = '2022-09-20'
    }
    //console.log(dateTime);
    werwer(queryTag, dateTime);
}


function addDiv() {
    let idN = enumeration();
    let infTes = infoTest[idN];
    let infTesW = infTes._embedded.venues[0];
    colorDiv2 = colorDiv1;
    colorDiv1 = `#${generatorColor()}`;
    let div = document.createElement('div');
    div.className = "cell";
    div.id = idN;
    let werety;
    let weretyH;
    for (let heig of infTes.images) {
        if (heig.height < 200 || heig.height > 600) {
            continue
        }
        werety = heig.url;
        weretyH = heig.height;
    }
    div.style.background = `url(${werety}) no-repeat center/cover`;
    div.innerHTML = `<div id='${infTes.id}' data-about='ok'>${infTes.name} - ${infTesW.city.name}</div>`;

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

    if ((pageYOffset + clientHeightDDE) > (scrollHeight - 500)) {
        addDiv();
    }
}


function openDetails(event) {
    if (event.target.dataset.about === 'ok') {
        //console.log(event.target.dataset.about);
        fieldPlaying.classList.toggle("noneElem")
        detailedDescription.classList.toggle("noneElem");
        if (detailedDescription.classList.contains("noneElem")) {
            detailedDescription.firstChild.remove();
        }
        if (!detailedDescription.classList.contains("noneElem")) {
            addDescription(event);
        }
    }
}

function addDescription(event) {
    let descriptionText;
    let div = document.createElement('div');
    div.className = "cell";
    axios.get(`https://app.ticketmaster.com/discovery/v2/events/${event.target.id}.json?apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
        .then(function (response) {
            descriptionText = response.data;
            console.log(response.data);


            div.innerHTML = `<div>${event.target.innerHTML}</div><div>${descriptionText.pleaseNote}</div><div id='noneDiv' data-about='ok'>X</div>`;
            console.log(event.target.id)
            div.style.backgroundColor = `red`;
            detailedDescription.append(div);
            noneDiv.addEventListener('click', openDetails);
        })
        .catch(function (error) {
            console.log(error);
        })

}

