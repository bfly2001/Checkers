function allowDropThis(i) {
    i.preventDefault();
}

function dragThis(i) {
    i.dataTransfer.setData("checker", i.target.id);
}

function dropThis(i) {
    i.preventDefault();
    var data = i.dataTransfer.getData("checker");
    i.target.appendChild(document.getElementById(data));
}

function jumpOver(event) {
    let blackPiece = document.getElementById('blackpiece1');
    blackPiece.remove();
}

