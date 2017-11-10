import { form } from './form.js';
import { Slider } from './slider.js';

document.addEventListener('DOMContentLoaded', function() {

    form();

    const slider = new Slider({
        selector : '#mainSlider'
    })
    slider.bindButtons();

    $(window).on('scroll', function() {
        console.log($(this).scrollTop() * 0.1)
        $('.main-hero').css('background-position-y', -100 - ($(this).scrollTop() * 2));
    })

});