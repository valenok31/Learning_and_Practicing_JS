let massivChisel = [1, 2, 3, 4, 5, 6,7,8,9,10];
let chislo = 40;


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


    let cxrjk = [];

 /*   for (cxrjk[0] = 0; cxrjk[0] < arr.length; cxrjk[0]++) {
        let erte = [];
        erte.push(arr[cxrjk[0]])
        //vhod(erte)
        //vhod([arr[k]])
    }

    for (cxrjk[0] = 0; cxrjk[0] < arr.length; cxrjk[0]++) {
        for (cxrjk[1] = cxrjk[0] + 1; cxrjk[1] < arr.length; cxrjk[1]++) {
            let erte = [];
            erte.push(arr[cxrjk[0]])
            erte.push(arr[cxrjk[1]])
            //vhod(erte)
            //vhod([arr[j], arr[k]])
        }
    }

    for (cxrjk[0] = 0; cxrjk[0] < arr.length; cxrjk[0]++) {
        for (cxrjk[1] = cxrjk[0] + 1; cxrjk[1] < arr.length; cxrjk[1]++) {
            for (cxrjk[2] = cxrjk[1] + 1; cxrjk[2] < arr.length; cxrjk[2]++) {
                let erte = [];
                erte.push(arr[cxrjk[0]])
                erte.push(arr[cxrjk[1]])
                erte.push(arr[cxrjk[2]])
                //vhod(erte)
                //vhod([arr[r], arr[j], arr[k]])
            }
        }
    }

    for (cxrjk[0] = 0; cxrjk[0] < arr.length; cxrjk[0]++) {
        for (cxrjk[1] = cxrjk[0] + 1; cxrjk[1] < arr.length; cxrjk[1]++) {
            for (cxrjk[2] = cxrjk[1] + 1; cxrjk[2] < arr.length; cxrjk[2]++) {
                for (cxrjk[3] = cxrjk[2] + 1; cxrjk[3] < arr.length; cxrjk[3]++) {
                    let erte = [];
                    erte.push(arr[cxrjk[0]])
                    erte.push(arr[cxrjk[1]])
                    erte.push(arr[cxrjk[2]])
                    erte.push(arr[cxrjk[3]])
                    //vhod(erte)
                    //vhod([arr[x], arr[r], arr[j], arr[k]])
                }
            }
        }
    }

    for (cxrjk[0] = 0; cxrjk[0] < arr.length; cxrjk[0]++) {
        for (cxrjk[1] = cxrjk[0] + 1; cxrjk[1] < arr.length; cxrjk[1]++) {
            for (cxrjk[2] = cxrjk[1] + 1; cxrjk[2] < arr.length; cxrjk[2]++) {
                for (cxrjk[3] = cxrjk[2] + 1; cxrjk[3] < arr.length; cxrjk[3]++) {
                    for (cxrjk[4] = cxrjk[3] + 1; cxrjk[4] < arr.length; cxrjk[4]++) {
                        //jadro(cxrjk)
                    }
                }
            }
        }
    }*/

   let cxrjk2=[]
    let koef = 7;
    function forArr(cxrjk2, gg){
        gg=gg+1;
        //console.log(arr.length)
        //for (cxrjk2[gg] = (!!cxrjk2[gg-1]? cxrjk2[gg-1]+1: 1); cxrjk2[gg] < arr.length; cxrjk2[gg]++) {
        for (cxrjk2[gg] = (gg===0? 0: cxrjk2[gg-1]+1); cxrjk2[gg] < arr.length; cxrjk2[gg]++) {

            if(gg>koef-2){
                //console.log(cxrjk2)
                jadro(cxrjk2,koef)
                //return
                continue
            }

            forArr(cxrjk2, gg);

        }

    }

    forArr(cxrjk2,-1);


    function jadro(cxrjk2, zz=50) {
        let erte = [];
        for (let z = 0; z < zz; z++) {
            erte.push(arr[cxrjk2[z]])
        }
        vhod(erte)
    }


    function vhod(sum) {
        result.push(sum)
    }

    console.log(result)
    return result.filter((x) => {
        return x.reduce((a, b) => {
            return a + b
        }) === chislo
    })

    //return result
    //return null
}


console.log(sostavChisla(massivChisel, chislo))

