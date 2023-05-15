let money = 11;
let coins = [5, 7, 1];


function countChange(money, coins) {
    // your implementation here
    let answer = [];
    let interimResponse = []
    rek(money, coins);

    function rek(moneyR, coinsR) {
        //interimResponse.length=0;
        let a = coinsR.filter((one) => one <= moneyR);
        /*        a.sort((c, b) => {
                    return c - b;
                })*/
        for (let key in a) {
            if (moneyR % a[key] === 0) {
                for (let i = 0; i < Math.floor(moneyR / a[key]); i++) {
                    interimResponse.push(a[key]);
                }
                let check = interimResponse.reduce((a, b) => {
                    return a + b
                })
                if (check < money) {
                    interimResponse.push(money - check)
                }

                answer.push([...interimResponse]);
                interimResponse.length = 0;
                //console.log(answer)
                return;
            } else {
                if (a.length == 1) {
                    console.log('length=1')
                    return;
                } else {
                    //console.log('rek' + moneyR % a[key]);

                    for (let i = 0; i < Math.floor(moneyR / a[key]); i++) {
                        interimResponse.push(a[key]);
                    }

/*                    for(let i=1; i<Math.floor(moneyR/a[key])+1;i++){
                        rek(moneyR - a[key]*i, a);
                    }*/
                    rek(moneyR % a[key], a);
                   // rek((moneyR % a[key])+a[key], a);
                }
            }
        }

    }

    return answer;
}

console.log(countChange(money, coins));

