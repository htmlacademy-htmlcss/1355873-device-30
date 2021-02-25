// Кнопка в хэддере открывает-закрывает выпадющий список

let navigationButton = document.querySelector('.navigation-list_button');

navigationButton.addEventListener('click', function () {
    navigationButton.classList.toggle('navigation-list_button--active');
});

// промо слайдер




// попапы карта + обратная связь
    
let wrapperPopupFeedback = document.querySelector('.wrapper-popup-feedback');
let feedbackPopupToggle = document.getElementById('feedback-button');
let buttonCloseFeedback = document.querySelector('.button-close-feedback');

feedbackPopupToggle.onclick = function () {
    wrapperPopupFeedback.classList.add('popup-wrapper--active');
};

buttonCloseFeedback.onclick = function () {
    wrapperPopupFeedback.classList.remove('popup-wrapper--active');
}

window.onclick = function (e) {
    if (e.target == wrapperPopupFeedback) {
        wrapperPopupFeedback.classList.remove('popup-wrapper--active');
    }
}

let wrapperPopupMap = document.querySelector('.wrapper-popup-map');
let mapPopupToggle = document.getElementById('map-popup-link');
let buttonCloseMap = document.querySelector('.button-close-map');

mapPopupToggle.onclick = function () {
    wrapperPopupMap.classList.add('popup-wrapper--active');
};

buttonCloseMap.onclick = function () {
    wrapperPopupMap.classList.remove('popup-wrapper--active');
}

window.onclick = function (e) {
    if (e.target == wrapperPopupMap) {
        wrapperPopupMap.classList.remove('popup-wrapper--active');
    }
}
