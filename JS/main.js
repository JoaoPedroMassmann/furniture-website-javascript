import { createProductCard } from './productCard.js';

window.onload = async () =>{
    const carousel = document.getElementById("sofas");

    try {
        const response = await fetch('./DATA/products.json');
        if (!response.ok) throw new Error("Failed to load JSON");

        const products = await response.json();

        for (const category in products){
            const carousel = document.querySelector(`.carousel[data-category="${category}"]`)

            if(carousel){
                products[category].forEach(product => {
                    const card = createProductCard(product);
                    carousel.appendChild(card);
                })
            }
            else{
                console.warn(`No carousel container for ${category}`)
            }
        }

        products.forEach(product => {
            const card = createProductCard(product);
            carousel.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading products:", error);
    }
}