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
let conceptMarginTop = 170
let subtitlePadding = 5
let $conceptUp = document.getElementById("concept-title").offsetHeight + conceptMarginTop + subtitlePadding + document.getElementById("concept-text").offsetHeight;

$(window).on( 'scroll', function () {
    if ( $(this).scrollTop() < $conceptUp) {
      $('#concept-text').removeClass('isUp');
    } else {
      $('#concept-text').addClass('isUp');
    }
  });

  
// console.log(document.getElementById("concept-title").offsetHeight);
// console.log(document.getElementById("header-nav").offsetTop);