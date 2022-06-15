let obj = {
    get propName() {
        console.log(5)
        // геттер, срабатывает при чтении obj.propName
    },

    set propName(value) {
        console.log(value)
        // сеттер, срабатывает при записи obj.propName = value
    }
};

obj.propName = 8;
obj.propName;