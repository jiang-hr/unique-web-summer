function $(Nid) {
    return document.getElementById(Nid);
}

function $$(Nid) {
    return document.getElementsByClassName(Nid);
}


function abs(num) {
    return num > 0 ? num : -num;
}

// 通用响应式
function calMarginLeftAndRight() {
    return ((document.body.clientWidth > 1420) ? (document.body.clientWidth - 1420) / 2 : 0).toString() + 'px';
}

function calWidth() {
    return (document.body.clientWidth > 1420 ? 1420 : document.body.clientWidth) + 'px';
}

function moveElement(elementID, final_x, final_y, interval) {
    const speed = 100;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        end = true;
        return;
    }
    if (abs(xpos - final_x) <= speed) {
        xpos = final_x;
    }
    if (abs(ypos - final_y) <= speed) {
        ypos = final_y;
    }
    if (xpos < final_x) {
        xpos += speed;
    }
    if (xpos > final_x) {
        xpos -= speed;
    }
    if (ypos < final_y) {
        ypos += speed;
    }
    if (ypos > final_y) {
        ypos -= speed;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    // console.log(repeat);
    setTimeout(repeat, interval);
}