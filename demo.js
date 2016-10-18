window.onload=function() {
    function getId(myid) {
        return document.getElementById(myid)
    }
    function getClass(myclass) {
        return document.getElementsByClassName(myclass)
    }
    function getName(myname) {
        return document.getElementsByTagName(myname)
    }
    var my = {
        "n": -110,
        "index":0,
        "click":function () {
            getId("button-more").onclick = function(){
                if (my.index == 0) {
                    getId("menu").className = "";
                    my.SlidingBottom();
                    getId("more-img").src = "iconfont-x.png";
                } else {
                    getId("menu").className = "menu";
                    my.Slidingtop();
                    getId("more-img").src = "iconfont-gengduo.png";
                }
            }
        },
        "SlidingBottom": function () {
            if (my.n < 0) {
                my.n += 1;
                getId("more").style.top = my.n + "%";
                setTimeout(function () {
                        my.SlidingBottom();
                    }
                    , 1);
            } else {
                return my.index = 1;
            }
        },
        "Slidingtop":function(){
            if (my.n > -140) {
                my.n -= 1;
                getId("more").style.top = my.n + "%";
                setTimeout(function () {
                        my.Slidingtop();
                    }
                    , 1);
            } else {
                return my.index = 0;
            }
        },
        "appoclick":function(){
            for (var i = 0; i < getClass("button-appo").length; i++) {
                getClass("button-appo")[i].onclick = function () {
                    getId("shopping").style.display = "block";
                }
            }
        },
        "away": function(){
            getId("away").onclick = function () {
                getId("shopping").style.display = "none";
            }
        },
        "assign": function(){
            getId("assign").onclick = function () {
                alert("虽然你点击了我，但是我真的无能为力，还是返回看看别的吧")
            }
        },
        "input": function () {
            getId("input").onclick = function () {
                if (this.value == "请输入手机号") {
                    this.value =" "
                }
            }
        }
    };
my.click();//点击出现下拉栏
my.appoclick();//点击出现手机预约
my.away();//取消按钮
my.assign();//确认按钮
my.input();//输入框 获取焦点取消默认文字
};


