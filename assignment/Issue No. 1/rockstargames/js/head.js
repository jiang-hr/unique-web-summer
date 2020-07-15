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
var posterHref1 = $("posterHref1");
var posterHref2 = $("posterHref2");
var leftest = $("leftest");

var mainNav = $("mainNav");
var navHead = $("navHead");
var navFooter = $("navFooter");

// 响应式计算中。。。


// SectionPoster 计算。
function calSectionPosterHeight() {
    return ((document.body.clientWidth > 1420) ? 798.75 : (document.body.clientWidth / 16 * 9)).toString() + 'px';
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
    return ((document.body.clientWidth > 1420) ? 51.7 : (document.body.clientWidth * 51.7 / 1420)).toString() + 'px';
}

function resizePosterDescription() {
    posterDescription.style.width = calWidth();
    posterDescription.style.height = calPosterDescriptionHeight();
    posterDescription.style.marginLeft = calMarginLeftAndRight();
    posterDescription.style.marginRight = calMarginLeftAndRight();
}
resizePosterDescription();

function resizeNewswire() {
    newswire.style.marginLeft = ((document.body.clientWidth > 1486.4) ? (document.body.clientWidth - 1420 - 2 * gap) / 2 : 0).toString() + 'px';
    newswire.style.marginRight = ((document.body.clientWidth > 1486.4) ? (document.body.clientWidth - 1420 - 2 * gap) / 2 : 0).toString() + 'px';
    newswire.style.paddingLeft = gap + 'px';
    newswire.style.paddingRight = gap + 'px';
}
resizeNewswire();

function resizeContentImageTop1() {
    contentImageTop1.style.height = ((document.body.clientWidth > 1420 ? 1420 : document.body.clientWidth) / 16 * 9).toString() + 'px';
}

function resizeContentImageTop2() {
    contentImageTop2.style.height = (((document.body.clientWidth > 1420 ? 1420 : document.body.clientWidth) - gap) / 2).toString() + 'px';
}

function resizeContentImageTop3() {
    contentImageTop3.style.height = (((document.body.clientWidth > 1420 ? 1420 : document.body.clientWidth) - gap) / 2).toString() + 'px';
}

function resizeContentImageTop4() {
    contentImageTop4.style.height = (((document.body.clientWidth > 1420 ? 1420 : document.body.clientWidth) - gap * 2) / 3).toString() + 'px';
}

function resizeContentImageTop5() {
    contentImageTop5.style.height = (((document.body.clientWidth > 1420 ? 1420 : document.body.clientWidth) - gap * 2) / 3).toString() + 'px';
}

function resizeContentImageTop6() {
    contentImageTop6.style.height = (((document.body.clientWidth > 1420 ? 1420 : document.body.clientWidth) - gap * 2) / 3).toString() + 'px';
}


function resizeMainPoster() {
    poster1.style.width = calWidth();
    poster1.style.height = calSectionPosterHeight();
    poster1.style.left = calMarginLeftAndRight();
    poster1.style.top = '60px';

    poster2.style.width = calWidth();
    poster2.style.height = calSectionPosterHeight();
    poster2.style.left = calMarginLeftAndRight();
    poster2.style.top = '60px';

    poster3.style.width = calWidth();
    poster3.style.height = calSectionPosterHeight();
    poster3.style.left = calMarginLeftAndRight();
    poster3.style.top = '60px';
}
resizeMainPoster();

function resizePosterLeft() {
    posterLeft.style.width = ((document.body.clientWidth > 1420 ? 1420 : document.body.clientWidth) - 184.55).toString() + 'px';
}

function resizePosterButton() {
    posterButton.style.marginLeft = ((document.body.clientWidth > 1420 ? 1420 : document.body.clientWidth) - 184.55).toString() + 'px';
    posterButton.style.height = calPosterDescriptionHeight();
    posterButton.style.padding = (28 - (document.body.clientWidth > 1420 ? 0 : 1420 - document.body.clientWidth) / 50) / 2 + 'px 24px';
}
resizePosterButton();

var gridFeatureSpan = $$("grid-feature-span");

