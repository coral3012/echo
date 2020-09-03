$(function() {

    sc_car();

    $.ajax({
        url: "json/car.json",
        type: "GET",
        success: function(res) {
            var html = "";
            for (var i = 0; i < res.length; i++) {
                html += `<li class="goods_item">
    <div class = "goods_pic">
    <a href="detail.html?id=${res[i].id}"><img src = "${res[i].imgurl}"></div></a>
    <div class="goods_title">
        <p>${res[i].tit1}</p></div>
    <div class="goods_price"><p>￥${res[i].price}</p></div>
    
    </li > `;

            }
            $(".goods_box ul").html(html);
        }
    })

    //给购物车按钮添加事件
    //页面控件非常多，非常容易叠加，很容易造成事件冒泡
    $(".sc_btn").click(
        function() {
            if (localStorage.getItem("gg")) {
                gg = JSON.parse(localStorage.getItem("gg"));
            } else {
                gg = [];
            }

            var jjj = $(".sc_btn").get(0).getAttribute("id");
            var shop = JSON.parse(localStorage.getItem("gg"));

            // console.log(shop)
            var flag = false;
            for (var arr in shop) {

                if (shop[arr]["id"] == jjj) {
                    shop[arr]["num"] = (shop[arr]["num"] - 0) + (oinput[0].value - 0);
                    flag = true;
                }



            }
            if (!flag) {
                shop.push({
                    "id": p,
                    "num": oinput[0].value

                })
            }
            console.log(gg)
            localStorage.setItem("gg", JSON.stringify(gg))

        })



    //购物车数字
    function sc_car() {
        var shop = JSON.parse(localStorage.getItem("gg"));
        var jj = 0;
        for (var arr in shop) {
            jj += (shop[arr]["num"] - 0);
        }
        $(".sc_num").html(jj);
        // return;


    }





})