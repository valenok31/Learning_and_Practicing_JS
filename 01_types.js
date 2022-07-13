let hello =  async () => { return "Hello" };

hello().then((value) => console.log(value))
hello().then(console.log)

hello().then((x)=>{
    console.log(x)
})


const promis1 = new Promise ((resolve, reject)=> {
    if (false){
        resolve('Ok')
    }else{reject ('Error')}
})

promis1.then(console.log)
    .catch(console.log)
