let func = function (resolve, reect) {
    console.log(typeof reect)
    setTimeout(function () {
        let isError = false;

        if (!!isError) {
            resolve([1, 2, 3, 4, 5]);   // данные промиса

        } else {
            reect('error in promise'); // ваш текст ошибки
        }
    }, 500);
}


let promise = new Promise(func);

console.log(typeof promise.then)

promise.then(result => console.log(result),
    error => console.log(error)
);