/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// test 
var p = 3;
var l = 4;
var sudokuArr = [];

function table(){
    let strHTML = "";    
    strHTML = "<table>";
    for(let row = 0; row < 9; row++){
    strHTML += "<tr>";
        for (let col = 0; col < 9; col++){
            strHTML += `<td><input id="r${row}c${col}" type="number" min="0" max="9" /></td>`;
        }
    strHTML += "</tr>";
    }
    strHTML += "</table>";
    document.getElementById('myTable').innerHTML = strHTML;
    
    solvedTable();
    
};

function solvedTable(){ 
    let strHTML = "";    
    strHTML = "<table>";
    for(let row = 0; row< 9; row++){
    strHTML += "<tr>";
        for (let col = 0; col < 9; col++){
            strHTML += `<td id = "R${row}C${col}"> </td>`;
        }
    strHTML += "</tr>";
    }
    strHTML += "</table>";
    document.getElementById('solvedTable').innerHTML = strHTML;
    
};

function calculate(){ 
   
    
    
};

function saveTable(){
    for(var row = 0; row < 9; row++){
        sudokuArr[row] = [];
        for(var col = 0; col < 9; col++){   
            var currentPointer = Number(document.getElementById("r" + row + "c" + col).value);
            if ( currentPointer <= 9 && currentPointer >= 1 ) {
                sudokuArr[row][col] = currentPointer;
            } else {
                sudokuArr[row][col] = 0;
            }
        }
    }
};
