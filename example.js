let money = 11;
let coins = [5, 7, 1];


function countChange(money, coins) {
    // your implementation here
    let answer = [];
    let iX=0
    let interimResponse = []
    rek(money, coins, iX);

    function rek(moneyR, coinsR, iX) {
        console.log(iX)
        if (moneyR<= coinsR[iX]) {
            if(coinsR.includes(moneyR)){
                interimResponse.push(moneyR)
                answer.push([...interimResponse]);
                interimResponse.length=0;
                iX=iX+1
                if(iX>=coins.length){return}
                rek(money, coins, iX);
            }else{
                //iX=iX+1
                if(iX>=coins.length){return}
                //interimResponse.length=0;
return
                rek(moneyR, coinsR, 0);
            }
        }
        else{
            moneyR = moneyR - coinsR[iX];
            interimResponse.push(coinsR[iX])
            rek(moneyR, coinsR, iX);
        }
    }

    return answer;
}

console.log(countChange(money, coins));

