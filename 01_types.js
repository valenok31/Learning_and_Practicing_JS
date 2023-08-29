let prom = new Promise((resolve, reject) => {
    resolve('ok');
    reject('false')
});


//prom.then(console.log)
  //  .catch(console.log)

async function fun1(){
    console.log(true);

    return 4;
}


fun1().then(console.log)