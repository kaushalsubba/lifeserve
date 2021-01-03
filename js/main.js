window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    headerDIV = document.querySelector('#header');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerDIV.classList.add('sticky');
    } else {
        headerDIV.classList.remove('sticky');
    }
}



new Glide('.glide').mount();