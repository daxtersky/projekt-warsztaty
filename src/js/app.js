import { form } from './form.js';
import { Slider } from './slider.js';
import { navToggle } from './nav.js';
import { initScroll } from './scroll.js';

document.addEventListener('DOMContentLoaded', function() {

    //formularz kontaktowy
    form();

    //slider
    const slider = new Slider({
        selector : '#mainSlider'
    })
    slider.bindButtons();

    //init scroll events
    initScroll();

    //navigacja - toggle
    navToggle();


});