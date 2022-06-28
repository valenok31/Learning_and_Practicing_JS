const promise1 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
        if (randomNumber < .8) {
            resolve(`promise1 = ${randomNumber}`);
        } else {
            reject(new Error(`1 Что-то пошло не так = ${randomNumber}`));
        }
    }, randomNumber * 5000);
});
const promise2 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
        if (randomNumber < .8) {
            resolve(`promise2 = ${randomNumber}`);
        } else {
            reject(new Error(`2 Что-то пошло не так = ${randomNumber}`));
        }
    }, randomNumber * 5000);
});
const promise3 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
        if (randomNumber < .8) {
            resolve(`promise3 = ${randomNumber}`);
        } else {
            reject(new Error(`3 Что-то пошло не так = ${randomNumber}`));
        }
    }, randomNumber * 5000);
});
let a = 1;
let plus = (x) => {
    console.log(x);
    return a++
}
let minus = (x) => console.log(x);
let end = () => console.log('End');


Promise.race([promise1, promise2, promise3])
    .then(plus)
    .then(plus)
    .then(plus)
    .then(plus)
    .then(plus)
    .then(plus)
    .then(plus)
    .then(plus)
    .then(plus)
    .then(plus)
    .then(() => console.log('2'))
    .then(() => console.log('3'))
    .then(() => console.log('4'))
    .then(() => console.log('5'))
    .then(() => console.log('6'))
    .catch(minus)
    .finally(end)