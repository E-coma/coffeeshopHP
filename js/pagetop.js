$(".JS_VegasItem").vegas({ // スライドショーにしたい要素指定
    slides: [
        { src: "common/img/top-img1.jpg" }, // 背景画像1枚目
        { src: "common/img/top-img2.jpg" }, // 背景画像2枚目
        { src: "common/img/top-img3.jpg" } // 背景画像3枚目
    ]
});

// 右固定のナビゲーション色変更タイミング
let topimgHeight = document.getElementById("top-img").offsetHeight
jQuery(window).on('scroll', function () {
    if (topimgHeight < jQuery(this).scrollTop()) {
        jQuery('#header ul a').addClass('change-color');
    } else {
        jQuery('#header ul a').removeClass('change-color');
    }
});

// 左のロゴ表示タイミング設定
let $pagetop = $('.ScrollTop');

$(window).on('scroll', function () {
    if ($(this).scrollTop() < topimgHeight) {
        $pagetop.removeClass('isActive');
    } else {
        $pagetop.addClass('isActive');
    }
});

// コンセプトテキスト表示タイミング
// コンテンツごとのマージントップ↓
const contentsMarginTop = 170
const textMargin = 50
let windowBottom = $(window).scrollTop() + $(window).height()
let windowTop = $(window).scrollTop()
// コンセプトタイトルのパディング↓
let conceptUp = $("#concept-text").offset().top + document.getElementById("concept-text").offsetHeight;
const menuHeigh = document.getElementById("menu").offsetTop
$(window).on('scroll', function () {
    windowTop = $(window).scrollTop()
    windowBottom = $(window).scrollTop() + $(window).height()
    console.log(windowTop)
    if (windowBottom >= conceptUp && windowTop <= conceptUp) {
        $('#concept-text').addClass('isUp');
    } else {
        $('#concept-text').removeClass('isUp');
    }
});

//   メニューテキスト表示タイミング
const conceptHeight = document.getElementById("concept").offsetHeight
let menu1Up = conceptUp
$(window).on('scroll', function () {
    windowBottom = $(window).scrollTop() + $(window).height()
    windowTop = $(window).scrollTop()
    if (windowBottom > menu1Up && windowTop < menu1Up + document.getElementById("sandwich-menu").offsetHeight + document.getElementById("sandwich-menu").offsetHeight + textMargin + contentsMarginTop) {
        $('#menu-text1').addClass('isUp');
    } else {
        $('#menu-text1').removeClass('isUp');
    }
});

let menu2Up = menu1Up + textMargin + document.getElementById("sandwich-menu").offsetHeight;
$(window).on('scroll', function () {
    windowBottom = $(window).scrollTop() + $(window).height()
    windowTop = $(window).scrollTop()
    if (windowBottom > menu2Up && windowTop < menu2Up + contentsMarginTop + textMargin + document.getElementById("access").offsetHeight) {
        $('#menu-text2').addClass('isUp');
    } else {
        $('#menu-text2').removeClass('isUp');
    }
});
let menu3Up = menu2Up + 170 * 2 + textMargin * 2 + document.getElementById("sandwich-menu").offsetHeight
$(window).on('scroll', function () {
    windowBottom = $(window).scrollTop() + $(window).height()
    windowTop = $(window).scrollTop()
    if (windowBottom > menu3Up && windowTop < menu3Up + 80 + textMargin * 2 + document.getElementById("access").offsetHeight) {
        $('#accesstext').addClass('isUp');
    } else {
        $('#accesstext').removeClass('isUp');
    }
});

// console.log(document.getElementById("concept-title").offsetHeight);
// console.log(windowTop)