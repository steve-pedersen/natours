(function() {
  var clickNavBtn = () => {
    let button = document.getElementsByClassName('navigation__button')[0];
    button.click();
  };

  var navLinks = document.getElementsByClassName('navigation__link');

  for (let i = 0; i < navLinks.length; i++) {
    let em = navLinks[i];
    em.addEventListener('click', (e) => {
      clickNavBtn();
    });
  }

  document.getElementById('popup').addEventListener('click', (e) => {
    let ems = document.getElementsByClassName('popup__close');
    
    for (let i = 0; i < ems.length; i++) {
      ems[i].click();
    }
  });

})();