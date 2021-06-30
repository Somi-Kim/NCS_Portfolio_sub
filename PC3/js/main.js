// visual
visualCount = $(".visual_text li").length;
showIdx = 0;
nextIdx = 0;
function changeVisual(){
    nextIdx++; 

    if(nextIdx == visualCount) {nextIdx = 0;}

    // bg change
    $(".visual_img li").eq(showIdx).removeClass("showImg");
    $(".visual_img li").eq(nextIdx).addClass("showImg");
    // text change
    $(".visual_text li").eq(showIdx).removeClass("showText");
    $(".visual_text li").eq(nextIdx).addClass("showText");
    // btn change
    $(".visual_btn>span").eq(showIdx).removeClass("active");
    $(".visual_btn>span").eq(nextIdx).addClass("active");		
    showIdx = nextIdx;
}

timerVisual = setInterval(changeVisual, 5000);

$(".visual_btn>span").click(function(){
    clearInterval(timerVisual);

    nextIdx = $(this).index(); 

    // bg change
    $(".visual_img li").eq(showIdx).removeClass("showImg");
    $(".visual_img li").eq(nextIdx).addClass("showImg");
    // text change
    $(".visual_text li").eq(showIdx).removeClass("showText");
    $(".visual_text li").eq(nextIdx).addClass("showText");
    // btn change
    $(".visual_btn>span").eq(showIdx).removeClass("active");
    $(".visual_btn>span").eq(nextIdx).addClass("active");		
    showIdx = nextIdx;

    timerVisual = setInterval(changeVisual, 5000);
});


// main menu & sub menu
$(".menu>li").hover(function() {
    $(this).stop(true, true).animate({"color":"#333", "background-color":"rgba(255, 255, 255, 1.0)"}, 600, "easeOutExpo");
    $(this).find("span").stop(true, true).animate({"opacity":"1"}, 600, "easeOutExpo");
    if($(this).index() == 0) {
        $(this).find(">ul").stop(true, true).slideDown();
    }
}, function() {
    $(this).find(">ul").stop(true, true).hide();
    $(this).stop(true, true).animate({"color":"#ccc", "background-color":"rgba(0, 0, 0, 0.5)"}, 600, "easeOutExpo");
    $(this).find("span").stop(true, true).animate({"opacity":"0"}, 600, "easeOutExpo");
});