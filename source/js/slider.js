'use strict';

(function() {
    var ACTIVE_CLASS = 'js-active';
    var $sliderWrapper = $('.js-slider-wrapper');
    var $slider = $sliderWrapper.find('.js-slider');
    var $slides = $slider.find('.js-slide');
    var $controls = $('.js-controls');
    var $sliderBtn = $controls.find('.js-slider-btn');
    var slideCount = 0;
    
    function createControlBtn(count) {
        var sliderBtnCopy = $sliderBtn[0].cloneNode(true);
        var fragment = document.createDocumentFragment();

        fragment.appendChild(sliderBtnCopy);
        fragment.querySelector('.js-count').textContent = count + 2;
        $controls.append(fragment);
    }
    function moveSlider() {
        $slider.css({
            left: (slideCount * -100) + '%'
        });
    }
    
    for (var i = 0; i < $slides.length - 1; i++) {
        createControlBtn(i);
    }

    $sliderBtn.addClass(ACTIVE_CLASS);
    $sliderBtn = $controls.find('.js-slider-btn');
    moveSlider();
    $controls.on('click', function(e) {
        var $target = $(e.target);
        var ELEMENT_INDEX = $sliderBtn.index($target);
        console.log(ELEMENT_INDEX)

        if ($target.hasClass('js-slider-btn')) {
            $sliderBtn.removeClass(ACTIVE_CLASS);
            $target.addClass(ACTIVE_CLASS);
            slideCount = ELEMENT_INDEX;
            moveSlider();
        }
    });
    $sliderWrapper.on('touchstart', function(e) {
        var startCoordX = e.changedTouches[0].clientX;

        function onSliderWrapperTouchend(e) {
            var endCoordX = e.changedTouches[0].clientX;

            $sliderBtn.removeClass(ACTIVE_CLASS);

            if (startCoordX > endCoordX && slideCount < $slides.length - 1) {
                slideCount++;
            } else if (startCoordX < endCoordX && slideCount) {
                slideCount--;
            }

            $sliderBtn.eq(slideCount).addClass(ACTIVE_CLASS);
            moveSlider();
            $sliderWrapper.off('touchend', onSliderWrapperTouchend);
        }

        $sliderWrapper.on('touchend', onSliderWrapperTouchend);
    });
})();