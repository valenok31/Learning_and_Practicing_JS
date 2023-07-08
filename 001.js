function lalu(numberCard) {
    let arrNumberCard = Array.from(String(numberCard), Number);
    let checkResult = arrNumberCard.map((n, x) => {
            if (!(x % 2)) {
                if (n * 2 < 10) {
                    return n * 2
                }
                return (n * 2 - 10) + 1
            }
            return n
        }
    )
    return !(checkResult.reduce((a, b) => a + b) % 10)
}

console.log(lalu(4586_6549_4568_4585))