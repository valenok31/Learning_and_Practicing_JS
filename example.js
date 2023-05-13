let money = 10;
let coins = [7, 8, 3, 4, 5, 6, 1];


function countChange(money, coins) {
    // your implementation here
    let answer = 0;
    let a = coins.filter((one) => one <= money);

    a.sort((c, b) => {
        return c - b;
    })
    for (let key in a) {
        if (money % a[key] === 0) {
            console.log(a[key])
            answer = answer + 1;
        }else{
            money % a[key]
        }

    }

    function rek(money, one) {
        if (money % one === 0) {
            answer = answer + 1;
            return;
        }
        one = money % one;

        rek(money, one);
    }


    //return answer;
    return {a, answer};
}


console.log(countChange(money, coins))

