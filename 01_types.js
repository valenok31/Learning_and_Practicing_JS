const promis = new Promise (
    (a,b)=>{
        a('Ok')
        b('Error')
    }
)

promis.then(console.log)
.catch(console.log)