'use strict'

let a = 222;
let b=8;
let c = {
    b:333,
    foo(b){
       return b;
    }
}

a=c.foo;
console.log(a(8))