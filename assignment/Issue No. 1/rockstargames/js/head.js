function $(Nid) {
    return document.getElementById(Nid);
}

function $$(Nid) {
    return document.getElementsByClassName(Nid);
}

// 获取dom树节点。
var sectionPoster = $("sectionPoster");
var posterDescription = $("posterDescription");
var posterLeft = $("posterLeft");
var posterButton = $("posterButton");
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

var poster1 = $("poster1");
var poster2 = $("poster2");
var poster3 = $("poster3");

poster1.style.backgroundImage = 'url("https://videos-rockstargames-com.akamaized.net/screencaps/12142/_global/layers/0.jpg")';
poster2.style.backgroundImage = 'url("https://videos-rockstargames-com.akamaized.net/screencaps/12142/_global/layers/1.png")';
poster3.style.backgroundImage = 'url("https://videos-rockstargames-com.akamaized.net/screencaps/12142/_global/layers/2.png")';

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

function resizePoster(Element) {
    Element.style.marginLeft = calMarginLeftAndRight();
    Element.style.marginRight = calMarginLeftAndRight();
    Element.style.marginTop = '60px';
    Element.style.height = calSectionPosterHeight();
    Element.style.width = calWidth();
}

function resizeSectionPoster() {
    resizePoster(sectionPoster);
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
    newswire.style.paddingLeft = gap + 'px';
    newswire.style.paddingRight = gap + 'px';
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


function resizeMainPoster() {
    poster1.style.width = calWidth();
    poster1.style.height = calSectionPosterHeight();
    poster2.style.width = calWidth();
    poster2.style.height = calSectionPosterHeight();
    poster3.style.width = calWidth();
    poster3.style.height = calSectionPosterHeight();
}
resizeMainPoster();

function resizePosterLeft() {
    posterLeft.style.width = ((window.innerWidth > 1420 ? 1420 : window.innerWidth) - 184.55).toString() + 'px';
}

function resizePosterButton() {
    posterButton.style.marginLeft = ((window.innerWidth > 1420 ? 1420 : window.innerWidth) - 184.55).toString() + 'px';
    posterButton.style.height = calPosterDescriptionHeight();
    posterButton.style.padding = (28 - (window.innerWidth > 1420 ? 0 : 1420 - window.innerWidth) / 50) / 2 + 'px 24px';
}
resizePosterButton();

var gridFeatureSpan = $$("grid-feature-span");

function resizeGridFeatureSpan() {
    for (let x = 0; x < 4; x++) {
        gridFeatureSpan[x].style.height = (((window.innerWidth > 1420 ? 1420 : window.innerWidth) - 3 * gap) / 256 * 79).toString() + 'px';
    }
}
resizeGridFeatureSpan();


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
    resizeMainPoster();
    resizePosterLeft();
    resizePosterButton();
    resizeGridFeatureSpan();
};


// 临时渲染，请及时删除。
// sectionPoster.style.backgroundColor = 'pink';
posterDescription.style.backgroundColor = 'black';


posterLeft.innerHTML = "Grand Theft Auto V: PlayStation 5 Announcement Trailer";


/*
 * 开始写按下 3 个button的结果。
 */

var button = [$("button0"), $("button1"), $("button2")];
button[0].style.backgroundColor = "#fcaf17";
button[1].style.backgroundColor = "#000000";
button[2].style.backgroundColor = "#000000";

function clickButton(num) {
    button.forEach(element => {
        element.style.backgroundColor = "#000000";
    });
    button[num].style.backgroundColor = "#fcaf17";
}

