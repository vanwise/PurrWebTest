'use strict';

(function() {
    var $header = $('.js-header');
    var $scrollBtn = $header.find('.js-scroll-btn');
    
    $scrollBtn.on('click', function() {
        $('html,body').animate({
            scrollTop: $header.outerHeight()
        }, 500);
    });
})();