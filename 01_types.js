function first(y) {
    console.log(10);
    y();
}

function second(a, b) {
    console.log(a * b);

}

first(()=>second(2,4));
