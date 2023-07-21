let animal = {
    eats: true
};
let rabbit = {
    jumps: true,
    __proto__:animal
};

let cat = Object.create(animal)

// теперь мы можем найти оба свойства в rabbit:
console.log( Object.getPrototypeOf(cat) ); // true (**)
console.log( rabbit.jumps ); // true