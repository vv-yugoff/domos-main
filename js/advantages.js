const text = document.querySelector(".text-advantages p");
const letters = text.innerText.split("");

const spannedText = letters.map((letter, i) => {
    const span = document.createElement("span");
    span.innerText = letter;
    span.style.position = "absolute";
    return span;
});

text.innerHTML = "";

spannedText.forEach(span => {
    text.appendChild(span);
});
