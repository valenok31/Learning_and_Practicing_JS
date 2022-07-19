const propsi = new Promise(
    (resolve, reject) => {
        let rand = Math.random();
        setTimeout(() => {
            if(rand<0.5){
                resolve(rand)
            }else{
                reject('Err')
            }

        }, 1000)

    }
)

propsi
    .then(console.log, ()=>console.log('123'))
    .catch((x)=> console.log(x))
    .finally(()=>console.log('456'))