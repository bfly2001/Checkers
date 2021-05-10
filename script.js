
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
}

