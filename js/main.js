window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    headerDIV = document.querySelector('#header');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerDIV.classList.add('sticky');
    } else {
        headerDIV.classList.remove('sticky');
    }
}



var glideObj=document.querySelectorAll('.glide');
for(i=0;i<=glideObj.length;i++){
    if(glideObj[i]){
        var autoPlay=false;
        if(glideObj[i].getAttribute('data-autoplay'))
            autoPlay=glideObj[i].getAttribute('data-autoplay');

        new Glide(glideObj[i],{autoplay:autoPlay}).mount();
    }
}