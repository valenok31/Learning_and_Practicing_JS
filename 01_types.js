try{


for(let i = 0; i<10; i++){
    console.log(i)
    if(i===4){
throw 'ошибка выполнения. Начните с 5 шага'
    }
}

}
catch(e) {
    console.log('error ' + e)
}

let ret=34;
let rot='lkjs';
let obj = {ret,rot:null}

console.log(obj.rot)