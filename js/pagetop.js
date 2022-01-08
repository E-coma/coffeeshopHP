$(".JS_VegasItem").vegas({ // スライドショーにしたい要素指定
    slides: [
        { src: "common/img/top-img1.jpg" }, // 背景画像1枚目
        { src: "common/img/top-img2.jpg" }, // 背景画像2枚目
        { src: "common/img/top-img3.jpg" } // 背景画像3枚目
    ]
});

jQuery(window).on('scroll', function () {
    if (700 < jQuery(this).scrollTop()) {
        jQuery('#header ul a').addClass('change-color');
    } else {
        jQuery('#header ul a').removeClass('change-color');
    }
});