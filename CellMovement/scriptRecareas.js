let fieldPlaying = document.getElementById('fieldPlaying');
//let inputClick = document.getElementById('inputClick');
let inputAllData = document.getElementById('inputAllData');
let keyword = document.getElementById('keywordS');
let search = document.getElementById('search');
search.addEventListener('click', searchR);
window.addEventListener('scroll', selectIdBox);
let colorDiv1 = `#${generatorColor()}`;
let colorDiv2 = `#${generatorColor()}`;
let infoTest;
let infoTest2;
let n = 0;
let queryTag = '';

function searchR() {
    queryTag = keyword.value;
    fieldPlaying.innerHTML = '';
    n = 0;
    werwer(queryTag);
}


function generatorColor() {
    let RR = Math.round(Math.random() * 239 + 16);
    //RR = 250
    let GG = Math.round(Math.random() * 39 + 216);
    let BB = Math.round(Math.random() * 39 + 216);
    return RR.toString(16) + '' + GG.toString(16) + '' + BB.toString(16);
}

werwer(queryTag);


function werwer(queryTag) {// Make a request for a user with a given ID
    const instance = axios.create({
        baseURL: 'https://ridb.recreation.gov/api/v1/',
    });
    instance.get(`recareas?query=${queryTag}&limit=50&offset=0&apikey=53351234-6c6c-4392-a4b8-d38d53df1462`)
        .then(function (response) {
            inputAllData.innerHTML = response.data.METADATA.RESULTS.TOTAL_COUNT
            infoTest = response.data.RECDATA;
            addDiv();
        });


    console.log(infoTest)
/*    let iMin = Math.min(infoTest.length, 10);
    for (let i = 0; i < iMin; i++) {
        addDiv()
    }*/

}

function photoSearch(photoInfo) {
    const instance2 = axios.create({
        baseURL: 'https://ridb.recreation.gov/api/v1/',
    });
    instance2.get(`/recareas/${photoInfo}/media?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`)
        .then(function (response) {
            infoTest2 = response.data.RECDATA;

            // return `${infoTest2[0].URL}`;

        });
    //return `https://cdn.recreation.gov/public/images/68615.jpg`;
    return `${infoTest2[0].URL}`;
    console.log(infoTest2[0].URL)
    //return `123456`;
}


function enumeration() {
    return n++;
}


async function addDiv() {
    let idN = enumeration();
    let infTes = await infoTest[idN];
    colorDiv2 = colorDiv1;
    colorDiv1 = `#${generatorColor()}`;
    let div = document.createElement('div');
    div.className = "cell";
    div.id = idN;
   let werety = photoSearch(infTes.RecAreaID);

    console.log(infTes)
    div.style.background = `url(${werety}) no-repeat center/cover`;
    div.innerHTML = `<p><strong>${infTes.RecAreaName}</strong></p>`;
    infTes.Keywords === '' ? div.title = 'none' : div.title = infTes.Keywords
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

    if ((pageYOffset + clientHeightDDE) > (scrollHeight - 300)) {
        addDiv();
    }
}

