let massivChisel = [0, 1, 2, 3, 0];
let chislo = 5;


function sostavChisla(massivChisel, chislo) {
    let result = [];
    let arr = [...massivChisel];


    for (let k = 1; k < arr.length; k++) {
            vhod(arr[0], arr, k)
    }


    function vhod(sum, arr, k) {
            result.push([sum, arr[k]])
    }

    return result;
}

console.log(sostavChisla(massivChisel, chislo));

