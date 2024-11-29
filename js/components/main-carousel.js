const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');

let pixels = 0;

btnRight.addEventListener('click', function () {
    let limit = parseInt(elements.style.transform.replace(/\D/g, ''));

    if (limit !== 215) {
        pixels -= 215;
        elements.style = `transform: translateX(${pixels}px)`;
    }
});

btnLeft.addEventListener('click', function () {
    let limit = parseInt(elements.style.transform.replace(/\D/g, ''));

    if (limit === 215) {
        pixels += 215;
        elements.style = `transform: translateX(${pixels}px)`;
    }
});