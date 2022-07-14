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


promis2.then(console.log)
    .catch(console.log);


console.log('Finish')