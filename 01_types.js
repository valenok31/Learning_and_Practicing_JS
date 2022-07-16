async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("готово!"), 1000)
    });

    let result = await promise; // будет ждать, пока промис не выполнится (*)

    console.log(result); // "готово!"
}

f();

let a = {name: 'Veronika'}

let b = a;

a.name = 'Griga'
a = {name: 'Alisa'}

console.log(b.name)
console.log(a)