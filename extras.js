/*
    extras.js
    Matthew Stevens
    January 14th, 2019
*/

$(document).ready(function(){
    $("#showMore").click(function(){
        if ($("#more").hasClass("fas fa-angle-down")){
            $("#more").removeClass("fas fa-angle-down");
            $("#more").toggleClass("fas fa-angle-up");
        } else {
            $("#more").removeClass("fas fa-angle-up");
            $("#more").toggleClass("fas fa-angle-down");
        }
    });
    
    updateSize();
    
    $(window).resize(updateSize);   // update screen based on browser size automatically
});

/*
    Handles updating certain key features based on viewport size.
*/
function updateSize() {
    var width = $(window).width();
    
    if (width < 1200) {
        $("embed").replaceWith("<a href='Stevens.pdf' id='resLink'>Click Here For My Resume</a>");
    }
    
    if (width >= 800 && width < 1200) {
        $(".card-text").html("");
        $("#tree").css({fontSize: 18});
        $(".pRowOne").css({marginLeft: 25});
    }
    
    if (width == 1024) {
        $(".pRowOne").css({marginLeft: 45});
    }
}
