var leftest = $("leftest");
var mainNav = $("mainNav");
var navHead = $("navHead");
var navFooter = $("navFooter");

//
var mainSection = $("mainSection");
var mainPicture = $("mainPicture");
//

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


//

function resizeMainSection() {
    mainSection.style.paddingLeft = calMarginLeftAndRight();
    mainSection.style.paddingRight = calMarginLeftAndRight();
    mainSection.style.width = document.body.clientWidth + 'pxs';
}
resizeMainSection();

function resizeMainPicture() {
    mainPicture.style.height = parseInt(calWidth()) / 16 * 9 + 'px';
}
resizeMainPicture();


window.onresize = function () {
    resizeLeftest();
    resizeMainNav();
    resizeNavFooter();
    resizeMainSection();
    resizeMainPicture();
};