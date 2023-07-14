const promis = new Promise (
    (a,b)=>{
        throw  a('Ok')
        b('Error')
    }
)

promis.then(console.log)
.catch(console.log)