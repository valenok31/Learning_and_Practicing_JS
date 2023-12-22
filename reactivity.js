let log = 0.01;


let funcOkrugl = function (num, log) {
    let okrugl = 1/10**log;
    num=Math.round(num / okrugl) * okrugl
    num = num.toFixed(log);
    return num;
}


// Долгота -180 до +180
function generateRandomLong() {
    let num = (Math.random() * 180).toFixed(log);
    let posorneg = Math.random();
    funcOkrugl(num, log);
    if (posorneg > 0.5) {
        //num = num * -1;
        num = num + '°W'
    }else{
        num = num + '°E'
    }
    return num;
}

// Широта -90 до +90
function generateRandomLat() {
    let num = (Math.random() * 90).toFixed(log);
    let posorneg = Math.random();
    funcOkrugl(num, log);
    if (posorneg > 0.5) {
        //num = num * -1;
        num = num + '°S'
    }else{
        num = num + '°N'
    }

    return num ;
}
let returnes = generateRandomLat() + " " + generateRandomLong();
// Copy
console.log(returnes)
