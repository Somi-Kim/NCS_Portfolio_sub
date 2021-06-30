$(".mission").animate({opacity:1}, 600);
$(window).scroll(function() {
    if($(this).scrollTop() > 250 && $(this).scrollTop() < 650) {
        $(".vision").animate({opacity:1}, 600);
    } else if($(this).scrollTop() >= 650 && $(this).scrollTop() < 1350) {
        $(".fstrat").animate({opacity:1}, 600);

        let strat_len = $(".fstrat li").length;
        for(i = 0; i < strat_len; i++) {
            $(".fstrat li").eq(i).css({"margin-left":75 * i + "px"});
        }
    } else if($(this).scrollTop() >= 1350 && $(this).scrollTop() < 2000) {
        $(".ability").animate({opacity:1}, 600);
    } else if($(this).scrollTop() >= 2000) {
        $(".fpoint").animate({opacity:1}, 600);

        let point_len = $(".fpoint li").length;
        for(i = 0; i < point_len; i++) {
            $(".fpoint li").eq(i).css({"margin-left":75 * (point_len - 1 - i) + "px"});
        }
    }
});

// mission hover
$(".mpic_area>div").hover(function() {
    $(this).find("img").css({"transform":"rotateY(90deg)"});
    if($(this).index() == 0) {
        $(this).find("img").stop(true, true).attr({"src":"image/mission1_hover.png"});
    } else {
        $(this).find("img").stop(true, true).attr({"src":"image/mission2_hover.png"});
    }
    $(this).find("img").stop(true, true).css({"transform":"rotateY(180deg)"});
    $(this).stop(true, true).animate({"color":"#e24226"}, 600);
}, function() {
    $(this).find("img").stop(true, true).css({"transform":"rotateY(90deg)"});
    if($(this).index() == 0) {
        $(this).find("img").stop(true, true).attr({"src":"image/mission1.png"});
    } else {
        $(this).find("img").stop(true, true).attr({"src":"image/mission2.png"});
    }
    $(this).find("img").stop(true, true).css({"transform":"rotateY(0deg)"});
    $(this).stop(true, true).animate({"color":"#fff"}, 600 );
});
