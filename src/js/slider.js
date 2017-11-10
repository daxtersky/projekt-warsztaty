class Slider {
    constructor(options) {
        this.counter = 0;
        this.options = options;
        this.slider = $(this.options.selector);
        this.prev = this.slider.find('.main-slider-prev');
        this.next = this.slider.find('.main-slider-next');
        this.slides = this.slider.find('.main-slide');
    }

    prevSlide() {
        this.counter--;
        if (this.counter < 0) {
            this.counter = this.slides.length-1;
        }
        this.slides.removeClass('active');
        this.slides.eq(this.counter).addClass('active');
    }

    nextSlide() {
        this.counter++;
        if (this.counter > this.slides.length-1) {
            this.counter = 0;
        }
        this.slides.removeClass('active');
        this.slides.eq(this.counter).addClass('active');
    }

    bindButtons() {
        this.next.on('click', () => {
            this.nextSlide();
        });
        this.prev.on('click', () => {
            this.prevSlide();
        });
    }
}

export { Slider }
