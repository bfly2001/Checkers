'use strict';

let redpieces = document.querySelectorAll('.redpiece');
let blackpieces = document.querySelectorAll('.blackpiece');
console.log(redpieces);
console.log(blackpieces);
for(let i = 0; i < redpieces.length; i++) {
    redpieces[i].addEventListener('dragover', dragOver);
}

for(let i = 0; i < blackpieces.length; i++) {
    blackpieces[i].addEventListener('dragover', dragOver);
}

function dragStart(e) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log(e);
    return true;
}

function dragEnd(e) {
    let turn = e.target;
    if (turn.classList.contains('blackpiece')) {
        document.getElementById('player1').style.backgroundColor = "red";
        document.getElementById('player2').style.backgroundColor = "grey";
    } else if(turn.classList.contains('redpiece')) {
        document.getElementById('player2').style.backgroundColor = "black";
        document.getElementById('player1').style.backgroundColor = "grey";
    } else {
        document.getElementById('player1').style.backgroundColor = "grey";
        document.getElementById('player2').style.backgroundColor = "grey";
    }
}

function dragOver(e) {
    console.log(e);
    e.preventDefault();
    let src = e.dataTransfer.getData('Text');
    e.dataTransfer.dropEffect = "move";
    console.log(src);
        if (e.target.hasChildNodes() == true){
            if (e.target.classList.contains('.blackpiece')) {
            e.target.removeChild(blackpiece);
            } else if (e.target.classList.contains('.redpiece')) {
            e.target.removeChild(redpiece);
            }
        } else {
            return false;
        }     
}

function dragDrop(e) {
    //e.preventDefault();
    let src = e.dataTransfer.getData('Text');
    e.target.append(document.getElementById(src));
    e.stopPropagation();
    console.log(e);
    console.log(src);
    return false;
}
