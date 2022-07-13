async function foo1() {
    return await 'ok'
}


function foo2() {
    return Promise.resolve(1).then((x) => x)
}

foo3().then(console.log)
foo1().then(console.log)
foo2().then(console.log)

function foo3() {
    return Promise.resolve(2).then((t) => t);
}



