// footer
let is_opened = false;
$(".fbtn").click(function() {
    $(".fpriv").stop(true, true).slideToggle();
    $(".flink").stop(true, true).slideToggle();
    if(is_opened) {
        $(this).text("메 뉴 열 기");
        is_opened = false;
    } else {
        $(this).text("메 뉴 닫 기");
        is_opened = true;
    }
})

$(".fsns ul li").hover(function() {
    $(this).find("span").show();
}, function() {
    $(this).find("span").hide();
});