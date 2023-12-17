let okrugl = 1;
// Долгота -180 до +180
function generateRandomLong() {
    var num = (Math.random() * 180).toFixed(3);
    var posorneg = Math.random();
    num=Math.round(num / okrugl) * okrugl
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
    var num = (Math.random() * 90).toFixed(3);
    var posorneg = Math.random();
    num=Math.round(num / okrugl) * okrugl
    if (posorneg > 0.5) {
        //num = num * -1;
        num = num + '°S'
    }else{
        num = num + '°N'
    }
    return num ;
}



console.log(generateRandomLat() + " " + generateRandomLong())
