var dragged;

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
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }

}, false);



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

