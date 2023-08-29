let prom = new Promise((resolve, reject) => {
    resolve('ok');
    reject('false')
});


//prom.then(console.log)
  //  .catch(console.log)

async function fun1(){
    console.log(true);
let fun2 =  function () {
    return 5;
    }

    await fun2();
    return 4;
}


fun1().then(console.log)