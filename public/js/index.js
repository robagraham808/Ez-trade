var moreInfoButton = document.querySelectorAll('.more-info');
var exitButton = document.querySelectorAll('.x-button');
for (i = 0; i < moreInfoButton.length; i++) {
    moreInfoButton[i].addEventListener("click", function () {
        var moreContent = this.closest(".item").children[1];
        var mainParent = this.closest(".item");
        var exitButton = this.closest(".item").children[2];
        var addToCart = this.closest(".item-description").children[3];
        this.classList.add('hide');
        addToCart.classList.remove('hide');
        moreContent.classList.remove('hide');
        mainParent.classList.add('stretch');
        exitButton.classList.remove('hide');

    });
}

for (i = 0; i < exitButton.length; i++) {
    exitButton[i].addEventListener("click", function () {
        var fullDescription = this.closest(".item").children[1];
        var mainParent = this.closest(".item");
        var moreInfoButton = this.closest(".item").querySelector('.more-info');
        var addToCartButton = this.closest(".item").querySelector('.add-to-cart');

        moreInfoButton.classList.remove('hide');
        addToCartButton.classList.add('hide');
        this.classList.add('hide');
        fullDescription.classList.add('hide');
        mainParent.classList.remove('stretch');
    });
}

var hamburgerMenu = document.querySelectorAll('.hamburger-menu');

for (i = 0; i < hamburgerMenu.length; i++) {
    hamburgerMenu[i].addEventListener("click", function () {
        var exitButton = this.closest(".mobile-nav").children[3];
        var navMenuLinks = this.closest(".mobile-nav-container").children[1];
        this.classList.add('hide');
        exitButton.classList.remove('hide');
        navMenuLinks.classList.remove('hide');
    });
}

var exitMenuBtn = document.querySelectorAll('.exit-menu-btn');

for (i = 0; i < exitMenuBtn.length; i++) {
    exitMenuBtn[i].addEventListener("click", function () {
        this.classList.add('hide');
        var navMenuLinks = this.closest(".mobile-nav-container").children[1];
        var hamburgerMenu = this.closest(".mobile-nav").children[2];
        hamburgerMenu.classList.remove('hide');

        navMenuLinks.classList.add('hide');
    });
}