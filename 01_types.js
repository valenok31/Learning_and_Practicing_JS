let worker = {
    someMethod() {
        return 1;
    },
    slow(x = 0) {
        for (let i = 0; i < 1_000_000_000; i++) {
        }
        return x*this.someMethod();
    }
}


function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {    // если кеш содержит такой x,
            return cache.get(x); // читаем из него результат
        }

        let result = func(x); // иначе, вызываем функцию

        cache.set(x, result); // и кешируем (запоминаем) результат
        return result;
    };
}

console.log("Again: " + worker.slow(1)); // возвращаем из кеша

worker.slow = cachingDecorator(worker.slow);
console.log("Again: " + worker.slow(1)); // возвращаем из кеша
