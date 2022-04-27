(function() {
  var closeNav = function() {
    let button = document.getElementsByClassName('navigation__button')[0];
    button.click();
  }

  var navLinks = document.getElementsByClassName('navigation__link') ?? [];

  for (let i = 0; i < navLinks.length; i++) {
    let em = navLinks[i];
    em.addEventListener('click', function(e) {
      closeNav();
    });
  }
})();