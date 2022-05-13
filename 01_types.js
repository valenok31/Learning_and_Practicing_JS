let calculator = {
    read(a=1, b=1) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());