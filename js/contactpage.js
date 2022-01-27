$(function() {
	$('body').fadeIn(800); 
});
let keep = false
let contacttopimgHeight = document.getElementById("contacttopimg").offsetHeight
jQuery(window).on('scroll', function () {
    if (!keep){
    if (contacttopimgHeight < jQuery(this).scrollTop()) {
        jQuery('#header ul a').addClass('change-color');
        jQuery('#hambicon img').attr('src','../common/img/hambblack@2x.png');
    } else {
        jQuery('#header ul a').removeClass('change-color');
        jQuery('#hambicon img').attr('src','../common/img/hambwhite@2x.png');
    }
}
});

let $contactpagetop = $('.ScrollTop');
$(window).on('scroll', function () {
    contacttopimgHeight = document.getElementById("contacttopimg").offsetHeight
    if ($(this).scrollTop() > contacttopimgHeight) {
        $contactpagetop.addClass('isActive');
    } else {
        $contactpagetop.removeClass('isActive');
    }
});

$(function(){
    $('#hambicon').on('click',function(){
        keep = !keep
        if($('#header').hasClass('hambset')){
            $('#header').removeClass('hambset');
            $('#hambicon img').attr('src','../common/img/hambwhite@2x.png');
        }else{
            $('#header').addClass('hambset');
            $('#hambicon img').attr('src','../common/img/closewhiteimg@2x.png');
        }
    });
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