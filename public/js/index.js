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

var logInBtn = document.querySelectorAll('.log-In-Btn');

for (i = 0; i < logInBtn.length; i++) {
  logInBtn[i].addEventListener('click', function () {
    var logInBtn = this.closest('.item');
    var expandButton = mainParent.querySelector('.expand-icon');
    var moreContent = mainParent.querySelector('.full-description');
    exitButton.classList.remove('hide');
    navMenuLinks.classList.remove('hide');
  });
}

var registerBtn = document.querySelectorAll('.register-Btn');

for (i = 0; i < registerBtn.length; i++) {
  registerBtn[i].addEventListener('click', function () {
    var registerBtn = this.closest('.item');
    var expandButton = mainParent.querySelector('.expand-icon');
    var moreContent = mainParent.querySelector('.full-description');
    exitButton.classList.remove('hide');
    navMenuLinks.classList.remove('hide');
  });
}

var sellBtn = document.querySelectorAll('.sell-btn');

sellBtn[i].addEventListener('click', function () {
  var sellBtn = this.closest('item');
  var expandButton = mainParent.querySelector('.expand-icon');
  var moreContent = mainParent.querySelector('.full-description');
  exitButton.classList.remove('hide');
  navMenuLinks.classList.remove('hide');
});

var searchButtons = document.querySelectorAll('.search-button');

searchButtons.forEach(function (searchButton) {
  searchButton.addEventListener('click', function () {
    var searchInput = this.parent.querySelector('.search-bar');
    var userSearch = searchInput.value;
  });

  var helpAndContactBtn = document.querySelectorAll('.helpandcontactbtn');

  helpAndContactBtn[i].addEventListener('click', function () {
    var helpAndContactBtn = this.closest('item');
    var expandButton = mainParent.querySelector('expand-icon');
    var moreContent = mainParent.querySelector('full-description');
    exitButton.classList.remove('hide');
    navMenuLinks.classList.remove('hide');
  });
});

// const getSearchResults = () =>
//   fetch('/api/', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

const categoryLinks = document.querySelector('.category-links');
// Attach a click event listener to the category links ul element
categoryLinks.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default behavior of the anchor tag

  if (event.target.tagName === 'li') {
    const categoryId = event.target.dataset.categoryId; // Assuming you have assigned a data attribute "data-category-id" to the category links

    // Redirect the user to the search results page with the category ID as a query parameter
    window.location.href = '/searchresults?category=' + categoryId;
  }
});
