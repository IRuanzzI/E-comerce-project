document.addEventListener('DOMContentLoaded', function() {
    const fakeStoreApi = 'https://fakestoreapi.com/products';
    const fakeStoreApiLimit = 'https://fakestoreapi.com/products?limit=3';

    async function fetchProducts(url) {
        const response = await fetch(url);
        const products = await response.json();
        return products;
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function addProductsToCarousel(products, carouselInnerId, limit = null) {
        if (limit !== null) {
            products = products.slice(0, limit);
        } else {
            shuffle(products); // Embaralha os produtos
        }

        const carouselInner = document.getElementById(carouselInnerId);
        carouselInner.innerHTML = ''; // Limpa os itens existentes

        products.forEach((product, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');

            // Define o primeiro item como ativo
            if (index === 0) {
                carouselItem.classList.add('active');
            }

            const img = document.createElement('img');
            img.classList.add('d-block', 'w-100');
            img.src = product.image;
            img.alt = product.title;

            carouselItem.appendChild(img);
            carouselInner.appendChild(carouselItem);
        });
    }

    async function initializeCarousels() {
        const productsLimited = await fetchProducts(fakeStoreApiLimit);
        const productsAll = await fetchProducts(fakeStoreApi);

        addProductsToCarousel(productsLimited, 'carouselInner', 3); // Primeiro carrossel com limite de 3
        addProductsToCarousel(productsAll, 'carouselInnerAl'); // Segundo carrossel com todos os itens aleatórios
    }

    initializeCarousels();
});