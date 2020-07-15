var leftest = $("leftest");
var mainNav = $("mainNav");
var navHead = $("navHead");
var navFooter = $("navFooter");

var resizeMainNav = function () {
    mainNav.style.marginLeft = document.body.clientWidth / 7 + 'px';
    mainNav.style.marginRight = document.body.clientWidth / 7 + 'px';
    mainNav.style.width = document.body.clientWidth / 7 * 5;
};
resizeMainNav();

var resizeNavFooter = function () {
    navFooter.style.top = (window.innerHeight - 110.2) + 'px';
    navFooter.style.paddingLeft = document.body.clientWidth / 7 + 'px';
};
resizeNavFooter();

// leftestStyleLeft为true时导航栏展开。
var leftestStyleLeft = false;
var resizeLeftest = function () {
    leftest.style.top = '0px';
    leftest.style.left = (!leftestStyleLeft ? -document.body.clientWidth : 0) + 'px';
};
resizeLeftest();

function clickNav() {
    leftestStyleLeft = !leftestStyleLeft;
    if (leftestStyleLeft) {
        setTimeout(moveElement("leftest", 0, 0, 10), 0);
        navHead.style.backgroundImage = 'near-gradient(0deg, transparent, #000)';
    } else {
        setTimeout(moveElement("leftest", -document.body.clientWidth, 0, 10), 0);
        navHead.style.backgroundImage = '';
    }
}

var LanguageOpacity = true;

function clickLan() {
    if (LanguageOpacity) {
        $("langSup").style.opacity = '1';
        LanguageOpacity = !LanguageOpacity;
    } else {
        $("langSup").style.opacity = '0';
        LanguageOpacity = !LanguageOpacity;
    }
}


window.onresize = function () {
    resizeLeftest();
    resizeMainNav();
    resizeNavFooter();
};

