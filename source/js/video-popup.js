'use strict';

(function() {
    var $videoBtn = $('.js-video-btn');
    var $videoPopup = $('.js-video-popup');
    var $videoCloseBtn = $videoPopup.find('.js-video-close-btn');

    function closeVideoPopup() {
        $videoPopup.hide();
    }

    $videoBtn.on('click', function() {
        $videoPopup.show();
    });
    $videoPopup.on('click', function(e) {
        var $target = $(e.currentTarget);

        if ($target.is($videoPopup)) {
            closeVideoPopup();
        }
    });
    $videoCloseBtn.on('click', closeVideoPopup);
})();