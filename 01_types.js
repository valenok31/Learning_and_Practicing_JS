let a= 10;

let b = new Promise ((resolve, reject)=>{

    setTimeout(()=> {resolve(a=50)},1000)

})

b.then(()=>{
    console.log(a)
});

console.log(a)