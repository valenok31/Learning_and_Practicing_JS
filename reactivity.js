// Долгота -180 до +180
function generateRandomLong() {
    var num = (Math.random() * 180).toFixed(3);
    var posorneg = Math.random();
    if (posorneg > 0.5) {
        num = num * -1;
    }
    return Math.round(num / 5) * 5;
}

// Широта -90 до +90
function generateRandomLat() {
    var num = (Math.random() * 90).toFixed(3);
    var posorneg = Math.random();
    if (posorneg > 0.5) {
        num = num * -1;
    }
    return Math.round(num / 5) * 5 ;
}



console.log(generateRandomLat() + " / " + generateRandomLong())
