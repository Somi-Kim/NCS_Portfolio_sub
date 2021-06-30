$(document).ready(function(){

    // top button
    $(".top_btn").hover(function() {
        $(this).find("a img").attr("src","image/top_btn_on.png");
    }, function() {
        $(this).find("a img").attr("src","image/top_btn.png");
    });





    // top menu
    let init = false;
    let old = 0;
    
    $(".topmenu>li").hover(function() {
        $(this).find(">a").css({"color":"#fff"});
        $(this).css({"background":"#1C499E"});

        let val = $(this).index();

        if (val < 6) {
            $(".bg_box").stop().slideDown();

            $(".topmenu>li").eq(old).find("ul").stop(true, true).hide();
            $(".topimg li").eq(old).stop(true, true).hide();
            
            if(init == false){
                $(".topmenu>li").eq(val).find("ul").stop(true, true).show("slow");
                $(".topimg li").eq(val).stop(true, true).show("slow");
            } else {
                $(".topmenu>li").eq(val).find("ul").stop(true, true).show();
                $(".topimg li").eq(val).stop(true, true).show();
            }
            
            old = val;
        }
    }, function() {
        $(".bg_box").stop().slideUp();
        $(this).find("a").css({"color":"#000"});
        $(this).css({"background":"#fff"});
        $(".topmenu>li").find("ul").stop(true, true).hide("100");
        $(".topimg li").stop(true, true).hide("100");
    });
	
    $(".top_nav").hover(function() {
        init = true;
    }, function() {
        init = false;
    });





    // visual slide
    let img_w = $(".visual_img ul li").width();
	let img_n = $(".visual_img ul li").length;
	var oldidx = 0;
	let index = 0;

    $(".visual_img ul li:last").prependTo(".visual_img ul");
    $(".visual_img ul").css({left: -img_w});

    function slideImg(index, m) {
        if(m == 0) {
            $(".visual_img ul").stop(true, true).animate({
                left: "+=" + img_w + "px"}, 
                600, "easeOutCubic", function() {
                    $(".visual_img ul li:last").prependTo(".visual_img ul");
                    $(".visual_img ul").css({left: -img_w});
            });
        } else {
            $(".visual_img ul").stop(true, true).animate({
                left: "-=" + img_w + "px"}, 
                600, "easeOutCubic", function() {
                    $(".visual_img ul li:first").appendTo(".visual_img ul");
                    $(".visual_img ul").css({left: -img_w});
            });
        }
        
        if(oldidx != index) {
            $(".visual_tab li").eq(oldidx).stop(true, true).removeClass("active", 600);
        }
        $(".visual_tab li").eq(index).stop(true, true).addClass("active", 600);
        oldidx = index;
    }

    function slideAuto() {
        index++;
        if(index == img_n) {
            index = 0;
        }
        slideImg(index, 1);
    }

    auto = setInterval(slideAuto, 4000);

    $(".visual_tab li").click(function() {
        index = $(this).index();

        for(i = 1; i <= img_n; i++) {$(".visual_img ul li.i" + i).appendTo(".visual_img ul");}
        $(".visual_img ul li:last").prependTo(".visual_img ul");
        $(".visual_img ul li:last").prependTo(".visual_img ul");
            
        clearInterval(auto);

        for(i = 1; i <= index + 1; i++) {slideImg(index, 1);}

        auto = setInterval(slideAuto, 4000);
    });

	//visual-prev btn
	$(".prev").click(function(){
		clearInterval(auto);

		index--;
		if(index < 0){index = img_n - 1;}
		slideImg(index, 0);

		auto = setInterval(slideAuto, 4000);
	});

	//visual-next btn
	$(".next").click(function(){
		clearInterval(auto);

		index++;	
		if(index >= img_n){index = 0;}
		slideImg(index, 1);

		auto = setInterval(slideAuto, 4000);
	});





    // review button
    $(".review_button").hover(function() {
        // review_img size
        $(this).closest("a").siblings(".review_img").find(">img").animate({margin:"-5% 0 0 -5%", width: "110%", height: "110%"}, 300, "easeOutExpo");
        // review button text
        $(this).css({"height":"45px", "padding-top":"30px"});
        $(this).html("click!");
    }, function() {
        $(this).closest("a").siblings(".review_img").find(">img").animate({margin:0, width: "100%", height: "100%"}, 300, "easeOutExpo");
        // review button text
        $(this).css({"height":"55px", "padding-top":"20px"});
        $(this).html("경험담<br>보기");
    });





    // footer banner slide
    let fimg_w = $(".fbanner_img ul li").width();
    $(".fbanner_img ul li:last").prependTo(".fbanner_img ul");
    $(".fbanner_img ul").css({left: -fimg_w});

    function fslideImg() {
        $(".fbanner_img ul").stop(true, true).animate({
            left: "-=" + fimg_w + "px"}, 
            5000, "linear", function() {
                $(".fbanner_img ul li:first").appendTo(".fbanner_img ul");
                $(".fbanner_img ul").css({left: -fimg_w});
        });
    }

    fslideImg();
    fauto = setInterval(fslideImg, 5000);

});