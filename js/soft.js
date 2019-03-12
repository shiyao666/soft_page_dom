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
// 判断模态框是否显示

//页面渲染函数
function start_fuc() {
    $.ajax({

        type: "post",
        dataType: "json",
        async: true,
        url: 'https://erp.csst.com.cn/activity/enroll/page',
        data: {
            "act_token": "afuxnsd524d"
        },
        success: function (event1) {
            // console.log(event1.data.length)
            for (var i = 0; i < event1.data.length; i++) {
                // console.log(event1.data[i].activity_content);
                // console.log($(".soft_open_qi").eq(i).find("li.soft_name span:eq(2)"));
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
}
$(document).ready(function () {
    // 顶部tab 固定栏目切换
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
// 获取act_token所在索引定位
var act_num = null;


$(document).ready(function () {
    // 模态框以外空白处点击事件
    if ($('.modal').on('hide.bs.modal', function () {

            $("div").remove("#error_alert");
            $("div").remove("#success_alert");
            $(".soft_get_code").html("获取验证码");
            $(".soft_get_code").removeClass;

        }));
    // 点击期数报名区域
    $("#open_four .soft_join_btn").click(function () {
        $(".soft_get_code").removeClass;
        $(".soft_get_code").html("获取验证码");
        $("#recipient-name").val('');
        $("#recipient-phonenum").val('');
        $('#message-text').val('');
        $("#message-code").val('');
        $(".soft_get_code").html("获取验证码");
        var index = $(this).parent().parent().parent().index();
        // console.log(index);
        act_num = index;
        // console.log(act_num);
        $(".modal-body").append('<div class="alert alert-danger error_btn alert-dismissible fade in soft_none" id="error_alert" role="alert" "><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button><h4>警告</h4><p id="error_info"></p></div><div id="success_alert" class="alert success_btn alert-success soft_none"><a href="#" class="close" data-dismiss="alert">&times;</a><h4>提示</h4><p id="success_info"></p> </div>');

    })
    // 获取验证码
    // 模态框关闭
    $("#close_btns").click(function () {
        $("div").remove("#error_alert");
        $("div").remove("#success_alert");
    })
    $("#soft_send_code").click(function click_two() {
        // 判断是否含有成功失败模态框
        if ($("#error_alert").length <= 0) {
            $(".modal-body").append('<div class="alert alert-danger error_btn alert-dismissible fade in soft_none" id="error_alert" role="alert" "><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button><h4>警告</h4><p id="error_info"></p></div>');
        }
        if ($("#success_alert").length <= 0) {
            $(".modal-body").append('<div id="success_alert" class="alert success_btn alert-success soft_none"><a href="#" class="close" data-dismiss="alert">&times;</a><h4>提示</h4><p id="success_info"></p> </div>');
        }
        // 获取手机号输入框
        var phone = $("#recipient-phonenum").val();
        // 正则验证
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
        // 手机号/验证码验证
        if (phone == '') {
            $("#error_alert").removeClass("soft_none");
            $("#error_info").html("手机号码不能为空！");
        } else if (phone.length != 11) {
            $("#error_alert").removeClass("soft_none");
            $("#error_info").html("手机号长度错误");
        } else if (!myreg.test(phone)) {
            $("#error_alert").removeClass("soft_none");
            $("#error_info").html("请输入有效的手机号码！");
        } else {
            $("#error_alert").addClass("soft_none");
            $("#success_alert").removeClass("soft_none");
            $.ajax({
                type: 'post',
                dataType: 'json',
                async: 'ture',
                url: 'https://erp.csst.com.cn/activity/enroll/commit',
                data: {
                    number: $("#recipient-phonenum").val(),
                    act_token: getCookie("page_token" + act_num + "")
                },
                success: function (even_code) {
                    if (even_code.error == 0) {
                        $("#success_info").html(even_code.msg);
                        var time1 = 60;
                        $(".soft_get_code").removeClass;
                        $(".soft_get_code").html("(" + time1 + "秒)");
                        $("#soft_send_code").unbind();
                        setTime = setInterval(
                            function () {
                                if (time1 > 0) {
                                    time1--;
                                    $(".soft_get_code").html("(" + time1 + "秒)");
                                    $(".soft_get_code").unbind("click", click_two);
                                } else {
                                    $(".soft_get_code").bind("click", click_two);
                                    $(".soft_get_code").text("获取验证码");
                                    clearInterval(setTime);
                                }
                            }, 1000);
                        // 点击其他部分清楚定时器和验证码数字
                        // $('.modal').on('hide.bs.modal', function () {
                        //     ab();
                        //     $(".soft_get_code").text("获取验证码");
                        //     clearInterval(setTime);
                        // });
                        // 点击关闭按钮清楚定时器和验证码数字
                        // $("#close_btns").click(function () {
                        //     ab(false);
                        // });
                    } else {
                        $("#error_alert").removeClass("soft_none");
                        $("#error_info").html(even_code.msg);
                    }
                },
                error: function () {
                    return false;
                }
            })
        }
    })

    // 点击报名按钮事件
    $("#soft_sumbit_btn").click(function () {
        $("#success_alert").addClass("soft_none");
        var phone2 = $("#recipient-phonenum").val();
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if ($("#recipient-name").val().length == 0) {
            $("#error_alert").removeClass("soft_none");
            $("#error_info").html("姓名不能为空");
        } else if (/[@#\$%\^&\*]+/gi.test($("#recipient-name").val())) {
            $("#error_alert").removeClass("soft_none");
            $("#error_info").html("姓名不合法");
        } else if ($("#recipient-phonenum").val().length == 0) {
            $("#error_alert").removeClass("soft_none");
            $("#error_info").html("手机号不能为空");
        } else if (phone2 == '') {
            $("#error_alert").removeClass("soft_none");
            $("#error_info").html("手机号码不能为空！");
        } else if (phone2.length != 11) {
            $("#error_alert").removeClass("soft_none");
            $("#error_info").html("手机号长度错误");
        } else if (!myreg.test(phone2)) {
            $("#error_alert").removeClass("soft_none");
            $("#error_info").html("请输入有效的手机号码！");
        } else if ($("#message-code").val().length == 0) {
            $("#error_alert").removeClass("soft_none");
            $("#error_info").html("验证码不能为空");
        }
        //  else if ($("#message-text").val().length == 0) {
        //     alert("公司名称不能为空");
        //  }
        else {
            $.ajax({
                type: 'post',
                dataType: 'json',
                async: 'ture',
                url: 'https://erp.csst.com.cn/activity/enroll/send_data',
                data: {
                    number: $("#recipient-phonenum").val(),
                    code: $("#message-code").val(),
                    name: $("#recipient-name").val(),
                    company_name: $("#message-text").val(),
                    act_token: getCookie("page_token" + act_num + "")
                },
                success: function (event2) {
                    $("#alert_error_box").alert(event2.msg);
                    if (event2.error == 0 || event2.code == 5007) {
                        $("#error_alert").addClass("soft_none");
                        $("#success_alert").removeClass("soft_none");
                        $("#success_info").html(event2.msg);
                        setInterval(function () {
                            $(".modal-backdrop").remove();
                            $("#exampleModal").hide();
                            location.reload();
                        }, 3200);
                        // 清除定时器
                        clearInterval();
                    } else {
                        $("#error_alert").removeClass("soft_none");
                        $("#error_info").html(event2.msg);
                    }
                },
                error: function () {
                    return false;
                }
            })
        }
    })

})
// 初始化页面事件
$(document).ready(start_fuc());
// 六个栏目
$(document).ready(function () {
    $(".alert").hide();
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
// 
// 查看答案区域
$(document).ready(function () {
    $(".question_btn").click(function () {
        $(this).parent().next().removeClass("soft_none")
    })
})
// 滚动条监听
//判断滚动方向
var scroll_way = 0;
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > scroll_way) {
        $(".soft_top_tab ").addClass("hide1").removeClass("active default");
    } else {
        $(".soft_top_tab ").addClass("active").removeClass("hide1 default");
    }
    scroll_way = scrollTop;
});

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
    scroll($(window).height());
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
// window.onscroll = function () {
//     //监听事件内容
//     if (getScrollHeight() == getWindowHeight() + getDocumentTop()) {
//         //当滚动条到底时,这里是触发内容
//         if (!localStorage.user_token) {
//             var password = Date.parse(new Date()).toString() + Math.ceil(Math.random() * 10000).toString();
//             //加密成md5
//             var passwd = $.md5(password);
//             localStorage.setItem("user_token", passwd);
//         }
//         //get请求,用于统计页面访问数
//         $.get("https://erp.csst.com.cn/activity/enroll/browse&user_token=" + localStorage.user_token + "&act_token=afuxnsd524d", function (data, status) {
//             // alert("数据：" + data + "\n状态：" + status);
//         });
//     }
// }

// 页面浏览次数监听
$(document).ready(function () {
    var password = Date.parse(new Date()).toString() + Math.ceil(Math.random() * 10000).toString();
    //加密成md5
    var passwd = $.md5(password);
    localStorage.setItem("user_token", passwd)
    $.get("https://erp.csst.com.cn/activity/enroll/browse&user_token=" + localStorage.user_token + "&act_token=afuxnsd524d", function (data, status) {
        // alert("数据：" + data + "\n状态：" + status);
    });
    console.log($(window).scrollTop());
    console.log($(".soft_floor").eq(3).height());
    console.log($(window).height());
});
// 滚动到开班计划区域 刷新事件
$(window).scroll(function () {
    if ($(window).scrollTop() == 2585 || $(window).scrollTop() == 2600) {
        if (location.href.indexOf("#reloaded") == -1) {
            location.href = location.href + "#reloaded";
            location.reload();
        }
    }
});