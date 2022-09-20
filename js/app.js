var slider = document.querySelector('section:nth-of-type(4)'); 
var innerSlider = document.querySelector('section:nth-of-type(4) > ul')

var pressed = false;
var startSlide;
var slide;

slider.addEventListener('mmousedown', (e)=> {
pressed = true;
startSlide = e.offsetX - innerSlider.offsetLeft;
console.log(startSlide);
});

slider.addEventListener('mousmove', (e)=> {
    if(!pressed) return;
    e.preventDefault();

    slide = e.offsetX

    innerSlider.style.left = '${slide - startSlide}px';
});

function checkboundary(){
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if(parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px';
    }
    else if (inner.right < outer.right) {
        innerSlider.style.left = '-${inner.width - outer.right}px';

    }
}