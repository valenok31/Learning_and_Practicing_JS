let a = {a: 1};
// a ---> Object.prototype ---> null

let b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (унаследовано)

let c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

let d = Object.create(null);
// d ---> null
console.log(a.hasOwnProperty);