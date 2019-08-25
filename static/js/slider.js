/**
 * Created by blackeyes on 8/24/19.
 */
/*
 * 不用怀疑，抄的，感谢CSDN 我此刻眼中不一样的互联网世界
 * 《html，幻灯片自动切换代码》https://blog.csdn.net/qq_33845254/article/details/79554671
 */

window.onload = function () {
    var oBox = document.getElementById("ad");

    var aImg = oBox.getElementsByTagName("img");
    var href = oBox.getElementsByTagName("a");
    var info = oBox.getElementsByClassName("ad-info");
    var aDes = info[0].getElementsByTagName("p");
    var aNum = info[0].getElementsByClassName("ad-idx")[0].getElementsByTagName("span");

    var timer = play = null;
    var i = index = 0;
    var bOrder = true;

    //切换按钮
    for (i = 0; i < aNum.length; i++) {
        aNum[i].index = i;
        aNum[i].onmouseover = function () {
            show(this.index)
        }
    }
    //鼠标划过关闭定时器
    oBox.onmouseover = function () {
        clearInterval(play)
    };
    //鼠标离开启动自动播放
    oBox.onmouseout = function () {
        autoPlay()
    };
    //自动播放函数
    function autoPlay() {
        play = setInterval(function () {
                //判断播放顺序
                bOrder ? index++ : index--;
                //正序
                index >= aImg.length && (index = aImg.length - 2, bOrder = false);
                //倒序
                index <= 0 && (index = 0, bOrder = true);
                //调用函数
                show(index)
            },
            5000);
    }

    autoPlay(); //应用
    function show(a) {
        index = a;
        var alpha = 0;

        for (i = 0; i < aNum.length; i++)
            aNum[i].className="";
        aNum[index].className = "active";

        href[0].setAttribute("href", ad.data[index]["callback_url"] );
        des_html_text = "<span><strong>"+ad.data[index]["title"]+"</strong><br>"+ad.data[index]["des"]+"</span></p>";
        aDes[0].innerHTML = des_html_text;

        clearInterval(timer);
        info[0].style.opacity = 0;
        info[0].style.filter = "alpha(opacity=0)";

        aDes[0].style.opacity = 0;
        aDes[0].style.filter = "alpha(opacity=0)";
        for (i = 0; i < aImg.length; i++) {
            aImg[i].style.opacity = 0;
            aImg[i].style.filter = "alpha(opacity=0)";
        }

        timer = setInterval(function () {
                alpha += 2;
                alpha > 100 && (alpha = 100);
                aImg[index].style.opacity = alpha / 100;
                aImg[index].style.filter = "alpha(opacity = " + alpha + ")";

                aDes[0].style.opacity = alpha / 100;
                aDes[0].style.filter = "alpha(opacity = " + alpha + ")";

                info[0].style.opacity = alpha / 100;
                info[0].style.filter = "alpha(opacity = " + alpha + ")";
                alpha === 100 && clearInterval(timer)
            },
            20);
    }
};

