function Calculator() {
    this.read = (a, b) => {
        this.a = a;
        this.b = b;
    };
    this.sum = () => this.a + this.b
    this.mul = () => this.a*this.b
};

let calculator = new Calculator();

calculator.read(3,2)
console.log(calculator.sum())


