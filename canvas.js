let p = new Promise((resolve, reject) => {
    resolve(34);
    reject(new Error('error'));
});

let res = e => console.log(e);
let rej = d => console.log(d);
// resolve запустит первую функцию, переданную в .then
p.then(res, rej);

