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