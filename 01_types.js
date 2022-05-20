let map = new Map();
let fun = (a)=>{
    return a*2
}

map.set(fun(), fun());    // строка в качестве ключа


console.log(map.get(fun(3)))