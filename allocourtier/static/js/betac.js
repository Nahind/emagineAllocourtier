// shrink the navbar on scroll

// $(function() {

    
// });

function shrink_navbar(scroll_start) {
    var scroll = $(window).scrollTop();
    var win_width = $(window).width();

    if (win_width >= 754) {
        if (scroll >= scroll_start) {
            $(".navbar-fixed-top").addClass("navbar-shrink");
        } else {
            $(".navbar-fixed-top").removeClass("navbar-shrink");
        }
    }
    
}

$(window).scroll(function() {
    shrink_navbar(500);
});


// Collapse projects if another category is selected

$(function() {
    $('div.collapse').on('show.bs.collapse', function () {
        $('.collapse').collapse('hide');
        console.log("hide");
    });

    $("#project-type_1").collapse('toggle');
});

