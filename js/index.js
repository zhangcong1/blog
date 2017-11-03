$(function () {

    //banner
    /*let next=0;
    let t=setInterval(fn,2000);
    function fn() {
        next++;
        if (next==$(".leftBox>li").length){
            next=0;
        }
        $(".leftBox>li").eq(next).prevAll().fadeOut("slow").addBack().eq(next).fadeIn("slow");
    }
    $(window).blur(function () {
        clearInterval(t);
    })
    $(window).focus(function () {
        t=setInterval(fn,2000);
    })
    let now1,next1=0
    let t1=setInterval(fn1,2000);
    function fn1() {
        next1++;
        $(".rightBox").animate({translateY:"-50%"});
    }*/


    $('.shutter').shutter({
        shutterW: 960, // 容器宽度
        shutterH: 358, // 容器高度
        isAutoPlay: true, // 是否自动播放
        playInterval: 3000, // 自动播放时间
        curDisplay: 3, // 当前显示页
        fullPage: false // 是否全屏展示
    });
})