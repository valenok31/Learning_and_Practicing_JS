class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }

}

// Использование:
let user = new User("Иван");
user.sayHi();