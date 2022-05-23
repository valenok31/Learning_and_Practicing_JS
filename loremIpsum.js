let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aperiam assumenda culpa Dolorem error, explicabo incidunt itaque molestias mollitia nobis nulla obcaecati, porro quas ratione recusandae sint, sit ut?'

const loremIpsum = function (numberOfWords) {
    let arrText = text.split(' ');
    let arrStartingPosition = arrText.filter((r, n) => {
        if (r[0].toUpperCase() === r[0] || n === 0) return r;
    })
    let startLoremIpsum = Math.round(Math.random() * (arrText.length - numberOfWords));
    console.log(arrStartingPosition);
    let loremIpsumText = arrText.splice(startLoremIpsum, numberOfWords)

    return loremIpsumText.join(' ');
}

console.log(loremIpsum(6));
