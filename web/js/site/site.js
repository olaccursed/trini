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
        if ($('section.' + hash).length > 0) {
            var to = $('section.' + hash).offset().top + 10;
        } else {
            return true;
        }

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


// Фиксация кнопки закрытия модального окна
(function () {
    $('.modal_1').each(function () {
        var el = $(this);
        var header = el.find('.modal-header');
        header.clone().addClass('modal_fixed').prependTo(el);


    });

    $('.modal_1').scroll(function () {
        var el = $(this);
        var curent_scroll = $(this).scrollTop();
        var curent_height = $(this).height();
        var close_fixed = $(this).find('.close');

        if (curent_scroll > 0 && !close_fixed.hasClass('scrolled')) {
            close_fixed.addClass('scrolled');
        }
        if (curent_scroll == 0 && close_fixed.hasClass('scrolled')) {
            close_fixed.removeClass('scrolled');
        }

        var header = el.find('.modal_fixed');
        if (curent_scroll >= 100) {
            if (header.hasClass('open')) {

            } else {
                header.addClass('open')
                var width = el.find('.modal-dialog').outerWidth();
                var position = el.find('.modal-dialog').offset();
                var left = Math.round(position.left);

                //el.find('.modal-dialog').width(width);
                header.width(width);
                header.css('left', left);
            }
        } else {
            header.removeClass('open')
        }
    });

    $(window).resize(function () {
        var el = $('.modal_1.in');

        if (el.length > 0) {
            var header = el.find('.modal_fixed');
            var width2 = document.getElementsByClassName('modal_1 in')[0].getElementsByClassName('modal-dialog')[0].getBoundingClientRect().width;
            var left2 = document.getElementsByClassName('modal_1 in')[0].getElementsByClassName('modal-dialog')[0].getBoundingClientRect().left;
            header.css('width', width2 + 'px');
            header.css('left', left2 + 'px');
        }
    });

    var isFixedSupported = (function () {
        var isSupported = null;
        if (document.createElement) {
            var el = document.createElement("div");
            if (el && el.style) {
                el.style.position = "fixed";
                el.style.top = "10px";
                var root = document.body;
                if (root && root.appendChild && root.removeChild) {
                    root.appendChild(el);
                    isSupported = el.offsetTop === 10;
                    root.removeChild(el);
                }
            }
        }
        return isSupported;
    })();

    $(window).load(function () {
        if (!isFixedSupported) {
            document.body.className = document.body.className + ' no-fixed-supported';
        }
        window.scrollBy(0, 1);
    });

    $('.modal').scroll(function () {
        if ($(this).hasClass('in')) {
            if ($('body').hasClass('no-fixed-supported')) {
                var box = $('.modal_fixed'); // float-fixed block
                var top = box.offset().top - parseFloat(box.css('marginTop').replace(/auto/, 0));
                var windowpos = $(this).scrollTop();

                box.css('position', 'absolute');
                box.css('top', windowpos);
            }

        }
    });

}(jQuery));