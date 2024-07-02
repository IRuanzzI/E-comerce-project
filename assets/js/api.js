document.addEventListener('DOMContentLoaded', function() {
    const fakeStoreApi = 'https://fakestoreapi.com/products?limit=3';
    let productsLoaded = false;

    // Função para adicionar os produtos no carrossel
    function addProductsToCarousel(products) {
        const carouselInner = document.getElementById('carouselInner');
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

    // Função para carregar produtos se ainda não foram carregados
    function loadProductsIfNeeded() {
        if (!productsLoaded) {
            fetch(fakeStoreApi)
                .then(response => response.json())
                .then(products => {
                    addProductsToCarousel(products);
                    productsLoaded = true; // Marca os produtos como carregados
                })
                .catch(error => {
                    console.error('Erro ao obter produtos da Fake Store:', error);
                });
        }
    }

    // Chama a função para carregar os produtos quando a página for carregada
    loadProductsIfNeeded();
});
