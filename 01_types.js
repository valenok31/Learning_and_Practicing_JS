const prom = new Promise((resolve, reject) => {
    let rand = Math.random();
    setTimeout(() => {
        if (rand < 0.2) {
            resolve('resolve')
        } else {
            reject('reject');
        }
    }, rand * 1000)
})


prom.then(
    (x) => {
        console.log(x)
        throw new Error ("error!!!")

    }
)
    .catch(
        error=> {
            console.log(error)
        }
    )
    .finally(
    () => {
        console.log('End')
    }
)