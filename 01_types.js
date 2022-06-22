let promise = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([1, 2, 3, 4, 5]);
    }, 1000);
});

promise.then(function(result) {
    console.log(result); // выведет массив с результатом
});