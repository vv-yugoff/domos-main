// Смена изображений в слайдере

const mainImage = document.querySelector('#main-image');
const previews = document.querySelectorAll('.slider-preview-item a');

for (let activeImage of previews) {
    activeImage.onclick = function(evt) {
        evt.preventDefault();
        mainImage.src = activeImage.href;

        let currentActive = document.querySelector('.slider-preview-item .active');
        currentActive.classList.remove('active');
        activeImage.classList.add('active');
    }
}
