/**
 * Created by blackeyes on 8/21/19.
 */
!function ($) {
    $(document).ready(function ($) {
        jQuery(".tabs .tab-links a").on("click", function (e) {
            var currentAttrValue = jQuery(this).attr("href");
            jQuery(".tabs " + currentAttrValue).show().siblings().hide(), jQuery(this).parent("li").addClass("active").siblings().removeClass("active"), e.preventDefault()
        })
    })
}(jQuery);


function openDialog(url){
    $.ajax({
        type:"GET",
        url: url, //后台处理函数的url
        cache: false,
        dataType: "html",
        success: function(result){
            // const markdown = "**Markdown**"
            // console.log("\nmarkdown input:", markdown, "\n")
            // let Md2HTMLCon = lute.MarkdownStr("", result)
            Md2HTMLCon = result
            $("#pop-article").html(Md2HTMLCon);
            document.getElementById('pop-article').style.display='block';
        },
        error: function(){
            alert("false");
        }
    });
    return false;
}
function closeDialog(){
    window.parent.location.reload();
    // document.getElementById('pop-article').style.display='none';
    // document.getElementById('light').style.display='none';
    // document.getElementById('fade').style.display='none'
}

$(document).bind('keydown', 'Escape', function (evt) {
        //关闭层代码
        if (evt.data != evt.originalEvent.code){
            return true;
        }
        closeDialog();
        return false;
    }
);