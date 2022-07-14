const promis1 = new Promise(
    (result, reject) => {
        let rand = Math.random();
        setTimeout(() => {
            if (rand < 0.5) {
                result(rand);
            } else {
                reject(rand);
            }
        }, 1000)

    }
);

const promis2 = new Promise(
    (result, reject) => {
        let rand = Math.random();
        setTimeout(() => {
            if (rand < 0.5) {
                result(rand);
            } else {
                reject(rand);
            }
        }, 1000)

    }
);

console.log('Start');
promis1.then(x => {
    console.log('1')
    return x
})
    .then(console.log)
    .catch(console.log);

promis2.then(x => console.log(x))
    .catch(console.log);



console.log('Finish')