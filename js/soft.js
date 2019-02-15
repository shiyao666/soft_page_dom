$(document).ready(function () {
    $("#tabs ul li").click(function () {
        console.log('nice');
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $('#tabs_content .soft_lesson_content').eq(index).show(200).siblings('#tabs_content .soft_lesson_content').hide();
    });
    $("#open_four .soft_open_qi").click(function () {
        $(this).addClass("active animated pulse").siblings().removeClass("active animated pulse");
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

    $("#soft_team_area>div").click(function () {
        $(this).addClass("active animated pulse").siblings().removeClass("active animated pulse");
    });
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
