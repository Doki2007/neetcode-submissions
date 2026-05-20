class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // 1. Crear los Sets para cada columna, fila y box.
        const columns = Array.from({length: 9}, () => new Set()); 
        const rows = Array.from({length: 9}, () => new Set()); 
        const boxes = Array.from({length: 9}, () => new Set()); 

        // 2. Utilizar el metodo for para recorrer nuestro 'board' 
        const length = board.length;
        for (let i = 0; i < length; i++) {
            for(let j = 0; j < length; j++ ) {
                // 3. Creamos una variable para guardar nuestro numero
                let cellNumber = board[i][j];
                // 3.1 Si el numero cellNumber, es vacio seguimos adelante.
                if (cellNumber === ".") continue;

                let boxIndex = Math.floor( i / 3 ) * 3 + Math.floor( j / 3);
                // 4. Hacemos un if para verificar que nuestro número no se encuentre previamente en los sets
                if ( columns[i].has(cellNumber) || rows[j].has(cellNumber) || boxes[boxIndex].has(cellNumber) ) {
                    return false;
                    // 4.1 Salimos de la función porque el número que tenemos ´cellNumber´ ya está en alguna columna, fila o caja
                }

                columns[i].add(cellNumber);
                rows[j].add(cellNumber);
                boxes[boxIndex].add(cellNumber);
            }
        }

        return true;
    }
}

/**
[
      0   1   2   3   4   5   6   7   8  = j
    ["1","2",".",".","3",".",".",".","."],  //0 = i
    ["4",".",".","5",".",".",".",".","."],  //1
    [".","9","8",".",".",".",".",".","3"],  //2
    ["5",".",".",".","6",".",".",".","4"],  //3
    [".",".",".","8",".","3",".",".","5"],  //4
    ["7",".",".",".","2",".",".",".","6"],  //5
    [".",".",".",".",".",".","2",".","."],  //6
    [".",".",".","4","1","9",".",".","8"],  //7
    [".",".",".",".","8",".",".","7","9"]   //8
]
**/