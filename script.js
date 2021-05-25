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
