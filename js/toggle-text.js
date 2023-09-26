function toggleText() {
    // var text = document.querySelector('#case-text');
    // var hiddenText = document.querySelector('#hidden-text');
    // var btn = document.querySelector('#toggle-btn');

    // if (!hiddenText) {
    //     hiddenText = document.createElement('span');
    //     hiddenText.id = 'hidden-text';
    //     hiddenText.style.display = 'none';
    //     hiddenText.textContent = 'shjkhskjgkl;sdfjgsd;fgdslfg';
        
    //     text.appendChild(hiddenText);
    // }

    // if (hiddenText.style.display === 'none') {
    //     hiddenText.style.display = 'inline';
    //     btn.textContent = 'Скрыть';
    // } else {
    //     hiddenText.style.display = 'none';
    //     btn.textContent = 'Раскрыть';
    // }

    const originalText = document.querySelector('#case-text');
    const toggleBtn = document.querySelector('#toggle-btn');

    const text = originalText.textContent;
    const truncatedText = text.slice(0, Math.floor(text.length * 0.25));

    const newTextElement = document.createElement('p');
    newTextElement.textContent = truncatedText;
    
    
    console.log(originalText);
    console.log(toggleBtn);
    console.log(text);
    console.log(truncatedText);
    console.log(newTextElement);

    console.log(originalText.parentNode);

    if (toggleBtn.textContent === 'Раскрыть') {
        originalText.parentNode.replaceChild(newTextElement, originalText);
        toggleBtn.textContent = 'Скрыть';
    } else {
        newTextElement.parentNode.replaceChild(originalText, newTextElement);
        toggleBtn.textContent = 'Раскрыть';
    }

}