if (JSON.parse(localStorage.getItem("users"))) {
    $(".tr>li").eq(0).find("a").html("已登录").css({
        "color": "red"
    }).click(function() {
        return false;
    }).end().next().find("a").html("退出登录").click(function() {
        localStorage.removeItem("users")
        location.reload();
        return false;
    })
}