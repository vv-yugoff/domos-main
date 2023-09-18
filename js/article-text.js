function readMore(currentBtn) {
    var text = currentBtn.parentElement;
    var dots = text.querySelector('#dots');
    var more = text.querySelector('#more');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        more.style.display = 'none';
        currentBtn.textContent = 'Узнать больше';
    } else {
        dots.style.display = 'none';
        more.style.display = 'inline';
        currentBtn.textContent = 'Скрыть';
    }
}