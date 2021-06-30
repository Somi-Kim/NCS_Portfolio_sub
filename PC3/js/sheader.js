// top button
$("#top_btn").click(function() {
    $("html").animate({scrollTop:0}, 300);
});

let tb_show = false;

$(window).scroll(function() {    
    if($(this).scrollTop() > 250 && !tb_show) {
        $("#top_btn").stop(true, true).animate({"opacity":"1"}, 300);
        $("#top_btn").css({width:"100px", height:"100px"});
        tb_show = true;
    } else if($(this).scrollTop() <= 250 && tb_show) {
        $("#top_btn").stop(true, true).animate({"opacity":"0"}, 300, function() {
            $("#top_btn").css({width:"0px", height:"0px"});
        });
        tb_show = false;
    }
});

// main menu
$(".menu>ul>li").hover(function() {
    $(this).find("span").stop(true, true).animate({width:"180px"}, 600, "easeOutExpo");
    $(this).stop(true, true).animate({"color":"#fff"}, 600, "easeOutExpo");

    // show sub menu
    if($(this).attr("class") == "introduce") {
        $(".ismenu>ul").stop(true, true).slideDown(500);
    }
}, function() {
    $(this).find("span").stop(true, true).animate({width:"0px"}, 600, "easeOutExpo");
    $(this).stop(true, true).animate({"color":"#000"}, 600, "easeOutExpo");

    // hide sub menu
    $(".ismenu>ul").stop(true, true).slideUp(500);
});

$(".ismenu>ul>li").hover(function() {
    // sub menu hover시에도 메인메뉴 hover/sub menu show 유지
    $(".introduce").find("span").stop(true, false).css({width:"180px"});
    $(".introduce").stop(true, false).animate({"color":"#fff"}, 600, "easeOutExpo");
    $(".ismenu>ul").stop(true, false).slideDown(500);
    $(this).css({"color":"#f00", "text-decoration":"underline"});
}, function() {
    $(".introduce").find("span").stop(true, false).animate({width:"0px"}, 600, "easeOutExpo");
    $(".introduce").stop(true, false).animate({"color":"#000"}, 600, "easeOutExpo");
    $(".ismenu>ul").stop(true, false).slideUp(500);
    $(this).css({"color":"#000", "text-decoration":"none"});
});