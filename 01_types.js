let prom = new Promise((resolve, reject) => {
    resolve('ok');
    reject('false')
});


prom.then(console.log)
    .catch(console.log)
