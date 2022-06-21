function f1() {
    setTimeout(()=>console.log(1), 1000)
}

function f2() {
    setTimeout(()=>console.log(2), 2000)
}

function f3() {
    setTimeout(()=>console.log(3), 3000)
}

f1();
f2();
f3();