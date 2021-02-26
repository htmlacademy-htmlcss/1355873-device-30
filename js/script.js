// Кнопка в хэддере открывает-закрывает выпадющий список

let navigationButton = document.querySelector('.navigation-list_button');

navigationButton.addEventListener('click', function (evn) {
    evn.preventDefault();
    navigationButton.classList.toggle('navigation-list_button--active');
});

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

// попапы карта + обратная связь
    
let wrapperPopupFeedback = document.querySelector('.wrapper-popup-feedback');
let feedbackPopupButton = document.getElementById('feedback-button');
let buttonCloseFeedback = document.querySelector('.button-close-feedback');
let formName = wrapperPopupFeedback.querySelector('#form-name');
let formEmail = wrapperPopupFeedback.querySelector('#form-email');
let formTextArea = wrapperPopupFeedback.querySelector('#form-textarea');



feedbackPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    wrapperPopupFeedback.classList.add('popup-wrapper--active');
    formName.focus();
})

buttonCloseFeedback.addEventListener('click', function (evn) {
    evn.preventDefault();
    wrapperPopupFeedback.classList.remove('popup-wrapper--active');
});

window.addEventListener ('keydown', function (evt) {
    if (evt.key === 'Escape') {
        if (wrapperPopupFeedback.classList.contains ('popup-wrapper--active')) {
            evt.preventDefault();
            wrapperPopupFeedback.classList.remove('popup-wrapper--active');
        }
    }
});

let wrapperPopupMap = document.querySelector('.wrapper-popup-map');
let mapPopupToggle = document.getElementById('map-popup-link');
let buttonCloseMap = document.querySelector('.button-close-map');

mapPopupToggle.onclick = function () {
    wrapperPopupMap.classList.add('popup-wrapper--active');
};

buttonCloseMap.onclick = function () {
    wrapperPopupMap.classList.remove('popup-wrapper--active');
}

window.onclick = function (evt) {
    if (evt.target == wrapperPopupMap) {
        wrapperPopupMap.classList.remove('popup-wrapper--active');
    }
}


window.addEventListener ('keydown', function (evt) {
    if (evt.key === 'Escape') {
        if (wrapperPopupMap.classList.contains ('popup-wrapper--active')) {
            evt.preventDefault();
            wrapperPopupMap.classList.remove('popup-wrapper--active');
        }
    }
});