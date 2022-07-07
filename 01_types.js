const promi = new Promise ((resolve, reject)=> {
        let rand = Math.random();
        if (rand < 0.5) {
            resolve('Ok');

        } else {
            reject('Err')
        }
    }
 );

promi.then(x => console.log(x))
    .catch(x=> console.log(x))
