import { addToCart } from "./cart.js";

export function renderProductPage(product) {
    const container = document.querySelector(".product_area");
    container.innerHTML = ``;

    const productDisplayDiv = document.createElement("div")
    productDisplayDiv.className = "product_display";

    const productInfoDiv = document.createElement("div");
    productInfoDiv.className = "product_info";

    const mainImagePicture = document.createElement("picture");
    
    const mainImageSource = document.createElement("source");
    mainImageSource.srcset = product.images.avif;
    mainImageSource.type = "image/avif";

    const mainImageImg = document.createElement("img");
    mainImageImg.className = "main_display";
    mainImageImg.src = product.images.main;
    mainImageImg.alt = product.name;
    mainImageImg.loading = "lazy";
    mainImageImg.draggable = false;

    mainImagePicture.appendChild(mainImageSource);
    mainImagePicture.appendChild(mainImageImg);
    productDisplayDiv.appendChild(mainImagePicture);

    const imageSelectorDiv = document.createElement("div");
    imageSelectorDiv.className = "image_selector";

    product.images.gallery.forEach((img) =>{
        const thumbPicture = document.createElement("picture")

        const thumbSource = document.createElement("source");
        thumbSource.srcset = img.avif;
        thumbSource.type = "image/avif";

        const thumbImg = document.createElement("img");
        thumbImg.src = img.main;
        thumbImg.alt = `${product.name} image thumbnail`;
        thumbImg.loading = 'lazy';
        thumbImg.draggable = false;

        thumbImg.addEventListener('click', () => {
            mainImageSource.srcset = img.avif;
            mainImageImg.src = imgObj.main;
        })

        thumbPicture.appendChild(thumbSource);
        thumbPicture.appendChild(thumbImg);
        imageSelectorDiv.appendChild(thumbPicture);
    })
    
    productDisplayDiv.appendChild(imageSelectorDiv);

    //info

    const categoriesDiv = document.createElement("div");
    categoriesDiv.className = "product_categories";
    const tag = document.createElement("strong");
    tag.innerText = product.tag;
    categoriesDiv.appendChild(tag);
    productInfoDiv.appendChild(categoriesDiv);

    const title = document.createElement('h2')
    title.className = 'product_name';
    title.innerText = `${product.name} ${product.dimensions || ''}`;
    productInfoDiv.appendChild(title);

    const priceDiv = document.createElement("div");
    const normalPriceP = document.createElement("p");
    priceDiv.className = ("price");

    if (product.pricePromo && product.pricePromo < product.priceNormal) {
        const promoPriceP = document.createElement('p');
        promoPriceP.innerText = `$${product.pricePromo.toFixed(2)}`;
        promoPriceP.style.color = "#8B0000";
        promoPriceP.style.fontWeight = "bold";
        priceDiv.appendChild(promoPriceP);
        
        normalPriceP.innerText = `$${product.priceNormal.toFixed(2)}`;
        normalPriceP.style.color = "gray";
        normalPriceP.style.textDecoration = "line-through";
        normalPriceP.style.fontSize = "0.9em";
        priceDiv.appendChild(normalPriceP);

    }

    else{
        const normalPriceP = document.createElement("p");
        normalPriceP.innerText = `$${product.priceNormal.toFixed(2)}`;
        priceDiv.appendChild(normalPriceP);
    }

    productInfoDiv.appendChild(priceDiv)

    const paymentP = document.createElement('p');
    paymentP.innerText = "Up to 12x installments without interest";
    productInfoDiv.appendChild(paymentP);

    const desc = document.createElement('p');
    desc.innerText = product.description;
    productInfoDiv.appendChild(desc);

    const deliveryTitle = document.createElement("p");
    deliveryTitle.innerText = "Check Delivery Fees:";
    productInfoDiv.appendChild(deliveryTitle);

    const deliveryDiv = document.createElement("div");
    deliveryDiv.className = "delivery_check";
    const deliveryIcon = document.createElement("i");
    deliveryIcon.classname = "fa fa-search";
    const deliveryInput = document.createElement("input");
    deliveryInput.type = "text";
    deliveryInput.placeholder = "Enter ZIP code";
    deliveryDiv.appendChild(deliveryIcon);
    deliveryDiv.appendChild(deliveryInput);
    productInfoDiv.appendChild(deliveryDiv);

    const quantityP = document.createElement('p');
    quantityP.innerText = "Select Quantity:"

    const quantityDiv = document.createElement('div');
    quantityDiv.className = 'quantity_selector';

    const minusButton = document.createElement('button');
    minusButton.innerText = '-';

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = 1;
    quantityInput.min = 1;

    const plusButton = document.createElement('button');
    plusButton.innerText = '+';

    minusButton.addEventListener('click', () =>{
        let value = parseInt(quantityInput.value);
        if (value > 1) quantityInput.value = value - 1
    })

    plusButton.addEventListener('click', () =>{
        let value = parseInt(quantityInput.value);
    quantityInput.value = value + 1;
    })

    quantityDiv.appendChild(minusButton);
    quantityDiv.appendChild(quantityInput);
    quantityDiv.appendChild(plusButton);
    productInfoDiv.appendChild(quantityP);
    productInfoDiv.appendChild(quantityDiv);

    const codeP = document.createElement("p");
    codeP.className = "product_code";
    codeP.innerText = `Product Code: ${product.code}`;
    productInfoDiv.appendChild(codeP);

    const paymentTypeP = document.createElement('p');
    paymentTypeP.innerText = "Payment methods available:"

    const paymentMethodsDiv = document.createElement('div');
    paymentMethodsDiv.className = "payment_methods";

    const paymentIcons = [
        { src: 'IMG/payment/Mastercard.svg', alt: 'Mastercard' },
        { src: 'IMG/payment/Visa.svg', alt: 'Visa' },
        { src: 'IMG/payment/Amex.svg', alt: 'American Express' },
        { src: 'IMG/payment/Discover.svg', alt: 'Discover' },
        { src: 'IMG/payment/DinersClub.svg', alt: 'Diners Club' },
        { src: 'IMG/payment/Elo.svg', alt: 'Elo' },
        { src: 'IMG/payment/Affirm.svg', alt: 'Affirm' }
    ];

    paymentIcons.forEach(icon => {
        const img = document.createElement('img');
        img.src = icon.src;
        img.alt = icon.alt;
        paymentMethodsDiv.appendChild(img);
    });

    productInfoDiv.appendChild(paymentTypeP)
    productInfoDiv.appendChild(paymentMethodsDiv);

    const buttonAddCart = document.createElement("button");
    buttonAddCart.type = "button";
    buttonAddCart.innerText = "Add To Cart";
    buttonAddCart.className = "add_cart";

    buttonAddCart.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCart(product, quantity);
    });
    
    productInfoDiv.appendChild(buttonAddCart);

    container.appendChild(productDisplayDiv);
    container.appendChild(productInfoDiv);
}