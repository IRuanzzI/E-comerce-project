const fakeStoreApi = 'https://fakestoreapi.com/products?limit=3';

// Função para adicionar os produtos no carrossel
function addProductsToCarousel(products) {
    const carouselInner = document.getElementById('carouselInner');

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

// Chamada para obter os produtos da Fake Store
fetch(fakeStoreApi)
    .then(response => response.json())
    .then(products => {
        addProductsToCarousel(products);
    })
    .catch(error => {
        console.error('Erro ao obter produtos da Fake Store:', error);
    });