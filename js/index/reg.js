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
    $("form").validate({
        rules:{
            uname:{
                required:true,
                minlength:2,
                remote:{
                    url:"index.php?m=index&f=login&a=checkUser",
                    type:"post",
                    data:{
                        function(){
                            return $("#user").val()
                        }
                    },
                }
            },
            upass:{
                required:true,
                minlength:6,
                equalTo:"#upass1"
            },
            upass1:{
                required:true,
                equalTo:"#upass"
            },
            phone:{
                required:true,
            }
        },
        messages:{
            uname:{
                required:"用户名不能为空",
                minlength:"最少两位",
                remote:"用户名已存在"
            },
            upass:{
                required:"密码不能为空",
                minlength:"最少6位",
                equalTo:"两次密码必须一致"
            },
            upass1:{
                required:"必须验证密码",
                equalTo:"两次密码必须一致"
            },
            phone:{
                required:"必须进行手机验证",
            }
        }
    })
})