let name = "Васясява";
function sayHi() {
    let ret =name.match(/Ва/ig)
    console.log(ret);
}

setTimeout(function() {

    sayHi();
    name = "Петя"
}, 1000);
