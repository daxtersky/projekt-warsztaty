function initScroll() {
    const $window = $(window);
    const $header = $('.main-header');
    const $hero = $('.main-hero');
    const $heroArrow = $hero.find('.main-hero-arrow');

    //event scrolla
    $window.on('scroll', function() {
        //przesuwam tlo main hero
        const pos = -($window.scrollTop() * 0.2);
        console.log(pos)
        $hero.css('background-position-y', -100 - ($window.scrollTop() * 2));
        $heroArrow.css({'transform': `translate(-50%, ${pos}px)`})
        //jezeli scroll jest wiekszy niz 100 zmniejsz
        //menu przyklejone do gory strony
        if ($window.scrollTop() >= 100) {
            $header.addClass('small');
        } else {
            $header.removeClass('small');
        }

        if ($window.scrollTop() >= 200) {
            $heroArrow.fadeOut();
        } else {
            $heroArrow.fadeIn();
        }
    })
}

export { initScroll }