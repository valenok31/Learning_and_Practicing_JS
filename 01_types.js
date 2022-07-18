async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("готово!"), 1000)
    });
    console.log('start')
    let result = await promise; // будет ждать, пока промис не выполнится (*)
    console.log(result); // "готово!"

}

console.log('final')
f();

console.log('End')