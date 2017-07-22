/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// test  
var sudokuArr = [];
var solvedBoard = [];

// SAFE
function table() {
    let strHTML = "";
    strHTML = "<table>";
    for (let row = 0; row < 9; row++) {
        strHTML += "<tr>";
        for (let col = 0; col < 9; col++) {
            strHTML += `<td><input id="r${row}c${col}" type="number" min="0" max="9" /></td>`;
        }
        strHTML += "</tr>";
    }
    strHTML += "</table>";
    document.getElementById('myTable').innerHTML = strHTML;
    solvedTable();
};

// SAFE
function solvedTable() {
    let strHTML = "";
    strHTML = "<table>";
    for (let row = 0; row < 9; row++) {
        strHTML += "<tr>";
        for (let col = 0; col < 9; col++) {
            strHTML += `<td id = "R${row}C${col}"> </td>`;
        }
        strHTML += "</tr>";
    }
    strHTML += "</table>";
    document.getElementById('solvedTable').innerHTML = strHTML;

};

function calculate() {
    solve(0, 0);
};

function solve(row, col) {
    // check if we must skip the current row & column
    while (sudokuArr[row][col] != 0 && row < 9) {
        if (col < 8) {
            col++;
        } else if (col == 8) {
            col = 0;
            row++;
        }
    }

    // if row = 9, we're done and we print the solution.
    if (row == 9) {
        showSolution();
    }

    // else, loop through numbers 1-9 and see if it's valid number

    // if it is use recursion to increment to the next column 

    // if there are no valid numbers we don't use recursion and we must backtrack.

    for (var candidate = 1; candidate < 10; candidate++) {
        if (validCandidate(candidate, row, col)) {
            sudokuArr[row][col] = candidate;
            // if we're finished traversing the row, then we move onto the next row.
            if (col == 8) {
                solve(row + 1, 0);
                // else, were still traversing the row. Therefore increment row.
            } else {
                solve(row, col + 1);
            }
        } else {
            // it is not a valid candidate, therefore we set the sudoku array to
            // 0
            sudokuArr[row][col] = 0;
        }
    }
};

function validCandidate(candidate, row, col) {

    // check column wise to see if i matches with any numbers. Return false if so

    for (var i = 0; i < 9; i++) {
        if (sudokuArr[row][i] == candidate) {
            return false;
        } else if (sudokuArr[i][col] == candidate) {
            return false;
        } else {
            checkWhichSquare(candidate, row, col);
        }

    }
};

function checkWhichSquare(candidate, row, col) {
    if (row <= 2 && col <= 2) {
        checkSudokuSquare(candidate, 0, 0);
    } else if (row <= 2 && col <= 5) {
        checkSudokuSquare(candidate, 0, 3);
    } else if (row <= 2 && col <= 8) {
        checkSudokuSquare(candidate, 0, 6);
    } else if (row <= 5 && col <= 2) {
        checkSudokuSquare(candidate, 3, 0);
    } else if (row <= 5 && col <= 5) {
        checkSudokuSquare(candidate, 3, 3);
    } else if (row <= 5 && col <= 8) {
        checkSudokuSquare(candidate, 3, 6);
    } else if (row <= 8 && col <= 2) {
        checkSudokuSquare(candidate, 6, 0);
    } else if (row <= 8 && col <= 5) {
        checkSudokuSquare(candidate, 6, 3);
    } else if (row <= 8 && col <= 8) {
        checkSudokuSquare(candidate, 6, 6);
    }
};

function checkSudokuSquare(candidate, row, col) {
    for (var i = row; row < row + 3; i++) {
        for (var j = col; j < col + 3; j++) {
            if (sudokuArr[row][col] == candidate) {
                return false;
            }
        }
    }
    return true;
};

function showSolution() {
    for (var row = 0; row < 9; row++) {
        solvedBoard[row] = [];
        for (var col = 0; col < 9; col++) {
            solvedBoard[row][col] = sudokuArr[row][col];
        }
    }
    displayAnswer();

};

function displayAnswer() {
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            document.getElementById("R" + row + "C" + col).innerHTML = solvedBoard[row][col];
        }
    }
}


function saveTable() {
    for (var row = 0; row < 9; row++) {
        sudokuArr[row] = [];
        for (var col = 0; col < 9; col++) {
            var currentPointer = Number(document.getElementById("r" + row + "c" + col).value);
            if (currentPointer <= 9 && currentPointer >= 1) {
                sudokuArr[row][col] = currentPointer;
            } else {
                sudokuArr[row][col] = 0;
            }
        }
    }
};