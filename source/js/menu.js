var menu = document.querySelector('.header__list');
var menuToggle = document.querySelector('.header__toggle');

menuToggle.addEventListener('click', function (){
  var i = 0;
while ( i < 3 ) {
  i++;
  if (menu.classList.contains('header__list--closed')){
    menu.classList.remove('header__list--closed');
    menu.classList.add('header__list--opened');
  } else {
    menu.classList.add('header__list--closed');
    menu.classList.remove('header__list--opened');
 }
}
})