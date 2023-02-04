let arr = [7, 8, 3, 4, 5, 6, 1, 2];
let chislo = 4;


arr = arr.sort((a, b) => {
    return b - a
})


let results1 = [];
let results2 = [];

function sumHalfResult(arrSum) {
    return arrSum.reduce((a, b) => {
        return a + b;
    }, 0)
}

if (arr.reduce((a, b) => {
    return a + b;
}, 0) < chislo) {
    console.log('end')
}

arr = arr.filter((x) => {
    return x <= chislo
})
//rekursia(arr, chislo,0)
console.log(rekursia(arr, chislo))


function rekursia(rarr, seed) {
    rarr = [...rarr]
    rarr = rarr.filter((x) => {
        return x <= seed
    })
    if (rarr.length === 0) {
        return []
    }

    for (let i = 0; i < rarr.length; i++) {
        if (rarr[i] === seed) {
            results2.push(rarr[i]);
            results1.push([...results2]);

            results2.length = 0;
            //return results1
            continue;
        }
        if (rarr[i] < seed) {
            let seedarra = seed - rarr[i];
            results2.push(rarr[i]);
            rekursia([...rarr], seedarra);
            //results2.push(ert);
            continue;
        }
        if (rarr[i] > seed) {
            break;
        }
    }
    //results1.push(results2)
    return results1
}

