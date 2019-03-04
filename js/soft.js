$(document).ready(function () {


    // 顶部nav 
    $(window).scroll(function () {
        if ($(window).scrollTop() == 0) {
            // $(".soft_top_tab").css("top", "65px");
            // $(".soft_banner").css("top", "0px");

        } else {
            $(".soft_top_tab").css("top", "0px");
        }


    });


})
$(document).ready(function () {
    $("#tabs ul li").hover(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $('#tabs_content .soft_lesson_content').eq(index).fadeIn(10).siblings('#tabs_content .soft_lesson_content').hide();
    });
    $("#open_four .soft_open_qi").hover(function () {
        $(this).addClass("active animated pulse").siblings().removeClass("active animated pulse");
    });
    $("#soft_act1 li").click(function () {
        $(this).addClass("active animated pulse").siblings().removeClass("active animated pulse");
        $("#soft_act2 li").removeClass("active animated pulse");

    });
    $("#soft_act2 li").click(function () {
        $(this).addClass("active animated pulse").siblings().removeClass("active animated pulse");
        $("#soft_act1 li").removeClass("active animated pulse");

    })

    $("#open_four button").click(function () {
        var index = $(this).index();

        $.ajax({
            type: "post",
            dataType: "json",
            url: 'https://api.csst.com.cn/index.php?m=survey&c=code&a=index',
            data: {

            },
            success: function () {
                for (let index = 0; index < $(".soft_open_qi ").length; index++) {
                    const element = array[index];

                }
            },
            fail: function () {
                return false;
            }


        })
    })
    // 点击黑色幕布隐藏弹出框
    $(function () {
        $("#open_four button").click(function (e) {
            e.stopPropagation(); //阻止事件向上冒泡
            $(".soft_alert_box").stop().addClass("active");
            $(".soft_alert_content").stop().addClass("active");
            $(document).one("click", function () { //对document绑定一个影藏Div方法

                $(".soft_alert_box").stop().removeClass("active");
                $(".soft_alert_content").stop().removeClass("active");
            });
            $(".soft_alert_content ").click(function (e) {
                e.stopPropagation();
            });
        });
    });
    // 

    $("#soft_send_code").click(function () {
        $.ajax({
            type: 'post',
            dataType: 'json',
            async: 'ture',
            url: 'http://192.168.60.175:666/activity/enroll/commit',
            data: {
                number: $("#soft_phonenum").val(),
                act_token: 'wD8VlzHoUt'
            },
            success: function () {


            },
            error: function () {
                return false;
            }
        })
    })
    $("#soft_sumbit_btn").click(function () {
        $.ajax({
            type: 'post',
            dataType: 'json',
            async: 'ture',
            url: 'http://192.168.60.175:666/activity/enroll/send_data',
            data: {
                number: $("#soft_phonenum").val(),
                code: $("#soft_code").val(),
                name: $("#soft_name").val(),
                company_name: $("#soft_company").val(),
                act_token: 'wD8VlzHoUt'
            },
            success: function () {


            },
            error: function () {
                return false;
            }
        })
    })



    $.ajax({

        type: "post",
        dataType: "json",
        async: true,
        url: 'http://192.168.60.175:666/activity/enroll/page',
        data: {
            "act_token": "afuxnsd524d"
        },
        success: function (event1) {
            console.log(event1.data.length)
            for (var i = 0; i < event1.data.length; i++) {
                console.log(event1.data[i].activity_content);
                console.log($(".soft_open_qi").eq(i).find("li.soft_name span:eq(2)"));
                $(".soft_open_qi").eq(i).find("li.soft_content1 span:eq(0)").text(event1.data[i].activity_content.title1);
                $(".soft_open_qi").eq(i).find("li.soft_content1 span:eq(1)").text(event1.data[i].activity_content.content1);
                $(".soft_open_qi").eq(i).find("li.soft_content2 span:eq(0)").text(event1.data[i].activity_content.title2);
                $(".soft_open_qi").eq(i).find("li.soft_content2 span:eq(1)").text(event1.data[i].activity_content.content2);
                $(".soft_open_qi").eq(i).find("li.soft_content3 span:eq(0)").text(event1.data[i].activity_content.title3);
                $(".soft_open_qi").eq(i).find("li.soft_content3 span:eq(1)").text(event1.data[i].activity_content.content3);
                $(".soft_open_qi").eq(i).find("li.soft_content4 span:eq(0)").text(event1.data[i].activity_content.title4);
                $(".soft_open_qi").eq(i).find("li.soft_content4 span:eq(1)").text(event1.data[i].activity_content.content4);
            }

        },
        error: function () {
            return false;
        }

    })

})
$(document).ready(function () {

    $("#soft_test_act .soft_ad_content").hover(function () {
        $(".soft_ad_content").removeClass("active animated pulse");
        $(this).addClass("active animated pulse");
    });
})
// 六个栏目
$(document).ready(function () {
    $("#soft_top_tab li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    $("#soft_team_area>div").hover(function () {
        $(this).addClass("active animated pulse").siblings().removeClass("active animated pulse");
    });
    $("#soft_act_area span").hover(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();

        $(".soft_act_tab").eq(index).addClass("move-in").siblings().removeClass("move-in");
        setTimeout(function () {
            $(".soft_act_tab").eq(index).addClass("active").siblings().removeClass("active"), 300
        })
        clearTimeout();
    })
    // 模拟测试
    $("#soft_test_btn").click(function () {
        window.location.href = "www.baidu.com";
    })
})
// 鼠标滚轮
$(document).ready(function () {

    $(window).on('mousewheel', function (event) {

        //上下滚动时让鼠标垂直移动
        // var newTop = $(this).position().top - event.deltaY + "px";
        // $(this).css("top", newTop);
        //左右滚动时让鼠标水平移动
        // var newLeft = $(this).position().left + event.deltaX + "px";
        // $(this).css("left", newLeft);
        if (event.deltaY == -1) {
            $(".soft_top_tab ").addClass("hide1").removeClass("active default");
        }
        if (event.deltaY == 1) {
            $(".soft_top_tab ").addClass("active").removeClass("hide1 default");
        }
    });
    var ol = $("#soft_top_tab")[0];
    var olLiArr = ol.children;
    var floor = $(".soft_floor");

    var timer = null,
        leader = 0,
        target = 0;

    for (var i = 0; i < floor.length; i++) {
        olLiArr[i].index = i;
        olLiArr[i].addEventListener("click", function () {

            target = floor[this.index].offsetTop - 50;
            clearInterval(timer);
            timer = setInterval(function () {
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader += step;
                window.scrollTo(0, leader);
                if (Math.abs(target - leader) <= Math.abs(step)) {
                    window.scrollTo(0, target);
                    clearInterval(timer);
                }
            }, 30);
        });
    }

    //leader的赋值要依靠页面滚动事件，检测被卷去的顶部；
    window.onscorll = function () {
        leader = scroll().top;
    }

    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop,
            left: window.pageXOffset || document.documentElement.scrollLeft
        };
    }
})