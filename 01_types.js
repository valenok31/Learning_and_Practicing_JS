let ret=function (){
    console.log('proto')
}
let obj={ret};

let obj2 = Object.create(obj)

console.log(obj2)