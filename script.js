'use strict';

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
    e.dataTransfer.dropEffect = "move";
    return false;
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
