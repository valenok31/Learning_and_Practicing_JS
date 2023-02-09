let massivChisel = [7, 8, 3, 4, 5, 6];
let chislo = 15;


function sostavChisla(massivChisel, chislo) {


    let arr = massivChisel.filter((a) => {
        return a <= chislo
    })

    if (arr.reduce((a, b) => {
        return a + b
    }) < chislo) {
        return []
    }



    let result = [];
    let koefi = 2;

    for (let i=koefi; i<8; i++){

        let cxrjk2 = []
        forArr(cxrjk2, -1, i);

    }



    function forArr(cxrjk2, gg, koef) {
        gg = gg + 1;
        for (cxrjk2[gg] = (gg === 0 ? 0 : cxrjk2[gg - 1] + 1); cxrjk2[gg] < arr.length; cxrjk2[gg]++) {
            if (gg > koef - 2) {
                jadro(cxrjk2, koef)
                continue
            }
            forArr(cxrjk2, gg,koef);
        }
    }




    function jadro(cxrjk2, zz = 50) {
        let erte = [];
        for (let z = 0; z < zz; z++) {
            erte.push(arr[cxrjk2[z]])
        }
        result.push(erte)
    }

    //console.log(result)
    return result.filter((x) => {
        return x.reduce((a, b) => {
            return a + b
        }) === chislo
    })
}


console.log(sostavChisla(massivChisel, chislo))

