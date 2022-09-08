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
let offsetS;
let n = 0;
let stopScroll = true;
let queryTag = '';
const instance = axios.create({
    baseURL: 'https://ridb.recreation.gov/api/v1/',
});

werwer(queryTag, offsetS);

function werwer(queryTag1, offset = 0) {
    instance.get(`recareas?query=${queryTag1}&limit=20&offset=${offset}&apikey=53351234-6c6c-4392-a4b8-d38d53df1462`)
        .then(function (response) {
            inputAllData.innerHTML = response.data.METADATA.RESULTS.TOTAL_COUNT
            infoTest = response.data.RECDATA;
            for (let num of infoTest) {
                instance.get(`/recareas/${num.RecAreaID}/media?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`)
                    .then(function (response) {
                        stopScroll = true;
                        addDiv(num, response.data.RECDATA[0].URL)
                    });
            }
        });
}

function addDiv(infTes, werety) {
    colorDiv2 = colorDiv1;
    colorDiv1 = `#${generatorColor()}`;
    let div = document.createElement('div');
    div.className = "cell";
    div.id = infTes.RecAreaID;
    div.style.background = `url(${werety}) no-repeat center/cover`;
    div.innerHTML = `<p><strong>${infTes.RecAreaName}</strong></p>`;
    infTes.Keywords === '' ? div.title = 'none' : div.title = infTes.Keywords;
    div.style.backgroundColor = colorDiv1;
    fieldPlaying.append(div);
}

function photoSearch(photoInfo) {
    instance.get(`/recareas/${photoInfo}/media?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`)
        .then(function (response) {
            let infoTest2 = response.data.RECDATA;
            return `${infoTest2[0].URL}`;
        });
}


function searchR() {
    queryTag = keyword.value;
    fieldPlaying.innerHTML = '';
    n = 0;
    werwer(queryTag);
}


function generatorColor() {
    let RR = Math.round(Math.random() * 239 + 16);
    let GG = Math.round(Math.random() * 39 + 216);
    let BB = Math.round(Math.random() * 39 + 216);
    return RR.toString(16) + '' + GG.toString(16) + '' + BB.toString(16);
}


function selectIdBox() {
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    let clientHeightDDE = document.documentElement.clientHeight;
    let pageYOffset = window.pageYOffset;

    if ((pageYOffset + clientHeightDDE) > (scrollHeight - 300) && stopScroll) {
        n = n + 20
        stopScroll = false;
        werwer(queryTag, n);
    }
}

