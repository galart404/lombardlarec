const input = document.querySelector('.find-city-input');

input.addEventListener('keyup', () => {

    let filter = input.value.toLowerCase();
    let filterElements = document.querySelectorAll('.select-city-item');

    filterElements.forEach((item) => {
        if (item.innerText.toLowerCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        };
    });
});
