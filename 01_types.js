async function f() {
    let a = 4;
    console.log('a1='+a)

   a = setTimeout(()=>{
        a = 20;
        console.log('a2='+a)
        return a
    },1000)
    console.log('a3='+a)
    return a;
}


f().then((r) => console.log('a4='+r));