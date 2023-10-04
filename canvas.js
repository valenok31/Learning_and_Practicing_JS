console.log(1)

let ret = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve('Промис выполнился!');
        }, 2000
    );
})

async function func1() {
    let result = await ret;
    console.log(result)
}

console.log(2)
console.log(func1());
console.log(3)