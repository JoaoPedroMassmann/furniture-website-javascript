document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector(".cart_area");
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if(cart.length === 0){
        cartContainer.innerHTML = "<p>Your cart is empty.</p>"
        return;
    }

    const renderCart = () => {
        cartContainer.innerHTML = '';
        let totalItems = 0;
        let totalCartPrice = 0;
        let totalOriginalPrice = 0;

        cart.forEach((item, index) => {
            totalItems += item.quantity;

            const unitPrice = (item.pricePromo != null && item.pricePromo < item.priceNormal)
                ? item.pricePromo
                : item.priceNormal;

            const itemOriginalTotal = item.priceNormal * item.quantity;
            const itemDiscountedTotal = unitPrice * item.quantity;

            totalOriginalPrice += itemOriginalTotal;
            totalCartPrice += itemDiscountedTotal;

            const itemDiv = document.createElement('div');
            itemDiv.className = "cart_item";

            const picture = document.createElement('picture');

            const sourceAvif = document.createElement('source');
            sourceAvif.type = 'image/avif';
            sourceAvif.srcset = item.avif;

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.loading = "lazy";

            picture.appendChild(sourceAvif);
            picture.appendChild(img);

            const infoDiv = document.createElement('div');
            infoDiv.className = "cart_info";

            const nameP = document.createElement('p');
            nameP.innerText = item.name;

            const quantityP = document.createElement('p');
            quantityP.innerText = `Quantity: ${item.quantity}`;

            const unitPriceP = document.createElement('p');
            if (item.pricePromo != null && item.pricePromo < item.priceNormal) {
            unitPriceP.innerHTML = `
                Unitary Price: 
                <span style="color: #d00; font-weight: bold;">$${item.pricePromo.toFixed(2)}</span>
                <span style="text-decoration: line-through; color: #888;">$${item.priceNormal.toFixed(2)}</span> 
                `;
            } else {
                unitPriceP.innerText = `Unitary Price: $${item.priceNormal.toFixed(2)}`;
            }

            const itemTotalP = document.createElement('p');
            itemTotalP.innerText = `Item Total: $${itemDiscountedTotal.toFixed(2)}`

            const itemSubtotalP = document.createElement('p');
            itemSubtotalP.innerText = `Item Subtotal (without discount): $${itemOriginalTotal.toFixed(2)}`;

            const quantityDiv = document.createElement('div');
            quantityDiv.className = "quantity_selector";

            const minusBtn = document.createElement('button');
            minusBtn.innerText = "-";
            minusBtn.addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity--;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCart();
                }
            });

            const quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.min = 1;
            quantityInput.value = item.quantity;
            quantityInput.addEventListener('change', () => {
                let newQuantity = parseInt(quantityInput.value);
                if (!isNaN(newQuantity) && newQuantity >= 1) {
                    item.quantity = newQuantity;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCart();
                } else {
                    quantityInput.value = item.quantity;
                }
            });

            const plusBtn = document.createElement('button');
            plusBtn.innerText = "+";
            plusBtn.addEventListener('click', () => {
                item.quantity++;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            });

            quantityDiv.appendChild(minusBtn);
            quantityDiv.appendChild(quantityInput);
            quantityDiv.appendChild(plusBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList = "delete_button"
            deleteBtn.innerText = "Delete Item";
            deleteBtn.addEventListener('click', () => {
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            });

            infoDiv.appendChild(nameP);
            infoDiv.appendChild(quantityP);
            infoDiv.appendChild(unitPriceP);
            infoDiv.appendChild(quantityDiv)
            infoDiv.appendChild(itemTotalP);
            infoDiv.appendChild(itemSubtotalP);
            infoDiv.appendChild(deleteBtn);

            itemDiv.appendChild(picture);
            itemDiv.appendChild(infoDiv);

            cartContainer.appendChild(itemDiv);
        });

        const totalDiscount = totalOriginalPrice - totalCartPrice;

        const subtotalP = document.createElement('p');
        subtotalP.innerText = `Subtotal (without discounts): $${totalOriginalPrice.toFixed(2)}`;

        const discountP = document.createElement('p');
        discountP.innerText = `Total Discount: -$${totalDiscount.toFixed(2)}`;

        const totalP = document.createElement('p');
        totalP.innerText = `Total Items: ${totalItems} | Total Price: $${totalCartPrice.toFixed(2)}` ;
        cartContainer.appendChild(subtotalP);
        cartContainer.appendChild(discountP);
        cartContainer.appendChild(totalP);

        const buyButton = document.createElement('button');
        buyButton.innerText = "Buy Now";
        buyButton.className ='buy_button';
        buyButton.addEventListener('click', () => {
            alert('Proceeding to checkout...'); 
            window.location.href = "index.html";
        });
        cartContainer.appendChild(buyButton);

        const clearButton = document.createElement('button');
        clearButton.innerText = "Clear cart";
        clearButton.className = 'clear_button';
        clearButton.addEventListener('click', () =>{
            localStorage.removeItem('cart');
            location.reload();
        });
        cartContainer.appendChild(clearButton)
    };

    renderCart();
})