
function allowDropThis(i) {
    let checkerPiece = i.target.className;
    if (checkerPiece.className == 'redpiece' ) {
        checkerPiece.remove();
    } else if (checkerPiece.className == 'blackpiece') {
        checkerPiece.remove();
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

