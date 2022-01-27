$(function() {
	$('body').fadeIn(800); 
});
let keep = false
let menutopimgHeight = document.getElementById("menutopimg").offsetHeight
jQuery(window).on('scroll', function () {
    if (!keep){
    if (menutopimgHeight < jQuery(this).scrollTop()) {
        jQuery('#header ul a').addClass('change-color');
        jQuery('#hambicon img').attr('src','../common/img/hambblack@2x.png');
    } else {
        jQuery('#header ul a').removeClass('change-color');
        jQuery('#hambicon img').attr('src','../common/img/hambwhite@2x.png');
    }
}
});


$(function(){
    $('#hambicon').on('click',function(){
        keep = !keep
        if($('#header').hasClass('hambset')){
            $('#header').removeClass('hambset');
            $('#hambicon img').attr('src','../common/img/hambwhite@2x.png');
            $('html').css('overflow','scroll');
        }else{
            $('#header').addClass('hambset');
            $('#hambicon img').attr('src','../common/img/closewhiteimg@2x.png');
        }
    });
});


let $menupagetop = $('.ScrollTop');

$(window).on('scroll', function () {
    menutopimgHeight = document.getElementById("menutopimg").offsetHeight
    if ($(this).scrollTop() > menutopimgHeight) {
        $menupagetop.addClass('isActive');
    } else {
        $menupagetop.removeClass('isActive');
    }
});

$(function(){
    $('#header nav').on('click',function(){
        keep = false
        $('#header').removeClass('hambset');
    });
});

$(function(){
    $('.ScrollTop img').on('click',function(){
        keep = false
        $('#header').removeClass('hambset');
    });
});