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