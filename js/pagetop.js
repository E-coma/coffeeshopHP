$(".myslide").vegas({ // スライドショーにしたい要素指定
    slides: [
        { src: "common/img/top-img1.jpg" },
        { src: "common/img/top-img2.jpg" },
        { src: "common/img/top-img3.jpg" }
    ]
});


  
// 右固定のナビゲーション色変更タイミング
let topimgHeight = document.getElementById("top-img").offsetHeight
jQuery(window).on('scroll', function () {
    if (topimgHeight < jQuery(this).scrollTop()) {
        jQuery('#header ul a').addClass('change-color');
        jQuery('#hambicon img').attr('src','common/img/hambblack@2x.png');
    } else {
        jQuery('#header ul a').removeClass('change-color');
        jQuery('#hambicon img').attr('src','common/img/hambwhite@2x.png');
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

// アクセステキスト表示タイミング

$(window).on('scroll', function () {
    windowBottom = $(window).scrollTop() + $(window).height()
    windowTop = $(window).scrollTop()
    if (windowBottom > $("#access").offset().top + document.getElementById("access-textbox").offsetHeight && windowTop < $("#access").offset().top + document.getElementById("access-textbox").offsetHeight) {
        $('#accesstext').addClass('isUp');
    } else {
        $('#accesstext').removeClass('isUp');
    }
});

// ハンバーガーメニュー
$(function(){
    $('#hambicon').on('click',function(){
        if($('#header').hasClass('hambset')){
            $('#header').removeClass('hambset');
            $('#hambicon img').attr('src','common/img/hambwhite@2x.png')
        }else{
            $('#header').addClass('hambset');
            $('#hambicon img').attr('src','common/img/closewhiteimg@2x.png')
        }
    });
});

$(function(){
    $('#header nav').on('click',function(){
        $('#header').removeClass('hambset');
    });
});