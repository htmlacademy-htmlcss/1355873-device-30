// Кнопка в хэддере открывает-закрывает выпадющий список

let navigationButton = document.querySelector('.navigation-list_button');

navigationButton.addEventListener('click', () => {
    navigationButton.classList.toggle('navigation-list_button--active');
});

// промо слайдер




// попапы карта + обратная связь
    
let wrapperPopupFeedback = document.querySelector('.wrapper-popup-feedback');
let feedbackPopupToggle = document.getElementById('feedback-button');
let buttonCloseFeedback = document.querySelector('.button-close-feedback');

feedbackPopupToggle.onclick = function () {
    wrapperPopupFeedback.style.display = "flex";
};

buttonCloseFeedback.onclick = function () {
    wrapperPopupFeedback.style.display = "none";
}

window.onclick = function (e) {
    if (e.target == wrapperPopupFeedback) {
        wrapperPopupFeedback.style.display = "none";
    }
}

let wrapperPopupMap = document.querySelector('.wrapper-popup-map');
let mapPopupToggle = document.getElementById('map-popup-link');
let buttonCloseMap = document.querySelector('.button-close-map');

mapPopupToggle.onclick = function () {
    wrapperPopupMap.style.display = "flex";
};

buttonCloseMap.onclick = function () {
    wrapperPopupMap.style.display = "none";
}

window.onclick = function (e) {
    if (e.target == wrapperPopupMap) {
        wrapperPopupMap.style.display = "none";
    }
}
