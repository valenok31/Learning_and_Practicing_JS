async function f() {
    let a = await 4;
    console.log(a)
    return a;
}


f().then((r)=>console.log(r));