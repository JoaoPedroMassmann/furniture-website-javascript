import { renderProductPage } from './productPage.js';

window.onload = async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const category = params.get('category');

    try{
        const response = await fetch('./DATA/products.json');
        if(!response.ok) throw new Error('Failed to load products JSON');

        const products = await response.json();

        if(products[category]){
            const product = products[category].find(p => p.id == productId);

            if(product) {
                renderProductPage(product);
            }
            else{
                console.error(`id=${productId} not found in category=${category}`);
            }
        }
        else{
            console.error(`Category "${category} not found in JSON`);
        }   
    } catch (error) {
        console.error('Error loading product page: ', error);
    }
};