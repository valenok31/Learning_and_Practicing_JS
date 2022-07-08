const prom = new Promise((resolve, reject) => {
    let rand = Math.trunc(Math.random() * 10) / 10;
    setTimeout(
        () => {
            if (rand < 0.51) {
                resolve([`Ok, rand = ${rand}`, rand]);

            } else {
                reject(`Err, rand = ${rand}`)
            }
        }, rand * 1000)
});

prom.then(x => {
    console.log(x[0])
    return x[1]*2;
})
    .then(x => console.log(x))
    .catch(x => console.log(x))
