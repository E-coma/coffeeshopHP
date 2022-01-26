let contacttopimgHeight = document.getElementById("contacttopimg").offsetHeight
jQuery(window).on('scroll', function () {
    if (contacttopimgHeight < jQuery(this).scrollTop()) {
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
            $('#hambicon img').attr('src','../common/img/hambwhite@2x.png')
        }else{
            $('#header').addClass('hambset');
            $('#hambicon img').attr('src','../common/img/closewhiteimg@2x.png')
        }
    });
});


let $contactpagetop = $('.ScrollTop');

$(window).on('scroll', function () {
    if ($(this).scrollTop() < contacttopimgHeight) {
        $contactpagetop.removeClass('isActive');
    } else {
        $contactgetop.addClass('isActive');
    }
});

$(function(){
    $('#header nav').on('click',function(){
        $('#header').removeClass('hambset');
    });
});