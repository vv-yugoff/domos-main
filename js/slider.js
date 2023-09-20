import { cases } from "./data/cases-data.js";

// Смена изображений в слайдере

const mainImage = document.querySelector('#main-image');
const previews = document.querySelectorAll('.slider-preview-item a');
const name = document.querySelector('#case-realtor-name');
const text = document.querySelector('#case-text');

renderBlock();

for (let activeImage of previews) {
    activeImage.onclick = function(evt) {
        evt.preventDefault();
        let currentActive = document.querySelector('.slider-preview-item .active');
        
        mainImage.src = activeImage.href;
        
        currentActive.classList.remove('active');
        activeImage.classList.add('active');
        
        changeText(activeImage);
    }
}

function renderBlock() {
    name.innerHTML = cases[0].name;
    text.innerHTML = cases[0].text;
}

function changeText(active) {
    cases.forEach((item) => {
        if (Number(active.id) === item.id) {
            name.innerHTML = item.name;
            text.innerHTML = item.text;
        }
    });
}
