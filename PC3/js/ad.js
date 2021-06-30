// 카테고리 선택 시
$(".category_in>ul>li").click(function() {
    let sel_category = $(this).index();

    $(".ad_list>div").eq(sel_category + 1).stop(true, true).animate({"left":"0"}, 600);
});


// 각 카테고리 top의 이전(<) 버튼 클릭 시
$(".ad_prev").click(function() {
    $(this).parent().parent().stop(true, true).animate({"left":"1000px"}, 600, function() {
        // 카테고리 비표시 시 열린 아코디언/컨텐츠 초기화
        $(".ad_content>ul").css({"top":"20px"});
    });
});


// 아코디언 메뉴 업/다운
// 빠르게 클릭 시 컨텐츠 밖으로 스크롤 되는 것을 막기 위한 범위 설정
$(".adcontent_up").click(function() {
    if($(this).next().position().top <= -580) {
        $(this).next().stop(true, true).animate({"top":"+=600px"}, 600);
    }
});
$(".adcontent_down").click(function() {
    let content_count = $(this).prev().find(">li").length;
    let scroll_limit = (parseInt((content_count + 8) / 9) - 1) * (-600) + 20 + 600;
    if($(this).prev().position().top >= scroll_limit) {
        $(this).prev().stop(true, true).animate({"top":"-=600px"}, 600);
    }
});


// 영상 표시 모달
let video_list = [`<iframe width="944" height="531" src="https://www.youtube.com/embed/sfcI-hv-xVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/OOKO7wWk2dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/kyucOEXfVx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/FE7s7Mi61-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/7iGoH6ZUGOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/7D9ebVsAd8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/dgjU7X5gYxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/6_VgPbtn6fI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/sjqXr7A0KFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/UCpoeCdSEac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/88qK2KGK3Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/8eCSeWKFBVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`];
let radio_list = [`<iframe width="944" height="531" src="https://www.ekdp.com/upload/ad/%EB%B9%84%ED%83%80500%EC%96%B4%EB%A8%B8%EB%8B%88%EB%9D%BC%EB%94%94%EC%98%A4%EC%86%8C%EC%9E%AC%EC%B5%9C%EC%A2%85.mp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.ekdp.com/upload/ad/%EC%9C%A0%EB%A6%AC(1).mp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.ekdp.com/PRcenter/pop_radio.asp?page=1&c=c2&s=12#none" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.ekdp.com/upload/ad/%ED%9A%A8%EB%A6%AC_%EC%B9%9C%EA%B5%AC%ED%8E%B8(1).mp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.ekdp.com/upload/ad/%ED%9A%A8%EB%A6%AC_%ED%9A%8C%EC%82%AC%ED%8E%B8(0).mp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.ekdp.com/upload/ad/%ED%9A%A8%EB%A6%AC(0).mp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.ekdp.com/upload/ad/%EB%B9%84_%EB%8B%AC%EB%A6%AC%EA%B8%B0%ED%8E%B8(0).mp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.ekdp.com/upload/ad/%EB%B9%84_%EC%98%A4%EB%A6%AC%EB%B0%9C%ED%8E%B8(1).mp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.ekdp.com/upload/ad/%EB%B9%84_%EC%97%AC%EB%A6%84%ED%8E%B8(1).mp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.ekdp.com/upload/ad/%EB%B9%84_%EB%AC%B4%EC%B9%B4%ED%8E%98%EC%9D%B8%ED%8E%B8(1).mp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.ekdp.com/upload/ad/%EB%B9%84_%EA%B2%A8%EC%9A%B8%ED%8E%B8.mp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.ekdp.com/upload/ad/%EB%B9%84(1).mp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`];
let pr_video = [`<iframe width="944" height="531" src="https://www.youtube.com/embed/n5sju2ygiMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/-Dup4ldC2bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/4G0jBrndHaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/wGsQSr2NX0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/GxqWIWI1ZFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/vNt84kgRiBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/-T5dRw84b9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe width="944" height="531" src="https://www.youtube.com/embed/yIKExkdJ37Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`];

    // video 12개
let vid_open = $(".ad_video>.ad_content>ul>li");
vid_open.children().click(function() {
    let vid_open_idx = $(this).parent().index();
    
    if(vid_open_idx < 12) {
        $("#modal_frame").html(video_list[vid_open_idx]);
        $("#modal").show();
    
        $("html").css({overflowY:"hidden"});
    }
});
    // radio 12개
let rad_open = $(".ad_radio>.ad_content>ul>li");
rad_open.children().click(function() {
let rad_open_idx = $(this).parent().index();

if(rad_open_idx < 12) {
    $("#modal_frame").html(radio_list[rad_open_idx]);
    $("#modal").show();

    $("html").css({overflowY:"hidden"});
}
});
    // pr
$(".ad_pr>ul>li").children().click(function() {
    let pr_idx = $(this).parent().index();
    $("#modal_frame").html(pr_video[pr_idx]);
    $("#modal").show();

    $("html").css({overflowY:"hidden"});
});
    // close modal
$("#modal").click(function() {
    $("#modal").hide();
    $("#modal_frame").html("");
    $("html").css({"overflow-y":"scroll"});
});