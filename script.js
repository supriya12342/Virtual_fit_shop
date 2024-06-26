const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.clothing-item');

items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        const carouselRect = carousel.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const offset = itemRect.left - carouselRect.left - (carouselRect.width / 2) + (itemRect.width / 2);
        carousel.style.transform = `translateX(${-offset}px)`;
    });

    item.addEventListener('mouseleave', () => {
        carousel.style.transform = 'translateX(0)';
    });
});
