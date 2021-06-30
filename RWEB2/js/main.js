$(".subscribe_email").focus(function() {
    if($(window).width() < 1200) {
        $(".subscribe_label").css({"font-size": "10px", "margin": "5px 0 0 10px"});
    } else {
        $(".subscribe_label").css({"font-size": "10px", "margin": "3px 0 0 10px"});
    }
});
$(".subscribe_email").focusout(function() {
    if($(window).width() < 1200) {
        $(".subscribe_label").css({"font-size": "20px", "margin": "15px 0 0 10px"});
    } else {
        $(".subscribe_label").css({"font-size": "16px", "margin": "12px 0 0 10px"});
    }
});