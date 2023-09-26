var logoImage = document.querySelector('.logo-container img');

var windowWidth = window.innerWidth;

if (windowWidth <= 449) {

  logoImage.src = './../images/logo_domos.png';

} else {

  logoImage.src = './../images/group-logo-index.png';
  
}
