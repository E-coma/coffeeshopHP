$(function() {
	$('body').fadeIn(800); 
});

let menutopimgHeight = document.getElementById("menutopimg").offsetHeight
jQuery(window).on('scroll', function () {
    if (menutopimgHeight < jQuery(this).scrollTop()) {
        jQuery('#header ul a').addClass('change-color');
        jQuery('#hambicon img').attr('src','../common/img/hambblack@2x.png');
    } else {
        jQuery('#header ul a').removeClass('change-color');
        jQuery('#hambicon img').attr('src','../common/img/hambwhite@2x.png');
    }
});


$(function(){
    $('#hambicon').on('click',function(){
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
    if ($(this).scrollTop() < menutopimgHeight) {
        $menupagetop.removeClass('isActive');
    } else {
        $menupagetop.addClass('isActive');
    }
});

$(function(){
    $('#header nav').on('click',function(){
        $('#header').removeClass('hambset');
    });
});

$(function(){
    $('.ScrollTop img').on('click',function(){
        $('#header').removeClass('hambset');
    });
});