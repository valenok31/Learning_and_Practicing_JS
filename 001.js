function luhn(numberCard) {
    if (Array.from(String(numberCard))[0] == 5) {
        console.log('mir')
    }
    switch (Array.from(String(numberCard))[0]) {
        case '5':
            console.log('mir')
            break;
        case '4':
            console.log('visa')
            break;
        case '3':
            console.log('master card')
            break;
        default:
            console.log('null')
    }

    let x2 = (n, x) => {
        if (!!(x % 2)) return n
        if (n * 2 < 10) return n * 2
        return (n * 2 - 10) + 1
    }
    return !(Array
        .from(String(numberCard), Number)
        .map((n, x) => x2(n, x))
        .reduce((a, b) => a + b) % 10)
}

console.log(luhn(5536_9140_6279_9220))

