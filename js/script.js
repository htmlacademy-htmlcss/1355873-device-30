// Кнопка в хэддере открывает-закрывает выпадющий список

let navigationButton = document.querySelector('.navigation-list_button');

navigationButton.addEventListener('click', function (evn) {
    evn.preventDefault();
    navigationButton.classList.toggle('navigation-list_button--active');
});

// промо слайдер

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