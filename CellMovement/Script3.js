let fieldPlaying = document.getElementById('fieldPlaying');
let inputClick = document.getElementById('inputClick');
inputClick.addEventListener('click',inputClickFunc);
window.addEventListener('scroll', selectIdBox);
let colorDiv1 = `#${generatorColor()}`;
let colorDiv2 = `#${generatorColor()}`;
let infoTest;
let n = 0;
let queryTag = '';


function inputClickFunc(event){
    console.log(event.target.innerHTML)
    if(event.target.innerHTML==='all'){queryTag = ''}
    if(event.target.innerHTML==='summ'){queryTag = event.target.innerHTML}
    if(event.target.innerHTML==='Forest'){queryTag = event.target.innerHTML}
    if(event.target.innerHTML==='Toronto'){queryTag = event.target.innerHTML}
    if(event.target.innerHTML==='New'){queryTag = event.target.innerHTML}
    fieldPlaying.innerHTML = '';
    n = 0;
    werwer(queryTag);
}


function generatorColor() {
    let RR = Math.round(Math.random() * 239 + 16);
    //RR = 250
    let GG = Math.round(Math.random() * 239 + 16);
    let BB = Math.round(Math.random() * 239 + 16);
    return RR.toString(16) + '' + GG.toString(16) + '' + BB.toString(16);
}
werwer(queryTag)
function werwer(queryTag) {// Make a request for a user with a given ID
    const instance = axios.create({
        baseURL: 'https://ridb.recreation.gov/api/v1/tours?',
    });
    let axiosE = instance.get(`w=0&query=${queryTag}&limit=50&offset=0&apikey=53351234-6c6c-4392-a4b8-d38d53df1462`);
    axiosE.then(function (response) {
        // handle success
        infoTest = response.data.RECDATA;
        //infoTest = response.data._embedded.events;
        console.log(response.data.RECDATA);
        let iMin = Math.min(infoTest.length, 10);
        for (let i = 0; i < 10; i++) {
            addDiv()
        }
    });
}


function enumeration() {
    return n++;
}


async function addDiv() {
    let idN = enumeration();
    //console.log(await infoTest)
    let infTes = await infoTest[idN];
    //let infTesW = await infoTest[idN]._embedded.venues[0];
    colorDiv2 = colorDiv1;
    colorDiv1 = `#${generatorColor()}`;
    let div = document.createElement('div');
    div.className = "cell";
    div.id = idN;
    div.innerHTML = `<strong>${infTes.TourName}</strong>`;
    infTes.TourDescription==='' ?  div.title = 'none' :  div.title = infTes.TourDescription
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

