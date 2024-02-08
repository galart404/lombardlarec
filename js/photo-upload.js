const uploadWrapper = document.querySelectorAll('.online-ocenka-photo-upload');
const uploadInput = document.querySelectorAll('.real-photo-upload-input');

uploadInput.forEach(item => {
    item.addEventListener('change', () => {
        const file = item.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = () => {
            uploadWrapper.forEach(item => {
                const imgWrap = document.createElement('div');
                const img = document.createElement('img');
                item.insertBefore(imgWrap, item.firstChild);
                imgWrap.appendChild(img);
                img.src = reader.result;
                imgWrap.classList.add('photo-upload-img-wrap');
                img.classList.add('photo-upload-img');
            });
        };
    });
});
