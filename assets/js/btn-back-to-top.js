
// Back to top
var backTop;

$(window).scroll(function() {
    if($(document).scrollTop() > 250) {
        setVisibleBtn("visible")
    }
    else if($(document).scrollTop() < 2500) {
        setVisibleBtn("hidden")
    }
});

function initBackTop() {
    backTop = $(".btn-back_to_top");
    backTop.click(function() {
        $('html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
}
function setVisibleBtn(status) {
    if(!backTop?.length){
        initBackTop();
    }
    if(status) {
        backTop.css('visibility', status);
    } else {
        backTop.css('visibility', status);
    }
}

$(document).ready(function() {
    initBackTop();
});
