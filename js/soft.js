$(document).ready(function () {


    //需求1：给ul中的li和ol中的li指定对应的颜色；
    var ol = $("#soft_top_tab")[0];
    console.log(ol);
    var olLiArr = ol.children;
    var floor = $(".soft_floor");
    console.log(olLiArr);
    console.log(floor);

    var timer = null, leader = 0, target = 0;

    //for循环上色
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
    // 顶部nav 
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() == 0) {
            $(".soft_top_tab").css("top", "65px");
            $(".soft_banner").css("top", "0px");

        } else {
            $(".soft_top_tab").css("top", "0px");
        }


    });


})
$(document).ready(function () {
    $("#tabs ul li").click(function () {
        console.log('nice');
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $('#tabs_content .soft_lesson_content').eq(index).fadeIn(200).siblings('#tabs_content .soft_lesson_content').hide();
    });
    $("#open_four .soft_open_qi").click(function () {
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
        console.log(index);
        $.ajax({
            type: "post",
            dataType: "json",
            url: 'https://api.csst.com.cn/index.php?m=survey&c=code&a=index',
            data: {
                'token': index
            }


        })
    })
})
$(document).ready(function () {

    $("#soft_test_act div").click(function () {
        $(this).addClass("active animated pulse").siblings().removeClass("active animated pulse");
    });
})
// 六个栏目
$(document).ready(function () {
    $("#soft_top_tab li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    $("#soft_team_area>div").click(function () {
        $(this).addClass("active animated pulse").siblings().removeClass("active animated pulse");
    });
    $("#soft_act_area span").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        console.log(index);
        console.log($(".soft_act_tab").eq(index));

        $(".soft_act_tab").eq(index).addClass("move-in").siblings().removeClass("move-in");
        setTimeout(function () {
            $(".soft_act_tab").eq(index).addClass("active").siblings().removeClass("active"), 300
        })
    }
    )
})