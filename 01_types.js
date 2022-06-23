let text = {
    a: 34,
    b: 45,
    c: function r() {
        return this.a;
    }
}


let func = function (resolve, reject) {
    setTimeout(function () {
        let isError = false;

        if (!isError) {
            text.c=text.c.bind(text);
            resolve(text.c);   // данные промиса

        } else {
            reject('error in promise'); // ваш текст ошибки
        }
    }, 500);
}


let promise = new Promise(func);


promise.then((r) => console.log(r()),
    error => console.log(error)
);