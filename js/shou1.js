var i = 0;
$(".pic li").eq(i).fadeIn();
var timer = setInterval(function() {
    i++;
    if (i == $(".pic li").length) {
        i = 0;
    };
    $("#main").css({
        "background": "url(img/" + (i + 1) + ".jpg)",
        "background-size": "cover"
    });
    $(".pic li").eq(i).fadeIn().siblings().fadeOut();

    $(".nav li").eq(i).addClass("select").siblings().removeClass("select");
}, 3000);
$(".jian").hide();
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            $(".jian").fadeIn(200);
        } else {
            $(".jian").fadeOut(200);
        }
    });
    $(".jian").click(function() {
        $('body,html').animate({
                scrollTop: 0
            },
            500);
        return false;
    });

    $("#chong").hover(function() {
        $("#chong>span").attr("class", 'iconfont icon-jiantoushang');
    }, function() {
        $("#chong>span").attr("class", 'iconfont icon-jiantouxia');
    });
    $(".chong1").hover(function() {
        $(this).find("p").find("span").attr("class", 'iconfont icon-paixujiantoushang');
    }, function() {
        $(this).find("p").find("span").attr("class", 'iconfont icon-paixujiantouxia');
    });
    var aBtns = $(".nl1").find("b");
    var aDivs = $(".nl1").find("div");

    aBtns.hover(function() {
        aBtns.attr("class", '');
        aDivs.css("display", 'none');

        $(this).attr("class", 'hover');
        aDivs.eq($(this).index()).css("display", 'block');
    }, function() { $(".nl1").find("div").css("display", 'none') });
    aDivs.eq(0).hover(function() { aDivs.eq(0).css("display", 'block') }, function() { aDivs.eq(0).css("display", "none") });
    aDivs.eq(1).hover(function() { aDivs.eq(1).css("display", 'block') }, function() { aDivs.eq(1).css("display", "none") })
    aBtns.eq(0).hover(function() {
        $(this).find("span").attr("class", 'iconfont icon-shuangjiantoushang');
    }, function() {
        $(this).find("span").attr("class", 'iconfont icon-shuangjiantouxia');
    });
    aBtns.eq(1).hover(function() {
        $(this).find("span").attr("class", 'iconfont icon-jiantoushang');
    }, function() {
        $(this).find("span").attr("class", 'iconfont icon-jiantouxia');
    });
    var aBtn = $(".ullist").find("li");
    var aDiv = $(".bigbox").children("div");

    aBtn.hover(function() {
        aBtn.removeClass('hover');
        aDiv.css("display", 'none');

        $(this).addClass('hover');
        aDiv.eq($(this).index()).css("display", 'block');
    });
});