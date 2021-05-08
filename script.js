const blackPiece1 = document.getElementById('blackpiece1');
const redPiece1 = document.getElementById('redpiece1');

function allowDropThis(i) {
    if (i.target.id == 'redpiece1' ) {
        blackPiece1.remove();
    } else if (i.target.className == 'blackpiece1') {
        redPiece1.remove();
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
}

/*function jumpOverBlack1(event) {
    if (event.target.firstChild.className == 'blackpiece' ) {
        blackPiece1.remove();
    } else {
        return false;
    };
}*/

/*function jumpOverRed1(event) {
    if (event.target.firstChild.className == 'redpiece') {
        redPiece1.remove();
    } else {
        return false;
    };      
} */
