$(".ctab1").click(function() {
    $("#google_map").attr({"src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.7873264125337!2d127.01185011565366!3d37.48934477981235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca16b45a05adf%3A0x31d36f4c3e0d6cce!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iOq1rCDshJzstIjrj5kg7ISc7LSI7KSR7JWZ66GcIDg1!5e0!3m2!1sko!2skr!4v1619570435994!5m2!1sko!2skr"});
    $(".minfo>h2").text("광동제약 본사");
    $(".madress").text("서울특별시 서초구 서초중앙로 85 가산빌딩");
    $(".mbus").text("간선(350, N61), 지선(3012), 마을(서초21), 공항(6016)");
    $(".mtel").text("02) 6006-7777");
    $(".msubway").text("3호선(교대), 2호선(교대), 3호선(남부터미널), 2호선(서초)");

    $(this).css({"z-index":"500", "border-bottom":"40px solid #e24226"});
    $(".ctab2").css({"z-index":"200", "border-bottom":"40px solid #888"});
    $(".ctab3").css({"z-index":"100", "border-bottom":"40px solid #777"});
});
$(".ctab2").click(function() {
    $("#google_map").attr({"src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12738.849178184304!2d127.062774240964!3d37.04050567839483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b3bdfd7ba62a3%3A0x28db9954a85f5462!2z6rSR64-Z7KCc7JW9!5e0!3m2!1sko!2skr!4v1619570687756!5m2!1sko!2skr"});$(".madress").text("서울특별시 서초구 서초중앙로 85 가산빌딩");
    $(".minfo>h2").text("광동제약 송탄공장");
    $(".madress").text("경기도 평택시 경기대로 1081 (장당동) 광동제약㈜");
    $(".mbus").text(" - ");
    $(".mtel").text("031-8030-1777");
    $(".msubway").text(" - ");
    
    $(this).css({"z-index":"500", "border-bottom":"40px solid #e24226"});
    $(".ctab1").css({"z-index":"300", "border-bottom":"40px solid #999"});
    $(".ctab3").css({"z-index":"100", "border-bottom":"40px solid #777"});
});
$(".ctab3").click(function() {
    $("#google_map").attr({"src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.9021491404646!2d127.079974715643!3d37.03597937990076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b3bd52137b973%3A0x8453a676a015b82c!2z6rSR64-Z7KCc7JW9IOy8gOydtOyngOyXoO2UvOqzteyepQ!5e0!3m2!1sko!2skr!4v1619570949623!5m2!1sko!2skr"});$(".madress").text("서울특별시 서초구 서초중앙로 85 가산빌딩");
    $(".minfo>h2").text("광동제약 GMP공장");
    $(".madress").text("경기도 평택시 산단로 114 광동제약㈜");
    $(".mbus").text(" - ");
    $(".mtel").text("031) 612-1111");
    $(".msubway").text(" - ");
    
    $(this).css({"z-index":"500", "border-bottom":"40px solid #e24226"});
    $(".ctab1").css({"z-index":"300", "border-bottom":"40px solid #999"});
    $(".ctab2").css({"z-index":"200", "border-bottom":"40px solid #888"});
});