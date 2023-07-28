var moreInfoButton = document.querySelectorAll('.more-info');
var exitButton = document.querySelectorAll('.x-button');

var expandButtons = document.querySelectorAll('.expand-icon');
var exitButtons = document.querySelectorAll('.x-button');
expandButtons.forEach(function (expandButton) {
  expandButton.addEventListener('click', function () {
    var mainParent = this.closest('.item');
    var moreContent = mainParent.querySelector('.full-description');
    var exitButton = mainParent.querySelector('.x-button');

    this.classList.add('hide');
    moreContent.classList.remove('hide');
    mainParent.classList.add('stretch');
    exitButton.classList.remove('hide');
  });
});

exitButtons.forEach(function (exitButton) {
  exitButton.addEventListener('click', function () {
    var mainParent = this.closest('.item');
    var expandButton = mainParent.querySelector('.expand-icon');
    var moreContent = mainParent.querySelector('.full-description');

    expandButton.classList.remove('hide');
    moreContent.classList.add('hide');
    mainParent.classList.remove('stretch');
    this.classList.add('hide');
  });
});

var hamburgerMenu = document.querySelectorAll('.hamburger-menu');

for (i = 0; i < hamburgerMenu.length; i++) {
  hamburgerMenu[i].addEventListener('click', function () {
    var exitButton = this.closest('.mobile-nav').children[3];
    var navMenuLinks = this.closest('.mobile-nav-container').children[1];
    this.classList.add('hide');
    exitButton.classList.remove('hide');
    navMenuLinks.classList.remove('hide');
  });
}

var exitMenuBtn = document.querySelectorAll('.exit-menu-btn');

for (i = 0; i < exitMenuBtn.length; i++) {
  exitMenuBtn[i].addEventListener('click', function () {
    this.classList.add('hide');
    var navMenuLinks = this.closest('.mobile-nav-container').children[1];
    var hamburgerMenu = this.closest('.mobile-nav').children[2];
    hamburgerMenu.classList.remove('hide');

    navMenuLinks.classList.add('hide');
  });
}


var searchButtons = document.querySelectorAll('.search-button');

