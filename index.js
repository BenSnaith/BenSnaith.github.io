console.log("connection");

let hamburger = document.getElementById('hamburger');
let searchMenu = document.getElementById('search-menu');
let isShowing = false;

document.getElementById('hamburger').addEventListener('click', (e) => {
    console.log('clicked');

    e.stopPropagation();

    if(isShowing) {
        searchMenu.classList.remove('search-show');
        searchMenu.classList.add('search-hide');
        isShowing = false;
    }
    else {
        searchMenu.classList.remove('search-hide');
        searchMenu.classList.add('search-show');
        isShowing = true;
    }
})