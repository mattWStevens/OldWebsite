/*
    extras.js
    Matthew Stevens
    January 14th, 2019
*/

/*
    Handles the positioning of the toggle arrow button.
*/
$(document).ready(function() {
    $("#showMore").click(function() {
        if ($("#more").hasClass("fas fa-angle-down")) {
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
    Opens the full screen overlay navigation menu for mobile devices.
*/
function openNav() {
    document.getElementById("mobileNav").style.width = "100%";
}

/*
    Closes the full screen overlay navigation menu for mobile devices.
*/
function closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
}

/*
    Handles updating certain key features based on viewport size.
*/
function updateSize() {
    var width = $(window).width();
    
    if (width < 1200) {
        $("embed").replaceWith("<a href='Stevens_Resume_update.pdf' id='resLink'>Click Here For My Resume</a>");
        $("#resTitle").css({marginBottom: 15});
    }
    
    if (width >= 800 && width < 1200) {
        $(".card-text").html("");
        $("#tree").css({fontSize: 18});
        $(".pRowOne").css({marginLeft: 25});
    }
    
    if (width > 1000 && width < 1200) {
        $(".card-text").html("");
        $("#tree").css({fontSize: 18});
        $(".pRowOne").css({marginLeft: 70});
        $(".graphics").css({padding: 5});
    }

    if (width < 600) {
        $(".navbar-toggler").attr("onClick", "openNav()");
        $(".navbar-toggler").removeAttr("data-toggle");
        $("#w").html("Weather Graphic From <br><a href='http://www.icons-land.com/'>http://www.icons-land.com/</a>");
        $("#c").html("Calculator Graphic From <br><a href='http://iconleak.com'>http://iconleak.com</a>");
        $("#footer").css({padding: 35});
        $(".banner").css({fontSize: 72});
    }
}