const prom = new Promise(
    (resolve, reject) => {
        let rand = Math.random();
        setTimeout(
            () => {
                if (rand < 0.2) {
                    resolve(['resolve', rand])
                } else {
                    reject('reject');
                }
            }, rand*1000)
    })


prom.then(
    (x) => {
        console.log(x[1])
        return x;
    }
)
    .then(
        (x) => {
            console.log(x[0] + ' 2 then')
        }
    ).catch(
    (x)=>{
        console.log(x)
    }
)
.finally(
    ()=> {
        console.log('End')
    }
)