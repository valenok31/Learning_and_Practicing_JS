const promise1 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
        if(randomNumber < .8) {
            resolve(`promise1 = ${randomNumber}`);
        } else {
            reject(new Error(`1 Что-то пошло не так = ${randomNumber}`));
        }
    }, randomNumber*5000);
});
const promise2 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
        if(randomNumber < .8) {
            resolve(`promise2 = ${randomNumber}`);
        } else {
            reject(new Error(`2 Что-то пошло не так = ${randomNumber}`));
        }
    }, randomNumber*5000);
});
const promise3 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
        if(randomNumber < .8) {
            resolve(`promise3 = ${randomNumber}`);
        } else {
            reject(new Error(`3 Что-то пошло не так = ${randomNumber}`));
        }
    }, randomNumber*5000);
});

Promise.all([promise1,promise2,promise3])
.then(
    (x)=> console.log(x)
)
.catch(
    (x)=> console.log(x)
)
.finally(
    ()=> console.log('End')
)