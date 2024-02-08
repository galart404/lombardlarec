const rangeSlider = document.querySelector('.range-slider-input');
const rangeValue = document.querySelector('.range-days-value');
const rangeSelector = document.querySelector('.range-selector-days-wrap');

changeSlider();

rangeSlider.oninput = () => {
    changeSlider();
};

rangeSelector.addEventListener('click', (event) => {
    if (event.target.classList.value === "range-select-day") {
        rangeSlider.value = event.target.dataset.value;
        changeSlider();
    };
});

function changeSlider() {
    let rangeSliderValue = (rangeSlider.value * 100) / rangeSlider.max;
    rangeSlider.style.background = 'linear-gradient(to right, #1D7D4A 0%, #1D7D4A '+rangeSliderValue+'%, #D9D9D9 '+rangeSliderValue+'%, #D9D9D9 '+rangeSlider.max+'%)';
    rangeValue.innerText = rangeSlider.value;
};
