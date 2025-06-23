export function addToCart(product, quantity){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const unitPrice = (product.pricePromo != null && product.pricePromo < product.priceNormal)
        ? product.pricePromo
        : product.priceNormal;

    const existingProduct = cart.find(item => item.id == product.id);

    if(existingProduct){
        existingProduct.quantity += quantity;
    } else{
        cart.push({
            id: product.id,
            name: product.name,
            quantity: quantity,
            priceNormal: product.priceNormal,
            pricePromo: product.pricePromo,
            image: product.images.main,
            avif: product.images.avif,
            code: product.code
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`${product.name} x${quantity}added to cart.`);
}