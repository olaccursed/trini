/*
 (function () {
 
 function resizer() {
 var height = $(window).height();
 var width = $(window).width();
 var header = $('header');
 var top = 0;
 header.height(height);
 if (width > 768) {
 top = height / 3;
 } else {
 top = height / 6;
 }
 header.find('.container').css("paddingTop", top + "px");
 }
 
 resizer();
 
 $(window).resize(function () {
 resizer();
 });
 
 
 })();
 */

(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 30 && !$('#menu').hasClass('scrolled')) {
            $('#menu').addClass('scrolled');
        }
        if ($(this).scrollTop() <= 30 && $('#menu').hasClass('scrolled')) {
            $('#menu').removeClass('scrolled');
        }
    });

})(jQuery);

(function () {

    $(window).load(function () {
        if (window.location.hash) {
            var hash = window.location.hash.substring(1);
            var to = $('section.' + hash).offset().top - 60;

            $('html, body').animate({
                scrollTop: to
            }, 500);
        }
    });


    // Menu
    $('.navbar-nav li').each(function () {
        $(this).find('a').on('click', function (e) {
            // move to
            var hash = $(this).attr('href').split('#')[1];
            var to = $('section.' + hash).offset().top - 60;

            $('html, body').animate({
                scrollTop: to
            }, 500);

            if (window.location.hash) {
            }
        });
    });
    $('.navbar-header').find('a').on('click', function (e) {

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        history.pushState(null, null, '/');
        
        return false;
    });
    

    $('#menumobile').find('a').on('click', function (e) {
        // move to
        var hash = $(this).attr('href').split('#')[1];
        var to = $('section.' + hash).offset().top - 60;

        $('html, body').animate({
            scrollTop: to
        }, 500);

        if (window.location.hash) {
        }
    });
    
    $('.mobilebrand').on('click', function (e) {

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        history.pushState(null, null, '/');
        
        return false;
    });

})();