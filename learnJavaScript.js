function Employee (name, position, yearHired, funcNew){
    this.name = name
    this.position = position
    this.yearHired = yearHired
    this.funcNew = funcNew
    return;
}

const funcNew = function (){
    return 5
}

const emp = new Employee('Marko Polo', 'Software Development', 2017, funcNew())

console.table(emp)
console.log(emp)