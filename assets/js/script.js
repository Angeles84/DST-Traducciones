/* Fix iOS 7 bug for -unit support 
var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);

if(iOS){
    function iosVhHeightBug() {
        var height = $(window).height();
        $("#article-why").css('height', height);
    }
 
    iosVhHeightBug();
    $(window).bind('resize', iosVhHeightBug);
}*/