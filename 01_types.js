function slow(x = 0) {
    for (let i = 0; i < 1_000_000_000; i++) {
    }
    return x
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

slow = cachingDecorator(slow);

console.log("Again: " + slow(1)); // возвращаем из кеша
console.log("Again: " + slow(2)); // возвращаем из кеша
console.log("Again: " + slow(1)); // возвращаем из кеша
console.log("Again: " + slow(1)); // возвращаем из кеша
console.log("Again: " + slow(3)); // возвращаем из кеша
console.log("Again: " + slow(2)); // возвращаем из кеша
console.log("Again: " + slow(2)); // возвращаем из кеша
console.log("Again: " + slow(1)); // возвращаем из кеша