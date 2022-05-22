let str = 'cba ba a';
let crypto = str.split(' ').map(a => parseInt(a, 36)).join(' ');
console.log(crypto)

let deCrypto = crypto.split(' ').map(a => (+a).toString(36)).join(' ');
console.log(deCrypto);