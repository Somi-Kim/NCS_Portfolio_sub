// init tab menu
let oldtIdx = 0;
let tmenuColor = ["#e24226", "#b89968", "#a7a9ac", "#221e1f"];
$(".item_in>ul>li").first().css({"color":"#fff"});

$(".item_in>ul>li").click(function() {
    let tmenuIdx = $(this).index();

    $(this).parent().find("li").eq(oldtIdx).removeClass("iselected");
    $(this).parent().find("li").eq(tmenuIdx).addClass("iselected");

    $(this).parent().find("li").eq(oldtIdx).animate({"color":"#333"}, 600);
    $(this).parent().find("li").eq(tmenuIdx).animate({"color":"#fff"}, 600);
    $(".ihovers").stop(true, true).animate({"left":8 + 193 * tmenuIdx, "background-color":tmenuColor[tmenuIdx]}, 600);

    $(".item_in>div").eq(oldtIdx).css({"display":"none"});
    $(".item_in>div").eq(tmenuIdx).css({"display":"block"});

    oldtIdx = tmenuIdx;
});

// filter 선택 여부 저장 배열 정의 및 초기화 
let afilterSel = []; for(i = 0; i < $(".afilter_list>ul>li").length; i++) {afilterSel.push(false);}
let bfilterSel = []; for(i = 0; i < $(".bfilter_list>ul>li").length; i++) {bfilterSel.push(false);}
let cfilterSel = []; for(i = 0; i < $(".cfilter_list>ul>li").length; i++) {cfilterSel.push(false);}
let dfilterSel = []; for(i = 0; i < $(".dfilter_list>ul>li").length; i++) {dfilterSel.push(false);}

    // 카테고리 선택 박스 선택시 카테고리 show
$(".filterjs>div").click(function() {
    $(this).next().find(">ul").slideToggle();
});
    // 각 탭별 카테고리
$(".afilter_list>ul>li").click(function() {
    let afilterIdx = $(this).index();
    if (!afilterSel[afilterIdx]) { //unselected->selected
        $(this).css({"color":"#fff","background":"#e24226"});
        afilterSel[afilterIdx] = true;
    } else { //selected->unselected
        $(this).css({"color":"#333","background":"#fff"});
        afilterSel[afilterIdx] = false;
    }
    
    aselCount = afilterSel.filter(element => element == true).length;
    if(aselCount > 0) {
        $(".afilter_in>span").last().text(aselCount);
        $(".afilter_in>span").last().css({"display":"inline-block"});
    } else {
        $(".afilter_in>span").last().text("");
        $(".afilter_in>span").last().css({"display":"none"});
    }
});
$(".bfilter_list>ul>li").click(function() {
    let bfilterIdx = $(this).index();
    if (!bfilterSel[bfilterIdx]) { //unselected->selected
        $(this).css({"color":"#fff","background":"#b89968"});
        bfilterSel[bfilterIdx] = true;
    } else { //selected->unselected
        $(this).css({"color":"#333","background":"#fff"});
        bfilterSel[bfilterIdx] = false;
    }
    
    bselCount = bfilterSel.filter(element => element == true).length;
    if(bselCount > 0) {
        $(".bfilter_in>span").last().text(bselCount);
        $(".bfilter_in>span").last().css({"display":"inline-block"});
    } else {
        $(".bfilter_in>span").last().text("");
        $(".bfilter_in>span").last().css({"display":"none"});
    }
});
$(".cfilter_list>ul>li").click(function() {
    let cfilterIdx = $(this).index();
    if (!cfilterSel[cfilterIdx]) { //unselected->selected
        $(this).css({"color":"#fff","background":"#a7a9ac"});
        cfilterSel[cfilterIdx] = true;
    } else { //selected->unselected
        $(this).css({"color":"#333","background":"#fff"});
        cfilterSel[cfilterIdx] = false;
    }
    
    cselCount = cfilterSel.filter(element => element == true).length;
    if(cselCount > 0) {
        $(".cfilter_in>span").last().text(cselCount);
        $(".cfilter_in>span").last().css({"display":"inline-block"});
    } else {
        $(".cfilter_in>span").last().text("");
        $(".cfilter_in>span").last().css({"display":"none"});
    }
});
$(".dfilter_list>ul>li").click(function() {
    let dfilterIdx = $(this).index();
    if (!dfilterSel[dfilterIdx]) { //unselected->selected
        $(this).css({"color":"#fff","background":"#221e1f"});
        dfilterSel[dfilterIdx] = true;
    } else { //selected->unselected
        $(this).css({"color":"#333","background":"#fff"});
        dfilterSel[dfilterIdx] = false;
    }
    
    dselCount = dfilterSel.filter(element => element == true).length;
    if(dselCount > 0) {
        $(".dfilter_in>span").last().text(dselCount);
        $(".dfilter_in>span").last().css({"display":"inline-block"});
    } else {
        $(".dfilter_in>span").last().text("");
        $(".dfilter_in>span").last().css({"display":"none"});
    }
});

// item list hover (show semi detail)
$(".irow>li").hover(function() {
    $(this).find("div:nth-child(1)").stop(true, true).animate({"opacity":"0"}, 300);
    $(this).find("div:nth-child(2)").stop(true, true).animate({"opacity":"1"}, 300);
}, function() {
    $(this).find("div:nth-child(1)").stop(true, true).animate({"opacity":"1"}, 300);
    $(this).find("div:nth-child(2)").stop(true, true).animate({"opacity":"0"}, 300);
});