;(function() {

  var btnHamburger = document.querySelector('.btn-hamburger'),
      pageNav = document.querySelector('.main-nav');

  btnHamburger.addEventListener('click', function() {
    this.classList.toggle('js-open-hamburger');
    pageNav.classList.toggle('js-nav-opened');
  });

})();
