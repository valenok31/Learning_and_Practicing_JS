function sudoku(puzzle) {
    //return the solved puzzle as a 2d array of 9 x 9
    let pusto = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let spisokPust = [];

    // в пустые ячейки добавляем полные массивы [1, 2, 3, 4, 5, 6, 7, 8, 9]
    puzzle.forEach((rete1, n1) => {
        rete1.forEach((rete2, n2) => {
            if (rete2 == 0) {
                puzzle[n1][n2] = [...pusto];
                spisokPust.push([n1, n2])
            }
        })
    })
    console.log(spisokPust.length);
    obhod();

    function obhod() {
        // из пустых ячеек (с полными массивами) удаляем числа находящиеся в этом ряду
        // Обход идет по строке
        // если после удаления осталось одно число => записываем его в ячейку и рекурсией опять обходим массив
        spisokPust.forEach((ab) => {
            puzzle[ab[0]].forEach((v, n) => {
                if (n != ab[1]) {
                    if (puzzle[ab[0]][ab[1]].indexOf(v) != -1) {
                        puzzle[ab[0]][ab[1]].splice(puzzle[ab[0]][ab[1]].indexOf(v), 1)
                    }
                }
            })

        })

        // из пустых ячеек (с уже прореженными массивами) удаляем числа находящиеся в этой же колонке
        // Обход идет по колонкам
        // если после удаления осталось одно число => записываем его в ячейку и рекурсией опять обходим массив
        spisokPust.forEach((ab) => {
                for (let i = 0; i < 9; i++) {
                    if (i != ab[0]) {
                        if (puzzle[ab[0]][ab[1]].indexOf(puzzle[i][ab[1]]) != -1) {
                            puzzle[ab[0]][ab[1]].splice(puzzle[ab[0]][ab[1]].indexOf(puzzle[i][ab[1]]), 1)
                        }
                    }
                }


            }
        )


        // из пустых ячеек (с уже прореженными массивами) удаляем числа находящиеся в малых квадратах
        // Обход идет по малым квадратам
        spisokPust.forEach((ab) => {
            for (let j = malKvadrJ(ab)[0]; j < malKvadrJ(ab)[1]; j++) {
                for (let i = malKvadrI(ab)[0]; i < malKvadrI(ab)[1]; i++) {
                    if (i != ab[1] && j != ab[0]) {
                        if (puzzle[ab[0]][ab[1]].indexOf(puzzle[j][i]) != -1) {
                            puzzle[ab[0]][ab[1]].splice(puzzle[ab[0]][ab[1]].indexOf(puzzle[j][i]), 1)
                        }
                    }
                }
            }

        })

/*        spisokPust.forEach((ab, abN) => {
            if (puzzle[ab[0]][ab[1]].length === 1) {
                puzzle[ab[0]][ab[1]] = puzzle[ab[0]][ab[1]][0];
                spisokPust.splice(abN, 1);
            }
        })*/

        for(let k=0; k<spisokPust.length; k++){
            let ab=spisokPust[k];
            if (puzzle[ab[0]][ab[1]].length === 1) {
                puzzle[ab[0]][ab[1]] = puzzle[ab[0]][ab[1]][0];
                spisokPust.splice(k, 1);
                k=k-1
            }
        }




        function malKvadrJ(ab) {
            if (ab[0] < 3) {
                return [0, 3]
            }
            if (ab[0] < 6) {
                return [3, 6]
            }
            if (ab[0] < 9) {
                return [6, 9]
            }
        }

        function malKvadrI(ab) {
            if (ab[1] < 3) {
                return [0, 3]
            }
            if (ab[1] < 6) {
                return [3, 6]
            }
            if (ab[1] < 9) {
                return [6, 9]
            }
        }

        if(spisokPust.length==0){
            return
        }else{
            console.log(spisokPust.length);
            obhod();
        }
    }

    return puzzle;
}


let puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];

console.log(sudoku(puzzle));