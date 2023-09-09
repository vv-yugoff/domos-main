// let container = document.querySelector('.svg-container');
// let svg = container.querySelector('svg');
// let fadeOut;
// let mouseDown = false;

// function startFadeOut() {
//   if (mouseDown) return; // Если кнопка мыши уже нажата, не запускаем затухание
//   clearTimeout(fadeOut);
//   svg.style.opacity = 1;
//   svg.style.transition = 'opacity 2s ease'; // CSS transition для плавного затухания в течение 2 секунд
//   fadeOut = setTimeout(() => {
//     svg.style.opacity = 0;
//   }, 2000); // время затухания в миллисекундах (здесь 2 секунды)
// }

// function stopFadeOut() {
//   clearTimeout(fadeOut);
//   if (!mouseDown) {
//     svg.style.opacity = 1;
//     svg.style.transition = ''; // Удаляем CSS transition при остановке затухания
//   }
// }

// function handleMouseDown() {
//   mouseDown = true;
// }

// function handleMouseUp() {
//   mouseDown = false;
//   startFadeOut();
// }

// container.addEventListener('mouseenter', startFadeOut);
// container.addEventListener('mouseleave', stopFadeOut);
// document.addEventListener('mousedown', handleMouseDown);
// document.addEventListener('mouseup', handleMouseUp);



document.getElementById('svg1').addEventListener('click', function() {
  window.location.href = 'http://domos.top/main.html';
});

document.getElementById('svg2').addEventListener('click', function() {
  window.location.href = 'http://domos.top/main.html';
});

// window.location = "http://domos.top/main.html";