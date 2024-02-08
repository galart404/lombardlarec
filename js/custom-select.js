document.querySelectorAll('.custom-select-wrap').forEach(customSelect => {

    const selectWrap = customSelect;
    const selectBtn = customSelect.querySelector('.custom-select-btn');
    const selectValue = customSelect.querySelector('.custom-select-value');
    const selectDropList = customSelect.querySelector('.custom-select-drop-list');

    selectBtn.addEventListener('click', () => {
        selectWrap.classList.toggle('open');
    });

    selectDropList.addEventListener('click', (event) => {
        event.stopPropagation();
        if (event.target.classList == 'custom-select-drop-item') {
            selectValue.innerText = event.target.innerText;
            selectWrap.classList.add('active');
            selectWrap.classList.remove('open');
            selectBtn.focus();
        };
    });

    document.addEventListener('click', (event) => {
        if (event.target !== selectBtn) {
            selectWrap.classList.remove('open');
        };
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab' || event.key === 'Escape') {
            selectWrap.classList.remove('open');
        };
    });

});
