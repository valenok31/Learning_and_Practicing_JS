let massivChisel = [7, 8, 3, 4, 5, 6, 1, 2, 9, 10, 11, 12, 13];
let chislo = 8;


function sostavChisla(massivChisel, chislo) {
    let result = [];
    // let arr = [...massivChisel];

    let arr = massivChisel.filter((a) => {
        return a <= chislo
    })


    if (arr.reduce((a, b) => {
        return a + b
    }) < chislo) {
        return []
    }

    console.log(arr)

    for (let k = 0; k < arr.length; k++) {
        vhod([arr[k]])
    }

    for (let j = 0; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            vhod([arr[j], arr[k]])
        }
    }

    for (let r = 0; r < arr.length; r++) {
        for (let j = r + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                vhod([arr[r], arr[j], arr[k]])
            }
        }
    }

    for (let x = 0; x < arr.length; x++) {
        for (let r = x + 1; r < arr.length; r++) {
            for (let j = r + 1; j < arr.length; j++) {
                for (let k = j + 1; k < arr.length; k++) {
                    vhod([arr[x], arr[r], arr[j], arr[k]])
                }
            }
        }
    }
    for (let c = 0; c < arr.length; c++) {
        for (let x = c + 1; x < arr.length; x++) {
            for (let r = x + 1; r < arr.length; r++) {
                for (let j = r + 1; j < arr.length; j++) {
                    for (let k = j + 1; k < arr.length; k++) {
                        vhod([arr[c], arr[x], arr[r], arr[j], arr[k]])
                    }
                }
            }
        }
    }


    function vhod(sum) {
        result.push(sum)
    }

    console.log(result.length)
    return result.filter((x) => {
        return x.reduce((a, b) => {
            return a + b
        }) === chislo
    })
}


console.log(sostavChisla(massivChisel, chislo))


let result1 = [];
let result2 = [];

function perebor(arr, zveno) {
    if (zveno <= 0) {
        return
    }

    result2.length = 0;
    for (let k = 0; k < arr.length; k++) {
        perebor(arr, zveno - 1)
        result2.push(arr[k], arr[k], arr[k], arr[k], arr[k])
    }
    result1.push(result2)
    return result1
}

//console.log(perebor([1, 2, 3, 4], 1))
