// Функция задержки
// с возвращением случайного числа
const delayAndGetRandom = (ms) => {
    return new Promise(resolve => setTimeout(
        () => {
            const val = Math.trunc(Math.random() * 100);
            resolve(val);
        }, ms
    ));
};

async function fn() {
    const a = await 9;
    const b = await delayAndGetRandom(1000);
    const c = await 5;
    await delayAndGetRandom(1000);

    return a + b * c;
}

// Вызов fn
fn().then(console.log);