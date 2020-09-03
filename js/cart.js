$(function() {

    function show() {

        $.ajax({
            url: "json/car.json",
            type: "GET",
            success: function(res) {
                function shuaxin() {
                    // console.log(res)
                    var str = `

                <tr>

            <td><input type="checkbox" id="checkAll" >全选</td>

            <td></td>
            <td>商品名称</td>
            <td>价格</td>
            <td></td>
            <td>数量</td>
            <td></td>
            <td>总计</td>
            <td>操作</td>
        </tr>`;

                    var ss = JSON.parse(localStorage.getItem("gg"));

                    for (let j = 0; j < res.length; j++) {
                        for (let i = 0; i < ss.length; i++) {

                            if (res[j]["id"] == ss[i]["id"]) {
                                str += `
               <tr class="${ss[i]["id"]}">
                   <td><input type="checkbox" class="danxuankuang"></td>
                   <td><img src="${res[j].imgurl}" alt=""></td>
                   <td>${res[j].tit1}</td>
                   <td class="price">${res[j].price}"元"</td>
                   <td class="jian" data-id="${ss[i]["id"]}">- </td>
                   <td ><input type="text" value="${ss[i]["num"]}"class="shuliang"></td>
                    <td class="jia" data-id="${ss[i]["id"]}"> + </td>
                   <td class="dangezj">${ parseInt(res[j].price)*ss[i]["num"]+"元"}</td>
                   <td class="del" data-id="${ss[i]["id"]}" >删除</td>
               </tr >`
                            }
                        }
                    }
                    $("#tabble").html(str)

                }
                shuaxin();
                var danxuankuang = document.querySelectorAll(".danxuankuang")
                for (let i = 0; i < danxuankuang.length; i++) {
                    danxuankuang[i].onclick = () => {
                        let cont = 0;
                        for (let j = 0; j < danxuankuang.length; j++) {
                            if (danxuankuang[j].checked) {
                                cont++;
                            }
                        }

                        if (cont == danxuankuang.length) {
                            $("#checkAll").prop("checked", true)
                        } else {
                            $("#checkAll").prop("checked", false)
                        }

                        qian();
                    }
                }

                function qian() {

                    let num1 = 0;
                    var shop = JSON.parse(localStorage.getItem("gg"));
                    for (let i = 0; i < shop.length; i++) {
                        if (danxuankuang[i].checked) {
                            num1 += parseInt($(".dangezj").eq(i).text());
                        }
                        $(".zongjia").text("总价:" + num1 + "元");
                    }

                }
                $("#checkAll").click(function() {

                    if ($("#checkAll").prop("checked")) {
                        $(".danxuankuang").prop("checked", true);
                    } else {
                        $(".danxuankuang").prop("checked", false);
                    }
                    qian();


                })
                var shuliang = document.querySelectorAll(".shuliang")
                var jia = document.querySelectorAll(".jia")
                var jian = document.querySelectorAll(".jian")
                var del = document.querySelectorAll(".del")
                for (let i = 0; i < jia.length; i++) {
                    jia[i].onclick = () => {
                        let jjj = jia[i].getAttribute("data-id");

                        var shop = JSON.parse(localStorage.getItem("gg"));;


                        for (var arr in shop) {
                            if (shop[arr]["id"] == jjj) {
                                // console.log(shop[arr]["id"] == p);
                                shop[arr]["num"] = (shop[arr]["num"] - 0) + 1;



                            }
                            localStorage.setItem("gg", JSON.stringify(shop));


                        }
                        show();
                    }
                    jian[i].onclick = () => {

                        if (shuliang[i].value <= 0) {
                            shuliang[i].value = 1;
                        }
                        let jjj = jian[i].getAttribute("data-id");
                        var shop = JSON.parse(localStorage.getItem("gg"));;
                        for (var arr in shop) {
                            if (shop[arr]["id"] == jjj) {
                                // console.log(shop[arr]["id"] == p);
                                shop[arr]["num"] = (shop[arr]["num"] - 0) - 1;
                            }
                            localStorage.setItem("gg", JSON.stringify(shop));
                        }
                        show();
                    }
                    shuliang[i].onchange = () => {
                        if (shuliang[i].value <= 0) {
                            shuliang[i].value = 1;
                        }

                        var shop = JSON.parse(localStorage.getItem("gg"));;
                        let jjj = jia[i].getAttribute("data-id");

                        for (var arr in shop) {
                            if (shop[arr]["id"] == jjj) {
                                // console.log(shop[arr]["id"] == p);
                                shop[arr]["num"] = shuliang[i].value;

                            }


                            localStorage.setItem("gg", JSON.stringify(shop));


                        }
                        show();
                    }
                    del[i].onclick = () => {
                        var shop = JSON.parse(localStorage.getItem("gg"));
                        let jjj = del[i].getAttribute("data-id");
                        for (var arr in shop) {
                            if (shop[arr]["id"] == jjj) {
                                var jjjj = shop.indexOf(shop[arr]);
                                shop.splice(jjjj, 1);

                            }


                            localStorage.setItem("gg", JSON.stringify(shop));


                        }
                        show();
                    }




                }


            }
        })
    }
    show();
})