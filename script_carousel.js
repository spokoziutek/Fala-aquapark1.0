const images = ["jpg/fala.jpg", "jpg/jacuzzi.jpg", 
"jpg/slide.jpg", "jpg/solanka.jpg", "jpg/sport.jpg"];

const text = ["Baseny Rekreacyjne", "Jacuzzi", "Zjeżdżalnie",
"Basen Zewnętrzny", "Basen Sportowy"]

const carousel = document.querySelector('.carousel');
const text_area = document.querySelector(".text-h2");

const interval = setInterval(function(){
    startCarousel();
}, 5000);

var index = 1;
var index2 = 1;

startCarousel = () => {
    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove('fade');
    void carousel.offsetWidth;
    carousel.classList.add('fade');
    if(index > images.length - 1) index = 0;

    text_area.innerHTML = text[index2++];
    if(index2 > text.length - 1) index2 = 0;
}
