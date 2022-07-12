let hello =  async () => { return "Hello" };

hello().then((value) => console.log(value))
hello().then(console.log)

hello().then((x)=>{
    console.log(x)
})