let log = 6;
let okrugl = 1/10**log;


// Долгота -180 до +180
function generateRandomLong() {
    var num = (Math.random() * 180).toFixed(log);
    var posorneg = Math.random();
    num=Math.round(num / okrugl) * okrugl
    num = num.toFixed(log);
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
    var num = (Math.random() * 90).toFixed(log);
    var posorneg = Math.random();
    num=Math.round(num / okrugl) * okrugl
    num = num.toFixed(log);
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
