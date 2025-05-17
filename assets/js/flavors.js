


document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product-content');
    const links = document.querySelectorAll('#flavors a');

    const observer = new IntersectionObserver((entries) => {
        // Buscar la entrada más visible
        let mostVisible = null;
        let maxRatio = 0;

        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');

            // Ignorar portada y footer
            if (id === 'portada' || id === 'footer') return;

            if (entry.intersectionRatio > maxRatio) {
                maxRatio = entry.intersectionRatio;
                mostVisible = entry;
            }
        });

        if (mostVisible) {
            const id = mostVisible.target.getAttribute('id');

            links.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    }, {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10) // 0.0 a 1.0
    });

    products.forEach(section => observer.observe(section));
});



document.addEventListener("DOMContentLoaded", function () {

    const container = document.querySelector('#content-all');
    const nextButton = document.getElementById('prev-donut'); // Botón "Siguiente"
    const prevButton = document.getElementById('next-donut'); // Botón "Volver"

    nextButton.addEventListener('click', () => {
        container.scrollBy({
            top: container.clientHeight,
            behavior: 'smooth'
        });
    });

    prevButton.addEventListener('click', () => {
        container.scrollBy({
            top: -container.clientHeight,
            behavior: 'smooth'
        });
    });
});

