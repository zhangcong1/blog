$(function () {
    $(".send").click(function () {
        $(this).css({background:"#4cae4c"}).html("发送成功");
        let phone = $(".phone").val();
        $.ajax({
            url:"index.php?m=admin&f=login&a=checkPhone",
            data:{"phone":phone},
            type:"post",
            success:function (e) {
                if (e){
                    let i=60;
                    let t=setInterval(fn,1000);
                    function fn() {
                        i--;
                        if (i==0){
                            $(".send").css({background:"#3194d0"}).html("发送验证码");
                            clearInterval(t);
                            return ;
                        }
                        $(".send").css({background:"#4cae4c"}).html(`${i}s后重新发送`);
                    }
                }else {
                    alert("发送失败")
                }
            }
        })
    })
})