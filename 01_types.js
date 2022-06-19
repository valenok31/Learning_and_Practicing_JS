function func2() {
    for (let i = 0; i < 1000000000; i++) {
    }
    console.log(5)
}

function func1() {
    console.log(3);
}

func2();
func1()
