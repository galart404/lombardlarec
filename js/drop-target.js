document.querySelectorAll('.drop-wrap').forEach((dropWrap) => {

    dropBtn = dropWrap.querySelector('.drop-btn');
    
    dropBtn.addEventListener('click', () => {
        dropWrap.classList.toggle('open');
    });
});