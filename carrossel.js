document.addEventListener('DOMContentLoaded', function() {
    const sliderLeft = document.querySelector('.slider-left');
    const sliderRight = document.querySelector('.slider-right');
    const vendas = document.querySelector('.vendas');
    const items = document.querySelectorAll('.card-categoria');
    const numItems = items.length;
    const visibleItems = 5; // Quantidade de itens visíveis de cada vez
    let currentIndex = 0;

    sliderLeft.addEventListener('click', function() {
        currentIndex = Math.max(currentIndex - 1, 0);
        mostrarSlides();
    });

    sliderRight.addEventListener('click', function() {
        currentIndex = Math.min(currentIndex + 1, numItems - visibleItems);
        mostrarSlides();
    });

    function mostrarSlides() {
        items.forEach(item => {
            item.style.display = 'none';
        });

        for (let i = currentIndex; i < currentIndex + visibleItems; i++) {
            if (items[i]) {
                items[i].style.display = 'inline-block';
            }
        }
    }

    mostrarSlides();
});

