let money = 10;
let coins = [7, 8, 3, 4, 5, 6, 1];


function countChange(money, coins) {
    // your implementation here
    let answer = 0;
    rek(money, coins);
    function rek(moneyR, coinsR) {
        let a = coinsR.filter((one) => one <= moneyR);
        a.sort((c, b) => {
            return c - b;
        })
        for (let key in a) {
            if (moneyR % a[key] === 0) {
                console.log('stop!')
            } else {
                if(a.length==1){
                    console.log('length=1')
                    return;
                }else{
                    console.log('rek' + moneyR % a[key]);
                    rek(moneyR % a[key], a)
                }
            }
        }

        return ;
    }

}

countChange(money, coins);

