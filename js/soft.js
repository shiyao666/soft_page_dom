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
            target = floor[this.index].offsetTop;
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
        $('#tabs_content .soft_lesson_content').eq(index).show(200).siblings('#tabs_content .soft_lesson_content').hide();
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
    }
    )
})
// 轮播图
// 获取页面对应元素

$(document).ready(function () {
    var left = $("#left");
    var right = $("#right");
    var ul = $("#soft_ul");
    var screen = $("#screen");
    console.log($("#soft_ul li").length);
    var index2 = 0;
    console.log(left);
    left.click(function () {
        var clone1 = $("#soft_ul li:eq(0)").clone(true);
        $('#soft_ul').append(clone1);
        $('#soft_ul li:eq(0)').remove();
        console.log($('#soft_ul li:eq(' + index2 + ')'));
        index2++;
        // $("#soft_ul").css("left", -(index2 * screen.width() / 4) + 'px');
        console.log(ul);

        // if (index2 == 3) {
        //     index2 = 0;
        //     $("#soft_ul").css("left", 0 + 'px');
        // }
    })
    right.click(function () {

    })
})
