const props = new Promise (
    (resolve, reject)=>{
        let random = Math.random();
        setTimeout(()=>{
            if(random<0.5){
                resolve('Ok!')
            }else{
                reject('Error!')
            }
        }, random*3000)

    }
)

props.then((x)=> console.log(x))
.catch((x)=>console.log(x))
.finally(log)