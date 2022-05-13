function Peopel(name = 'Anonim', age = 0) {
    this.name = name;
    this.age = age;
    this.date = () => `${this.name} - ${2022 - this.age}`;
};

nika = new Peopel('Nika', 41);
goga = new Peopel('Goga', 44);
alis = new Peopel('Alisa', 8);
andr = new Peopel('Andron', 38);
an = new Peopel;

console.log(alis.date())

function eroba(){
    let a = 4;
     this.b = ()=> a;
    return a
}

let r = new eroba();

console.log(r.b())
