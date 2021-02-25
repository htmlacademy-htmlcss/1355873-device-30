// Promo slider

let slideOne = document.querySelector('.slide-1');
let slideTwo = document.querySelector('.slide-2');
let slideThree = document.querySelector('.slide-3');
let buttonSlideOne = document.querySelector('.slide-promo-1');
let buttonSlideTwo = document.querySelector('.slide-promo-2');
let buttonSlideThree = document.querySelector('.slide-promo-3');


buttonSlideOne.addEventListener('click', function () {
    slideTwo.classList.remove('slide--current');
    slideThree.classList.remove('slide--current');
    slideOne.classList.add('slide--current');

    buttonSlideTwo.classList.remove('slider-controls_button--current');
    buttonSlideThree.classList.remove('slider-controls_button--current');
    buttonSlideOne.classList.add('slider-controls_button--current');
});
buttonSlideTwo.addEventListener('click', function () {
    slideOne.classList.remove('slide--current');
    slideThree.classList.remove('slide--current');
    slideTwo.classList.add('slide--current');

    buttonSlideOne.classList.remove('slider-controls_button--current');
    buttonSlideThree.classList.remove('slider-controls_button--current');
    buttonSlideTwo.classList.add('slider-controls_button--current');
});
buttonSlideThree.addEventListener('click', function () {
    slideOne.classList.remove('slide--current');
    slideTwo.classList.remove('slide--current');
    slideThree.classList.add('slide--current');    

    buttonSlideOne.classList.remove('slider-controls_button--current');
    buttonSlideTwo.classList.remove('slider-controls_button--current');
    buttonSlideThree.classList.add('slider-controls_button--current');
});

// Delivery slider 

let slideFour = document.querySelector('.slide-4');
let slideFive = document.querySelector('.slide-5');
let slideSix = document.querySelector('.slide-6');
let buttonServiceSlideOne = document.querySelector('.service-button-one');
let buttonServiceSlideTwo = document.querySelector('.service-button-two');
let buttonServiceSlideThree = document.querySelector('.service-button-three');

buttonServiceSlideOne.addEventListener('click', function () {
    slideFive.classList.remove('delivery-slider_slide--curent');
    slideSix.classList.remove('delivery-slider_slide--curent');
    slideFour.classList.add('delivery-slider_slide--curent');

    buttonServiceSlideTwo.classList.remove('service-button--current');
    buttonServiceSlideThree.classList.remove('service-button--current');
    buttonServiceSlideOne.classList.add('service-button--current');
});

buttonServiceSlideTwo.addEventListener('click', function () {
    slideFour.classList.remove('delivery-slider_slide--curent');
    slideSix.classList.remove('delivery-slider_slide--curent');
    slideFive.classList.add('delivery-slider_slide--curent');

    buttonServiceSlideOne.classList.remove('service-button--current');
    buttonServiceSlideThree.classList.remove('service-button--current');
    buttonServiceSlideTwo.classList.add('service-button--current');
});

buttonServiceSlideThree.addEventListener('click', function () {
    slideFour.classList.remove('delivery-slider_slide--curent');
    slideFive.classList.remove('delivery-slider_slide--curent');
    slideSix.classList.add('delivery-slider_slide--curent');    

    buttonServiceSlideOne.classList.remove('service-button--current');
    buttonServiceSlideTwo.classList.remove('service-button--current');
    buttonServiceSlideThree.classList.add('service-button--current');
});