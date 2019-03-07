// // 获取url以及数据的 array
var address_data = new Array(["a", 2, "s"])
// 获取token转化为cookie

function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
}


function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
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
})
var act_num = null;
// 点击黑色幕布隐藏弹出框
// $(function () {
//     $("#open_four button").click(function (e) {
//         e.stopPropagation(); //阻止事件向上冒泡
//         $(".soft_alert_box").stop().addClass("active");
//         $(".soft_alert_content").stop().addClass("active");
//         $(document).one("click", function () { //对document绑定一个影藏Div方法

//             $(".soft_alert_box").stop().removeClass("active");
//             $(".soft_alert_content").stop().removeClass("active");
//         });
//         $(".soft_alert_content ").click(function (e) {
//             e.stopPropagation();
//         });
//     });
// });
// 
$(document).ready(function () {
    $("#open_four .soft_join_btn").click(function () {
        console.log('sd');
        var index = $(this).parent().parent().parent().index();
        console.log(index);
        act_num = index;
        console.log(act_num);
    })
    $("#soft_send_code").click(function () {
        $.ajax({
            type: 'post',
            dataType: 'json',
            async: 'ture',
            url: 'http://192.168.60.175:666/activity/enroll/commit',
            data: {
                number: $("#recipient-phonenum").val(),
                act_token: getCookie("page_token" + act_num + "")
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
                number: $("#recipient-phonenum").val(),
                code: $("#message-code").val(),
                name: $("#recipient-name").val(),
                company_name: $("#message-text").val(),
                act_token: getCookie("page_token" + act_num + "")
            },
            success: function (event2) {


            },
            error: function () {
                return false;
            }
        })
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
            setCookie("page_token", event1)
            $(".soft_open_qi").eq(i).find("li.soft_content1 span:eq(0)").text(event1.data[i].activity_content.title1);
            $(".soft_open_qi").eq(i).find("li.soft_content1 span:eq(1)").text(event1.data[i].activity_content.content1);
            $(".soft_open_qi").eq(i).find("li.soft_content2 span:eq(0)").text(event1.data[i].activity_content.title2);
            $(".soft_open_qi").eq(i).find("li.soft_content2 span:eq(1)").text(event1.data[i].activity_content.content2);
            $(".soft_open_qi").eq(i).find("li.soft_content3 span:eq(0)").text(event1.data[i].activity_content.title3);
            $(".soft_open_qi").eq(i).find("li.soft_content3 span:eq(1)").text(event1.data[i].activity_content.content3);
            $(".soft_open_qi").eq(i).find("li.soft_content4 span:eq(0)").text(event1.data[i].activity_content.title4);
            $(".soft_open_qi").eq(i).find("li.soft_content4 span:eq(1)").text(event1.data[i].activity_content.content4);
            $(".soft_open_qi").eq(i).find(".soft_set_info b").text(event1.data[i].max_number - event1.data[i].sign_up_number);
            $(".soft_open_qi").eq(i).find(".soft_qi_num").text(event1.data[i].activity_content.head_name);
            setCookie("page_token" + [i] + "", Array(event1.data[i].page_token));
        }

    },
    error: function () {
        return false;
    }

})
// 六个栏目
$(document).ready(function () {
    $("#soft_top_tab li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })

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
})
$(document).ready(function () {
    $(".question_btn").click(function () {
        console.log("dianji")
        $(this).parent().next().removeClass("soft_none")
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
/** 
 * @author xuesong
 * @time  2019-03-05 
 */
function getDocumentTop() {
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}
/** 
 * @author xuesong
 * @time  2019-03-05 
 */
//可视窗口高度
function getWindowHeight() {

    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;

}
/** 
 * @author xuesong
 * @time  2019-03-05 
 */
//滚动条滚动高度
function getScrollHeight() {
    var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}
window.onscroll = function () {
    //监听事件内容
    if (getScrollHeight() == getWindowHeight() + getDocumentTop()) {
        //当滚动条到底时,这里是触发内容
        if (!localStorage.user_token) {
            var password = Date.parse(new Date()).toString() + Math.ceil(Math.random() * 10000).toString();
            //加密成md5
            var passwd = $.md5(password);
            localStorage.setItem("user_token", passwd)
        }
        //get请求,用于统计页面访问数
        $.get("http://192.168.60.175:666/activity/enroll/browse&user_token=" + localStorage.user_token + "&act_token=afuxnsd524d", function (data, status) {
            // alert("数据：" + data + "\n状态：" + status);
        });
    }
}