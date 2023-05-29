function sudoku(puzzle) {
    //return the solved puzzle as a 2d array of 9 x 9
    let pusto = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let spisokPust = [];


    // в пустые ячейки добавляем полные массивы [1, 2, 3, 4, 5, 6, 7, 8, 9]
    puzzle.forEach((rete1, n1) => {
        rete1.forEach((rete2, n2) => {
            if (rete2 == 0) {
                puzzle[n1][n2] = pusto;
                spisokPust.push([n1, n2])
            }
        })
    })


    // из пустых ячеек (с полными массивами) удаляем числа находящиеся в этом ряду
    // НЕ ДОДЕЛАЛ: если после удаления осталось одно число => записываем его в ячейку и рекурсией опять обходим массив
    spisokPust.forEach((ab)=>{
        puzzle[ab[0]].forEach((v, n)=>{
            if(n!=ab[1]){
                puzzle[ab[0]][ab[1]].push('!!!!')
            }
        })
    })


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