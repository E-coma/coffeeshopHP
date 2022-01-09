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
    if (topimgHeight <jQuery(this).scrollTop()) {
        jQuery('#header ul a').addClass('change-color');
    } else {
        jQuery('#header ul a').removeClass('change-color');
    }
});

// 左のロゴ表示タイミング設定
let $pagetop = $('.ScrollTop');

$(window).on( 'scroll', function () {
  if ( $(this).scrollTop() < topimgHeight) {
    $pagetop.removeClass('isActive');
  } else {
    $pagetop.addClass('isActive');
  }
});

// コンセプトテキスト表示タイミング
// コンテンツごとのマージントップ↓
const contentsMarginTop = 170 
const textMargin = 50
// コンセプトタイトルのパディング↓
let $conceptUp = document.getElementById("concept-title").offsetHeight + contentsMarginTop + textMargin + document.getElementById("concept-text").offsetHeight;
const menuHeigh = document.getElementById("menu").offsetTop
$(window).on( 'scroll', function () {
    if ( $(this).scrollTop() < $conceptUp || $(this).scrollTop() > menuHeigh - contentsMarginTop) {
      $('#concept-text').removeClass('isUp');
    } else {
      $('#concept-text').addClass('isUp');
    }
  });

//   メニューテキスト表示タイミング
const conceptHeight = document.getElementById("concept").offsetHeight
let menu1Up = conceptHeight + contentsMarginTop*2 + textMargin + document.getElementById("coffee-menu").offsetHeight
$(window).on( 'scroll', function () {
    if ( $(this).scrollTop() < menu1Up || $(this).scrollTop() > menu1Up + document.getElementById("sandwich-menu").offsetHeight + document.getElementById("sandwich-menu").offsetHeight + textMargin + contentsMarginTop) {
      $('#menu-text1').removeClass('isUp');
    } else {
      $('#menu-text1').addClass('isUp');
    }
  });

  let menu2Up = menu1Up + textMargin + document.getElementById("sandwich-menu").offsetHeight;
$(window).on( 'scroll', function () {
    if ( $(this).scrollTop() < menu2Up || $(this).scrollTop() > menu2Up + contentsMarginTop + textMargin + document.getElementById("access").offsetHeight) {
      $('#menu-text2').removeClass('isUp');
    } else {
      $('#menu-text2').addClass('isUp');
    }
  });
  let menu3Up = menu2Up + 170*2 + textMargin*2 +  document.getElementById("sandwich-menu").offsetHeight
  $(window).on( 'scroll', function () {
    if ( $(this).scrollTop() < menu3Up || $(this).scrollTop() > menu3Up + 80 + textMargin*2 + document.getElementById("access").offsetHeight ) {
      $('#accesstext').removeClass('isUp');
    } else {
      $('#accesstext').addClass('isUp');
    }
  });

// console.log(document.getElementById("concept-title").offsetHeight);
// console.log(document.getElementById("menu").offsetTop);