function resizeGridFeatureSpan() {
    for (let x = 0; x < 4; x++) {
        gridFeatureSpan[x].style.height = (((document.body.clientWidth > 1420 ? 1420 : document.body.clientWidth) - 3 * gap) / 256 * 79).toString() + 'px';
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


// 记载中间顺滑翻页的位置。
var locat = {
    left: ((document.body.clientWidth > 1420) ? (document.body.clientWidth - 4260) / 2 : -document.body.clientWidth).toString() + 'px',
    center: ((document.body.clientWidth > 1420) ? (document.body.clientWidth - 1420) / 2 : 0).toString() + 'px',
    right: ((document.body.clientWidth > 1420) ? (document.body.clientWidth + 1420) / 2 : document.body.clientWidth).toString() + 'px',
};

// leftestStyleLeft为true时导航栏展开。
var leftestStyleLeft = false;
var resizeLeftest = function () {
    leftest.style.top = '0px';
    leftest.style.left = (!leftestStyleLeft ? -document.body.clientWidth : 0) + 'px';
};
resizeLeftest();


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

window.onresize = function () {
    resizeSectionPoster();
    resizePosterDescription();
    resizeNewswire();
    resizeGridHeight();
    resizeMainPoster();
    resizePosterLeft();
    resizePosterButton();
    resizeGridFeatureSpan();
    locat.left = ((document.body.clientWidth > 1420) ? (document.body.clientWidth - 4260) / 2 : -document.body.clientWidth).toString() + 'px';
    locat.center = ((document.body.clientWidth > 1420) ? (document.body.clientWidth - 1420) / 2 : 0).toString() + 'px';
    locat.right = ((document.body.clientWidth > 1420) ? (document.body.clientWidth + 1420) / 2 : document.body.clientWidth).toString() + 'px';
    resizeLeftest();
    resizeMainNav();
    resizeNavFooter();
};


posterDescription.style.backgroundColor = 'black';
posterLeft.innerHTML = "Grand Theft Auto V: PlayStation 5 Announcement Trailer";


/*
 * 开始写按下 3 个button的结果。
 */

var button = [$("button0"), $("button1"), $("button2")];
button[0].style.backgroundColor = "#fcaf17";
button[1].style.backgroundColor = "#000000";
button[2].style.backgroundColor = "#000000";
var buttonIsLight = 0;

var content = {
    0: {
        href: "https://www.rockstargames.com/videos/video/12142",
        word: "Grand Theft Auto V: PlayStation 5 Announcement Trailer",
        poster1: 'url("https://videos-rockstargames-com.akamaized.net/screencaps/12142/_global/layers/0.jpg")',
        poster2: 'url("https://videos-rockstargames-com.akamaized.net/screencaps/12142/_global/layers/1.png")',
        poster3: 'url("https://videos-rockstargames-com.akamaized.net/screencaps/12142/_global/layers/2.png")',
    },
    1: {
        href: "https://www.rockstargames.com/videos/video/12135",
        word: "Red Dead Online: Moonshiners",
        poster1: 'url("https://videos-rockstargames-com.akamaized.net/screencaps/12135/_global/layers/1.jpg")',
        poster2: 'url("https://videos-rockstargames-com.akamaized.net/screencaps/12135/_global/layers/2.png")',
        poster3: 'url("https://videos-rockstargames-com.akamaized.net/screencaps/12135/_global/layers/3.png")',
    },
    2: {
        href: "https://www.rockstargames.com/videos/video/12134",
        word: "Grand Theft Auto Online: The Diamond Casino Heist",
        poster1: 'url("https://videos-rockstargames-com.akamaized.net/screencaps/12134/_global/layers/1.jpg")',
        poster2: 'url("https://videos-rockstargames-com.akamaized.net/screencaps/12134/_global/layers/2.png")',
        poster3: 'url("https://videos-rockstargames-com.akamaized.net/screencaps/12134/_global/layers/3.png")',
    }
};

poster1.style.backgroundImage = content[0].poster1;
poster2.style.backgroundImage = content[0].poster2;
poster3.style.backgroundImage = content[0].poster3;

var end = false;

function moveLeft(integer) {
    for (let x = 0; x < 3; x++) {
        setTimeout(function () {
            moveElement("poster" + (x + 1), parseInt(locat.left), 60, integer);
        }, integer);
        setTimeout(function () {
            moveElement(poster[x].id, parseInt(locat.center), 60, integer);
        }, integer);
    }
}

function moveRight(integer) {
    for (let x = 0; x < 3; x++) {
        setTimeout(function () {
            moveElement("poster" + (x + 1), parseInt(locat.right), 60, integer);
        }, integer);
        setTimeout(function () {
            moveElement(poster[x].id, parseInt(locat.center), 60, integer);
        }, integer);
    }
}

var poster = [];

function delChild(interval, num) {
    if (end) {
        setTimeout(function () {
            poster1.id = "tempPoster" + (num * 3 + 1);
            poster2.id = "tempPoster" + (num * 3 + 2);
            poster3.id = "tempPoster" + (num * 3 + 3);
            poster1.className = "poster";
            poster2.className = "poster";
            poster3.className = "poster";
            poster1.style.display = "none";
            poster2.style.display = "none";
            poster3.style.display = "none";
            poster1 = poster[0];
            poster2 = poster[1];
            poster3 = poster[2];
            poster1.id = "poster1";
            poster2.id = "poster2";
            poster3.id = "poster3";
            poster = [];
            end = false;
            resizeMainPoster();
        }, 0);
        return;
    }
    var repeat = "delChild('" + interval + "','" + num + "')";
    setTimeout(repeat, interval);
}



var mainPoster = [];
for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
        var temp = document.createElement('div');
        temp.style.width = calWidth();
        temp.id = "tempPoster" + (y * 3 + x + 1);
        temp.style.position = "absolute";
        temp.style.height = calSectionPosterHeight();
        temp.style.top = '60px';
        temp.style.backgroundImage = content[y]["poster" + (x + 1)];
        temp.style.display = "none";
        posterHref1.appendChild(temp);
        mainPoster.push(temp);
    }
}


function clickButton(num) {
    if (num === buttonIsLight) {
        return;
    }
    let toLeft;
    if (num < buttonIsLight) {
        toLeft = true;
    } else {
        toLeft = false;
    }
    button[num].style.backgroundColor = "#fcaf17";
    button[buttonIsLight].style.backgroundColor = "#000000";
    var buttonIsLightOld = buttonIsLight;
    buttonIsLight = num;
    posterLeft.innerHTML = content[num].word;
    posterHref1.href = content[num].href;
    posterHref2.href = content[num].href;
    poster = [];
    for (let x = 0; x < 3; x++) {
        poster.push(mainPoster[num * 3 + x]);
    }
    for (let x = 0; x < 3; x++) {
        poster[x].style.display = "block";
        if (toLeft) {
            poster[x].style.left = locat.right;
        } else {
            poster[x].style.left = locat.left;
        }
    }
    if (toLeft) {
        moveLeft(10);
    } else {
        moveRight(10);
    }
    for (let x = 0; x < 3; x++) {
        poster[x].className = 'poster-' + (x + 1);
    }
    setTimeout(delChild(20, buttonIsLightOld), 20);
}


// 导航栏产生。

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