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