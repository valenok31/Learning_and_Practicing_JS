const prom1 = new Promise((resolve, reject) => {
    let random = Math.random()
    setTimeout(() => {
        if (random < 0.6) {
            resolve(random)
        } else {
            reject('Error')
        }
    }, 2000)
})

const prom2 = new Promise(
    (resolve, reject) => {
        resolve('Ok');
        reject('False')
    }
)

const prom3 = new Promise(
    (resolve, reject) => {
        resolve('Ok');
        reject('False')
    }
)

prom1.then(
    (x) => console.log(x)
)
    .catch(
        (x) => console.log(Error)
    )
    .finally(
        () => console.log('End')
    )

function ret() {
    console.log('Start')
}


new ret;

