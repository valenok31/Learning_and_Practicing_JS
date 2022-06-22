let func = function(resolve, reject) {
    console.log(typeof reject)
    setTimeout(function() {
        let isError = false;

        if (!isError) {
         resolve([1, 2, 3, 4, 5]);   // данные промиса

        } else {
            reject('error in promise'); // ваш текст ошибки
        }
    }, 500);
}


let promise = new Promise(func);

console.log(typeof promise.then)

promise.then(
    function(result) {
        console.log( result); // выведет результат промиса
    },
    function(error) {
        console.log(error);  // выведет текст ошибки
    }
);