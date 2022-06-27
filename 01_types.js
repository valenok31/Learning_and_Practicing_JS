const promise = new Promise((resolve, reject) => {

    const randomNumber = Math.random();
    setTimeout(() => {
        if(randomNumber < .5) {
            resolve(`Все прошло отлично! = ${randomNumber}`);
        } else {
            reject(new Error(`Что-то пошло не так = ${randomNumber}`));
        }
    }, randomNumber*5000);
});

promise.then(
    (x)=> console.log(x)
)
.catch(
    (x)=> console.log(x)
)