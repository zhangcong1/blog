$(function () {
    //专题
    $(".menu>li").eq(0).addClass("border").find("a").css("color","#646464");
    $(".menu>li>a").click(function () {
        $(".menu>li").removeClass("border").find("a").css("color","#969696");
        $(this).css("color","#646464").parent().addClass("border");
    })
})