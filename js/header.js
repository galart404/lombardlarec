const burger_btn = document.querySelector('.burger-btn');
const menu_burger = document.querySelector('.menu-burger');
const phone_icon = document.querySelector('.phone-icon');
const popupSelectCity = document.querySelector('.popup-select-city');
const popupCallback = document.querySelector('.popup-callback');
const cityLinks = document.querySelectorAll('.select-city-link');
const cityList = document.querySelector('.select-city-list');
const callBackBtns = document.querySelectorAll('.call-back-btn');
const body = document.querySelector('body');
const nav_menu_mobile_drop_item = document.querySelectorAll('.nav-menu-mobile-drop-item');
const nav_menu_mobile_drop_list = document.querySelectorAll('.nav-menu-mobile-drop-list');


document.querySelectorAll('.popup').forEach(popup => {

    popup.querySelector('.popup-close-btn').addEventListener('click', () => {
        popup.classList.remove('open');
    });
    
});

cityLinks.forEach((cityLink) => {
    cityLink.addEventListener('click', () => {
        popupSelectCity.classList.add('open');
    });
});

callBackBtns.forEach((callBackBtn) => {
    callBackBtn.addEventListener('click', () => {
        popupCallback.classList.add('open');
    });
});

cityList.addEventListener('click', (event) => {
    if (event.target.classList.value === 'select-city-item') {
        cityLinks.forEach((cityLink) => {
            cityLink.innerText = event.target.innerText;
        });
        popupSelectCity.classList.remove('open');
    };
});

burger_btn.addEventListener('click', () => {
    burger_btn.classList.toggle('open');
    menu_burger.classList.toggle('open');
    phone_icon.classList.toggle('fill');
    body.classList.toggle('lock');
});

for (let i = 0; i < nav_menu_mobile_drop_item.length; i++) {
    nav_menu_mobile_drop_item[i].addEventListener('click', () => {
        nav_menu_mobile_drop_item[i].classList.toggle('open');
        nav_menu_mobile_drop_list[i].classList.toggle('open');
    });
};
