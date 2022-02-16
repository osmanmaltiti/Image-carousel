const nextImage = document.getElementById('next-button');
const previousImage = document.getElementById('prev-button');
const images = document.querySelectorAll('.carousel');

let count = 0;

nextImage.addEventListener('click', () => {
    images[count].setAttribute('class', 'carousel top');
    images.forEach((item, index) => 
        index !== count && item.setAttribute('class', 'carousel'));
    count < images.length - 1 ? count += 1 : count -= count;
    console.log(images)
});

previousImage.addEventListener('click', () => {
    images[count].setAttribute('class', 'carousel top');
    images.forEach((item, index) => 
        index !== count && item.setAttribute('class', 'carousel'));
    count > 0 ? count -= 1 : count += images.length - 1;
    console.log(images)
});

