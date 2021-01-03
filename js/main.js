window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {

    headerDIV = document.querySelector('#header');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerDIV.classList.add('sticky');
    } else {
        headerDIV.classList.remove('sticky');
    }
}

new Glide('.glide').mount();

// window.onscroll = function () {
//     var top = window.pageYOffset || document.documentElement.scrollTop;
//     if (top > 100) {
//         document.getElementById('header').classList.add('shrink');
//     } else {
//         document.getElementById('header').classList.remove('shrink');
//     }
// };