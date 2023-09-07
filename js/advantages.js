// const text = document.querySelector(".text-advantages p");
// const letters = text.innerText.split("");

// const spannedText = letters.map((letter, i) => {
//     const span = document.createElement("span");
    
//     span.innerText = letter;
//     span.style.position = "absolute";
//     span.style.transform = `rotate(${i * 10}deg)`;
    
//     text.appendChild(span);
// });

// text.querySelector('.text-advantages-title').style.color = "transparent";

const texts = document.querySelectorAll(".text-advantages p");

texts.forEach(text => {
  const letters = text.innerText.split("");

  const spannedText = letters.map((letter, i) => {
    const span = document.createElement("span");
    
    span.innerText = letter;
    span.style.position = "absolute";
    span.style.transform = `rotate(${i * 10}deg)`;
    
    text.appendChild(span);
  });

  text.querySelector('.text-advantages-title').style.color = "transparent";
});
