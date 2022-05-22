let obj = {
    a: 34,
    b: 'fds',
    c: {aa: 33, bb: 543, cc: {aaa: 'fsdsdf', bbb: 'dsffsdf'}}
}

let obj3 = {...obj};

let json = JSON.stringify(obj)
let obj2 = JSON.parse(json);


console.log(obj3 === obj)