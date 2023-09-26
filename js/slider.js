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
    if (text.classList.contains('mobile')) {
        const shortText = cases[0].text.slice(0, Math.floor(cases[0].text.length * 0.25)) + '...';
    
        name.innerHTML = cases[0].name;
        text.innerHTML = shortText;
    } else {
        name.innerHTML = cases[0].name;
        text.innerHTML = cases[0].text;
    }


}

function changeText(active) {
    cases.forEach((item) => {
        if (Number(active.id) === item.id) {
            const shortText = item.text.slice(0, Math.floor(item.text.length * 0.25)) + '...';
            console.log(shortText);
            name.innerHTML = item.name;
            text.innerHTML = shortText;
        }
    });
}
