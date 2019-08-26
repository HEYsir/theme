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
            $("#pop-article").html(result);
            document.getElementById('pop-article').style.display='block';
        },
        error: function(){
            alert("false");
        }
    });
    return false;
}
function closeDialog(){
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none'
}