/*
let dragged;

document.addEventListener("drag", function( event ) {

}, false);

document.addEventListener("dragstart", function( event ) {
    dragged = event.target;
}, false);

document.addEventListener("dragend", function( event ) {
    
}, false);

document.addEventListener("dragover", function ( event ) {
    event.preventDefault();
}, false);

document.addEventListener("dragleave", function( event ) {

}, false);

document.addEventListener("drop", function ( event ) {
    event.preventDefault();
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }

}, false);
*/


/*
function allowDropThis(i) {
    let gamePiece = i.target.id;
    if (gamePiece.className == 'redpiece' ) {
        gamePiece.remove();
    } else if (gamePiece.className == 'blackpiece') {
        gamePiece.remove();
    } else {
        i.preventDefault();
    }
}

function dragThis(i) {
    i.dataTransfer.setData("checker", i.target.id);
}

function dropThis(i) {
    i.preventDefault();
    var data = i.dataTransfer.getData("checker");
    i.target.append(document.getElementById(data));
}*/

'use strict';

function dragStart(e) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData('Text', e.target.id);
    //e.dataTransfer.setDragImage(e.target, 0,0);
    console.log('start');
    return true;

}

function dragEnter(e) {
    e.preventDefault();
    if(e.target.hasChildNodes() == true) {
        e.target.firstChild.remove();
    } else if (e.target.hasChildNodes() == false) {
       //do nothing
       return false; 
    }
}

function dragOver(e) {
    e.preventDefault();
    return false;
}

function dragLeave(e) {
    e.preventDefault();
    return false;
}


function dragDrop(e) {
    let src = e.dataTransfer.getData('Text');
    e.target.append(document.getElementById(src));
    e.stopPropagation();
    console.log('drop');
    return false;
}
