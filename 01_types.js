const prom1 = new Promise((resolve, reject) => {
    let rand = Math.random();
    setTimeout(() => {
        if (rand < 0.8) {
            resolve('1 = ' + rand);
        } else {
            reject('Err')
        }
    }, rand * 1000)
})
const prom2 = new Promise((resolve, reject) => {
    let rand = Math.random();
    setTimeout(() => {
        if (rand < 0.8) {
            resolve('2 = ' + rand);
        } else {
            reject('Err')
        }
    }, rand * 1000)
})
const prom3 = new Promise((resolve, reject) => {
    let rand = Math.random();
    setTimeout(() => {
        if (rand < 0.8) {
            resolve('3 = ' + rand);
        } else {
            reject('Err')
        }
    }, rand * 1000)
})


Promise.all([prom3, prom1, prom2]).then(
    x => console.log(x)
)
    .catch(
        x => console.log(x)
    )