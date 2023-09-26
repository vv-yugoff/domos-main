// Навигационное меню

var toggleButton = $('.menu-toggle'),
nav = $('.main-navigation');

// toggle button
toggleButton.on('click', function(e) {
	e.preventDefault();
	toggleButton.toggleClass('is-clicked');
	nav.slideToggle();
});

// nav items
nav.find('li a').on("click", function() {
	toggleButton.toggleClass('is-clicked');
	nav.fadeOut();
});
