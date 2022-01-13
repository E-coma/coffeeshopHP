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
let windowBottom = $(window).scrollTop() + $(window).height()
let windowTop = $(window).scrollTop()
// コンセプトタイトルのパディング↓
let conceptUp = $("#concept-text").offset().top + document.getElementById("concept-text").offsetHeight;
$(window).on('scroll', function () {
    windowTop = $(window).scrollTop()
    windowBottom = $(window).scrollTop() + $(window).height()
    if (windowBottom >= conceptUp && windowTop <= conceptUp) {
        $('#concept-text').addClass('isUp');
    } else {
        $('#concept-text').removeClass('isUp');
    }
});

//   メニューテキスト表示タイミング
const margin = 50
$(window).on('scroll', function () {
    windowBottom = $(window).scrollTop() + $(window).height()
    windowTop = $(window).scrollTop()
    if (windowBottom > $("#coffee-menu").offset().top + margin + document.getElementById("text1").offsetHeight  && windowTop < $("#sandwich-menu").offset().top) {
        $('#text1').addClass('isUp');
    } else {
        $('#text1').removeClass('isUp');
    }
});

$(window).on('scroll', function () {
    windowBottom = $(window).scrollTop() + $(window).height()
    windowTop = $(window).scrollTop()
    if (windowBottom > $("#sandwich-menu").offset().top + margin + document.getElementById("text2").offsetHeight && windowTop < $("#access").offset().top - 170) {
        $('#text2').addClass('isUp');
    } else {
        $('#text2').removeClass('isUp');
    }
});

// アクセステキスト

$(window).on('scroll', function () {
    windowBottom = $(window).scrollTop() + $(window).height()
    windowTop = $(window).scrollTop()
    if (windowBottom > $("#access").offset().top + document.getElementById("access-textbox").offsetHeight && windowTop < $("#access").offset().top + document.getElementById("access-textbox").offsetHeight) {
        $('#accesstext').addClass('isUp');
    } else {
        $('#accesstext').removeClass('isUp');
    }
});

// console.log(windowTop);
// console.log(windowBottom)