var menuToggle = document.querySelector('.header__toggle');
var header = document.querySelector('.header');

if (header.classList.contains('header__no-js')) {
  header.classList.remove('header__no-js');
  header.classList.add('header__closed');
}


menuToggle.addEventListener('click', function () {
  if (header.classList.contains('header__closed')) {
    header.classList.remove('header__closed');
    header.classList.add('header__open');
  } else {
    header.classList.add('header__closed');
    header.classList.remove('header__open');
  }
})
