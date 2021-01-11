var pageHeader = document.querySelector('.page-header');
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');


pageHeader.classList.remove('page-header--no-js');
navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var mapBlock = document.querySelector('#map');

if (mapBlock) {
  ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map(mapBlock, {
          center: [59.938635,30.323118],
          zoom: 14
      });
  }
}

