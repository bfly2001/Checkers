
function allowDropThis(i) {
    if (i.target.className == 'redpiece' ) {
        i.target.remove();
    } else if (i.target.className == 'blackpiece') {
        i.target.remove();
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

