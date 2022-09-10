let fieldPlaying = document.getElementById('fieldPlaying');
//let inputClick = document.getElementById('inputClick');
let inputAllData = document.getElementById('inputAllData');
let keyword = document.getElementById('keywordS');
let search = document.getElementById('search');
search.addEventListener('click', searchR);
fieldPlaying.addEventListener('click', flippingPhotos);
window.addEventListener('scroll', selectIdBox);
let colorDiv1 = `#${generatorColor()}`;
let colorDiv2 = `#${generatorColor()}`;
let infoTest;
let offsetS;
let cachingPhotos = {};
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
                        cachingPhotos[`${num.RecAreaID}`] = response.data.RECDATA;
                        console.log(response.data.RECDATA)
                        stopScroll = true;
                        // addDiv(num, response.data.RECDATA);
                        addDiv(num, response.data.RECDATA);
                    }).catch(function (response) {
                    stopScroll = true;
                    // addDiv(num, response.data.RECDATA);
let err = [{URL: "https://f-present.ru/uploads/product/images/62b2eb8f4df91.jpg"}]
                    addDiv(num, err);
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
    div.dataset.title = infTes.RecAreaName;
    div.style.background = `url(${werety[0].URL}) no-repeat center/cover`;
    //div.innerHTML = `<div><strong>${infTes.RecAreaName}</strong></div>`;
    div.innerHTML = `<div><strong>${infTes.RecAreaName}</strong></div><div><strong>1 / ${werety.length}</strong></div>`;
    infTes.Keywords === '' ? div.title = 'none' : div.title = infTes.Keywords;
    div.style.backgroundColor = colorDiv1;
    fieldPlaying.append(div);
}

function flippingPhotos(photoInfo) {
    if (photoInfo.target.className === 'cell') {
        let i = 0;
        let k = 0;
        let photoL = photoInfo.target.id;
        let thisPhoto = photoInfo.target.style.backgroundImage.slice(5, -2);
        for (let nem of cachingPhotos[`${photoL}`]) {
            i++;
            if (thisPhoto === nem.URL) {
                k = i
            }
        }
        console.log(photoInfo.target.dataset.title);
        photoInfo.target.style.background = `url(${cachingPhotos[`${photoL}`][k].URL}) no-repeat center/cover`;
        photoInfo.target.innerHTML = `<div><strong>${photoInfo.target.dataset.title}</strong></div><div><strong>${k + 1} / ${cachingPhotos[photoL].length}</strong></div>`;
    }
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

