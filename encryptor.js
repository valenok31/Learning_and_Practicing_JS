let str = 'this is a secret message';
let crypto = str.split(' ').map(a => parseInt(a, 36)).join(' ');
console.log(crypto)

let deCrypto = crypto.split(' ').map(a => (+a).toString(36)).join(' ');
console.log(deCrypto);