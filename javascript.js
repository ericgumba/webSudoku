/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// test  
var sudokuArr = [];

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

        }
    }
};

function validCandidate(candidate, row, col) {

    // check column wise to see if i matches with any numbers. Return false if so

    // check row wise to see if i matches with any numbers. Return false if so


    // check module (?) wise to see if i matches with any nums.


    return true;

}

function showSolution() {

};


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