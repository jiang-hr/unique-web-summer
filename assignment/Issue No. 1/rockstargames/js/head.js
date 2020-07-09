function $(Nid) {
    return document.getElementById(Nid);
}

function $$(Nid) {
    return document.getElementsByClassName(Nid);
}

// 获取dom树节点。
var sectionPoster = $("sectionPoster");
var posterDescription = $("posterDescription");
var newswire = $("newswire");
var posterLeft = $("posterLeft");
var posterButton = $("posterButton");

var contentImageTop1 = $("contentImageTop1");
var contentImageTop2 = $("contentImageTop2");
var contentImageTop3 = $("contentImageTop3");
var contentImageTop4 = $("contentImageTop4");
var contentImageTop5 = $("contentImageTop5");
var contentImageTop6 = $("contentImageTop6");
var gap = 33.2;

// 响应式计算中。。。

// 通用响应式
function calMarginLeftAndRight() {
    return ((window.innerWidth > 1420) ? (window.innerWidth - 1420) / 2 : 0).toString() + 'px';
}

function calWidth() {
    return (window.innerWidth > 1420 ? 1420 : window.innerWidth) + 'px';
}

// SectionPoster 计算。
function calSectionPosterHeight() {
    return ((window.innerWidth > 1420) ? 798.75 : (window.innerWidth / 16 * 9)).toString() + 'px';
}

function resizeSectionPoster() {
    sectionPoster.style.marginLeft = calMarginLeftAndRight();
    sectionPoster.style.marginRight = calMarginLeftAndRight();
    sectionPoster.style.marginTop = '60px';
    sectionPoster.style.height = calSectionPosterHeight();
    sectionPoster.style.width = calWidth();
}
resizeSectionPoster();

// PosterDescription 计算
function calPosterDescriptionHeight() {
    return ((window.innerWidth > 1420) ? 51.7 : (window.innerWidth * 51.7 / 1420)).toString() + 'px';
}

function resizePosterDescription() {
    posterDescription.style.width = calWidth();
    posterDescription.style.height = calPosterDescriptionHeight();
    posterDescription.style.marginLeft = calMarginLeftAndRight();
    posterDescription.style.marginRight = calMarginLeftAndRight();
}
resizePosterDescription();

function resizeNewswire() {
    newswire.style.marginLeft = ((window.innerWidth > 1486.4) ? (window.innerWidth - 1420 - 2 * gap) / 2 : 0).toString() + 'px';
    newswire.style.marginRight = ((window.innerWidth > 1486.4) ? (window.innerWidth - 1420 - 2 * gap) / 2 : 0).toString() + 'px';
    newswire.style.paddingLeft = '33.2px';
    newswire.style.paddingRight = '33.2px';
}
resizeNewswire();

function resizeContentImageTop1() {
    contentImageTop1.style.height = ((window.innerWidth > 1420 ? 1420 : window.innerWidth) / 16 * 9).toString() + 'px';
}

function resizeContentImageTop2() {
    contentImageTop2.style.height = (((window.innerWidth > 1420 ? 1420 : window.innerWidth) - gap) / 2).toString() + 'px';
}

function resizeContentImageTop3() {
    contentImageTop3.style.height = (((window.innerWidth > 1420 ? 1420 : window.innerWidth) - gap) / 2).toString() + 'px';
}

function resizeContentImageTop4() {
    contentImageTop4.style.height = (((window.innerWidth > 1420 ? 1420 : window.innerWidth) - gap * 2) / 3).toString() + 'px';
}

function resizeContentImageTop5() {
    contentImageTop5.style.height = (((window.innerWidth > 1420 ? 1420 : window.innerWidth) - gap * 2) / 3).toString() + 'px';
}

function resizeContentImageTop6() {
    contentImageTop6.style.height = (((window.innerWidth > 1420 ? 1420 : window.innerWidth) - gap * 2) / 3).toString() + 'px';
}


function resizeGridHeight() {
    resizeContentImageTop1();
    resizeContentImageTop2();
    resizeContentImageTop3();
    resizeContentImageTop4();
    resizeContentImageTop5();
    resizeContentImageTop6();
}
resizeGridHeight();


window.onresize = function () {
    resizeSectionPoster();
    resizePosterDescription();
    resizeNewswire();
    resizeGridHeight();
};


// 临时渲染，请及时删除。
sectionPoster.style.backgroundColor = 'pink';
posterDescription.style.backgroundColor = 'yellow';