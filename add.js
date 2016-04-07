function initslider() {
    var c = ++initslidern;
    $("#datasdick").append('<div class="onesdickcls" id="onesdick' + c + '"><div class="slider-wrapper"><input type="text" class="js-callback ginput' + c + '" /><div id="js-display-callback" class="display-box"><input type="text" name="" id="gnum' + c + '" class="gnum" /></div><div class="deldatacls" id="deldata' + c + '">GB&nbsp;&nbsp;&nbsp;&nbsp;<select class="disktype" style="width:100px;height:25px;" onchange="fly_get_total()"><option value="0.36443954549679" selected>vHDD-SATA</option><option value="1.26574470954863">vHDD-SAS</option><option value="4.31935382133471">vHDD-SSD</option></select>&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onclick="deloneslide(' + c + ')">删除</a></div></div></div>');
    $(".ginput" + c);
    var b = document.querySelector(".ginput" + c);
    var a = new Powerange(b, {
        callback: function() {
            $("#gnum" + c).val(b.value);
            fly_get_total()
        },
        start: 200,
        min: 10,
        max: 2000
    });
    $("#gnum" + c).keyup(function() {
        a.setStart($("#gnum" + c).val());
        fly_get_total()
    });
    $("#onesdick" + c).css({
        opacity: 0
    }).animate({
        opacity: 1
    })
}
function deloneslide(b) {
    var a = $("#onesdick" + b).fadeOut(function() {
        a.remove();
        fly_get_total()
    })
}
var initslidern = 0;
function fly_init_select(a) {
    $("." + a + " a").each(function() {
        var b = $(this);
        b.click(function() {
            $("." + a + " a.current").removeClass("current");
            b.addClass("current");
            $("#" + a).val(b.attr("data-value"));
            fly_get_total()
        })
    });
    $("#" + a).val($("." + a + " a.current").attr("data-value"))
}
fly_init_select("cpugroup");
fly_init_select("neicun");
fly_init_select("ipgroup");
fly_init_select("timegroup");
function fly_init_sys() {
    var c = {
        "Windows": ["Windows 2008 标准版（32位）", "Windows 2008 标准版（64位）", "Windows 2008 R2 标准版（64位）", "Windows Server 2012（64位）", "Windows Server 2012 R2（64位）"],
        "CentOS": ["CentOS 6.4(64位)"],
        "Ubuntu": ["Ubuntu 12.04（64位）"]
    };
    var b = {
        "Windows": [40, 50, 60, 80, 100],
        "Linux": [20, 30, 40, 50, 100]
    };
    for (var a in c) {
        $("#select_sys").append('<option value="' + a + '">' + a + "</option>")
    }
    function d(f) {
        $("#select_sys_val").html("");
        for (var e in c[f]) {
            $("#select_sys_val").append('<option value="' + c[f][e] + '">' + c[f][e] + "</option>")
        }
        if (f != "Windows") {
            f = "Linux"
        }
        $(".sysdisk").html("");
        for (var e in b[f]) {
            $(".sysdisk").append('<a hidefocus="" class="unit ' + (e == 0 ? "current": "") + '" data-value="' + b[f][e] + '" target="_self" href="javascript:void(0);">' + b[f][e] + "G</a>")
        }
        fly_init_select("sysdisk")
    }
    d("Windows");
    $("#select_sys").change(function() {
        d($(this).val());
        fly_get_total()
    }).find("option[value='Ubuntu']").attr("selected", true);
    $('#select_sys').change();
}
fly_init_sys();
$(".uc-reduce").click(function() {
    var a = $("#flynum"),
    b = parseInt(a.val()) - 1;
    if (b >= 1) {
        a.val(b)
    }
    fly_get_total()
});
$(".uc-add").click(function() {
    var a = $("#flynum"),
    b = parseInt(a.val()) + 1;
    if (b >= 1) {
        a.val(b)
    }
    fly_get_total()
});
$("#flynum").val("1");
//获取价格
function fly_get_total() {
    var a = parseInt($("#flynum").val()) * parseInt($("#timegroup").val()) * (parseInt($("#cpugroup").val()) * 136.04 + parseInt($("#neicun").val()) * 46.42 + parseInt($("#sysdisk").val()) * parseFloat($("#systype").val()) + (function() {
        var b = 0;
        $("#datasdick .onesdickcls").each(function() {
            b += parseInt($(this).find(".gnum").val()) * parseFloat($(this).find(".disktype").val())
        });
        return b
    } ()) + parseInt($("#ipgroup").val()) * 50 + (($("#select_sys").val() == "Windows") ? 240 : 0));
    $(".money").html(parseInt(a))
}
///////////////
fly_get_total();
function fly_get_txt() {
    fly_get_total();
    var a = "CPU:" + $("#cpugroup").val() + "核" + "&nbsp;\n" + "内存:" + $("#neicun").val() + "G" + "&nbsp;\n" + "带宽: 共享50MBGP" + "&nbsp;\n" + "操作系统:" + $("#select_sys").val() + "(" + $("#select_sys_val").val() + ")&nbsp;\n" + "系统盘:" + $("#sysdisk").val() + "G&nbsp;" + $("#systype option[selected]").text() + "&nbsp;\n" + "数据盘:" + (function() {
        var b = new Array();
        $("#datasdick .onesdickcls").each(function() {
            b.push($(this).find(".gnum").val() + "G&nbsp;" + $(this).find(".disktype option[selected]").text())
        });
        return b.join(",")
    } ()) + "&nbsp;\n" + "IP:" + $("#ipgroup").val() + "个" + "&nbsp;\n" + "购买时长:" + $("#timegroup").val() + "个月" + "&nbsp;\n" + "购买数量:" + $("#flynum").val() + "台" + "&nbsp;\n";
    return a
}
function fly_set_txt() {
    $("#flygoods").prepend('<div class="onegood"><pre>' + fly_get_txt() + '</pre><div><a href="javascript:void(0)" style="float:right;text-decoration: none;" onclick="$(this).parent().parent().remove();">删除</a>¥' + $(".money").html() + "</div></div>")
}
function fly_submit_txt(a) {
    buymsn(fly_get_txt() + "¥" + $(".money").html())
}
function fly_submit_all(a) {
    if ($(".onegood").length == 0) {
        alert("清单内没有主机！");
        return
    }
    buymsn(function() {
        var b = new Array();
        $(".onegood").each(function() {
            b.push($(this).text().replace("删除", ""))
        });
        return b.join("<br />")
    } ())
}
function buymsn(a) {
    var b = $("body").append('<div class="sharebyemail"><div class="mask opacity"></div>' + '<div class="email-friend" style="top:600px">' + '<p class="share-email"><span id="sharetitle">' + t("请填写您的联系方式，我们会与您取得联系") + '</span><span class="close"><a href="javascript:void(0)" onclick="sbeclose(this)"><img src="images/close-email.png" width="10" height="10" /></a></span></p>' + '<div class="share-email">' + t("姓名") + ":<br />" + '<input type="text" class="text-email"  name="dummy0" id="fly_name" ></div>' + '<div class="share-email">' + t("电话") + ":<br />" + '<input type="text" class="text-email"  name="dummy0" id="fly_tel" ></div>' + '<div class="share-email">' + t("邮箱") + ":<br />" + '<input type="text" class="text-email"  name="dummy0" id="fly_email" ></div>' + '<div class="share-email">' + t("备注") + ":<br />" + '<textarea name="dummy2" id="fly_content" rows="5" cols="20" class="to-email"></textarea></div>' + '<div class="share-email"><input type="button" class="button-contact" id="share" value="' + t("提交订单") + '">' + ' <input type="button" class="button-contact" value="' + t("取消") + '" onclick="sbeclose(this)"></div>' + "</div></div>").find(".sharebyemail");
    b.find("#share").click(function() {
        var c = this;
        if ($("#fly_name").val() == "" || $("#fly_tel").val() == "" || $("#fly_email").val() == "") {
            alert("请填写正确信息，我们会与您取得联系");
            return
        }
        $(c).attr("disabled", true);
        $(c).attr("value", "提交中，请稍候...");
        $.post("?task=send", {
            "txt": a + "<br /><br />联系方式：" + $("#fly_name").val() + "&nbsp;" + $("#fly_tel").val() + "&nbsp;" + $("#fly_email").val() + "<br/>备注：" + $("#fly_content").val(),
        },
        function(d) {
            if (d == "ok") {
                alert("订单已发送，稍后我们会与您取得联系！");
                sbeclose(c)
            } else {
                alert(t("提交失败，请联系管理员！"))
            }
            $(c).attr("disabled", false);
            $(c).attr("value", "提交订单")
        })
    })
};
function test_add_fnc() {
    if ($("#test_name").val() == "" || $("#test_tel").val() == "" || $("#test_email").val() == "") {
        alert("请填写正确信息，我们会与您取得联系");
        return
    }
    $("#test_msg").html("信息提交中,请稍候...");
    $.post("?task=send", {
        txt: "申请试用:<br /><br />联系方式：" + $("#test_name").val() + "&nbsp;" + $("#test_tel").val() + "&nbsp;" + $("#test_email").val() + "<br/>公司：" + $("#test_com").val()
    },
    function(a) {
        if (a == "ok") {
            alert("试用申请已发送，稍后我们会与您取得联系！")
        } else {
            alert(t("提交失败，请联系管理员！"))
        }
        function CheckMail(str) {
            var result = str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
            if (result == null) return false;
            return true;
        }
        if (CheckMail($('#test_email').val()) == false) {
            alert('请填写正确油箱信息!');
            return;
        }
        $("#test_msg").html("");
        document.getElementById("test_form").reset()
    })
};