// 右固定のナビゲーション色変更タイミング
let topimgHeight = document.getElementById("menutopimg").offsetHeight
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
