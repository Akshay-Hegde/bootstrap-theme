/**
 *
 *  onReady (document)
 *
 */
$(document).ready(function() {
    // global var for affixing #navigatio-primary;
    navigationPrimaryOffset = $('#navigation-primary').offset();
});
/**
 *
 * Fix the bootstrap issue on Windows Phone 8
 *
 */
(function() {
    if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode("@-ms-viewport{width:auto!important}")
        );
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }
})();
/**
 *
 * Make Navigation Toggle on Desktop Hover
 *
 */
$('.dropdown-toggle').click(function() {
    if ($(this).attr('data-href') != 'ignore') {
        var location = $(this).attr('href');
        window.location.href = location;
        return false;
    } else {
        event.stopPropagation();
        return false;
    }
});
/**
 *
 * Scroll to top
 *
 */
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#backtotop').fadeIn();
        } else {
            $('#backtotop').fadeOut();
        }
    });
    // scroll body to 0px on click;
    $('#backtotop').click(function() {
        $('#backtotop').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#backtotop').tooltip('show');
});
/**
 *
 * autopop popover
 *
 */
$('a[data-toggle="popover"]').popover({
    trigger: "hover"
});
/**
 *
 * affix #navigation-primary
 *
 */
$(window).scroll(function() {
    if ($(window).width() > 768) {
        if ($(this).scrollTop() > navigationPrimaryOffset.top) {
            $('#navigation-primary').addClass('navbar-fixed-top');
            $('html').css('margin-top', $('#navigation-primary').height() + 'px');
        } else {
            $('#navigation-primary').removeClass('navbar-fixed-top');
            $('html').css('margin-top', 0);
        }

    }
});
/**/
