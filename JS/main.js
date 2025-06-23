import { createProductCard } from './productCard.js';
import { renderProductPage } from './productPage.js';


window.onload = async () =>{
    try {
        const response = await fetch('./DATA/products.json');
        if (!response.ok) throw new Error("Failed to load JSON");

        const products = await response.json();

        for (const category in products){
            const displayArea = document.querySelector(`.products[data-category="${category}"]`)

            if(displayArea){
                products[category].forEach(product => {
                    const card = createProductCard(product, category);
                    displayArea.appendChild(card);
                })
            }
            else{
                console.warn(`No container found for ${category}`)
            }
        }
    } catch (error) {
        console.error("Error loading products:", error);
    }
}
