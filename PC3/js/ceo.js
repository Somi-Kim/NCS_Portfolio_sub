// 스크롤에 따른 내용 표시
$(".ceo1").animate({opacity:1}, 600);
$(".ceo2").animate({opacity:1}, 600);
$(window).scroll(function() {    
    
    if($(this).scrollTop() > 450 && $(this).scrollTop() < 750) {
        $(".ceo3").animate({opacity:1}, 600);
    } else if($(this).scrollTop() >= 750) {
        $(".ceo4").animate({opacity:1}, 600);
    }
});