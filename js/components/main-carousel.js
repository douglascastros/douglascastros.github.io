const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
const cardWidth = parseInt(((window.innerWidth - 170) / 6) + 3);

let pixels = 0;

btnRight.addEventListener('click', function () {
    let limit = parseInt(elements.style.transform.replace(/\D/g, ''));

    if (limit !== cardWidth) {
        pixels -= cardWidth;
        elements.style = `transform: translateX(${pixels}px)`;
    }
});

btnLeft.addEventListener('click', function () {
    let limit = parseInt(elements.style.transform.replace(/\D/g, ''));

    if (limit === cardWidth) {
        pixels += cardWidth;
        elements.style = `transform: translateX(${pixels}px)`;
    }
});