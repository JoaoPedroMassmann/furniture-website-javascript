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

    const thumbImagePicture = document.createElement("picture");

    const thumbImageSource = document.createElement("source")
    thumbImageSource.srcset = product.images.avif;
    thumbImageSource.type = "image/avif";

    const thumbImageImg = document.createElement("img");
    thumbImageImg.src = product.images.main;
    thumbImageImg.alt = `${product.name} thumbnail`;
    thumbImageImg.loading = 'lazy';
    thumbImageImg.draggable = false;

    thumbImagePicture.appendChild(thumbImageSource);
    thumbImagePicture.appendChild(thumbImageImg);
    imageSelectorDiv.appendChild(thumbImagePicture);
    productDisplayDiv.appendChild(imageSelectorDiv);

    //info

    const categoriesDiv = document.createElement("div");
    categoriesDiv.className = "product_categories";
    const tag = document.createElement("strong");
    tag.innerText = product.tag;
    categoriesDiv.appendChild(tag);
    productInfoDiv.appendChild(categoriesDiv);

    const title = document.createElement('h1')
    title.className = 'product_name';
    title.innerText = `${product.name} ${product.dimensions || ''}`;
    productInfoDiv.appendChild(title);

    const priceDiv = document.createElement("div");
    const price = document.createElement("span");
    price.className = "price";
    price.innerText = product.priceRange;
    priceDiv.appendChild(price);
    productInfoDiv.appendChild(priceDiv);

    const colorTitle = document.createElement("p");
    colorTitle.innerText = "Select Colour";

    const colorSelector = document.createElement("div");
    colorSelector.className = "color_selector";

    product.colors.forEach((colorSrc, index) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `color_${product.id}`;
        input.id = `color_${product.id}_${index}`;
        input.hidden = true;
        if(index === 0) input.checked = true;

        const label = document.createElement("label");
        label.setAttribute("for", input.id);
        label.style.backgroundImage = `url(${colorSrc})`

        colorSelector.appendChild(input);
        colorSelector.appendChild(label);
    })
    productInfoDiv.appendChild(colorSelector);

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

    const codeDiv = document.createElement("div");
    codeDiv.classname = "product_code";
    const codeP = document.createElement("p");
    codeP.innerText = "Product Code: ";
    const codeB = document.createElement("strong");
    codeB.innerText = product.id;
    codeDiv.appendChild(codeP);
    codeDiv.appendChild(codeB);
    productInfoDiv.appendChild(codeDiv);

    const buttonAddCart = document.createElement("button");
    buttonAddCart.type = "button";
    buttonAddCart.innerText = "Add To Cart";
    buttonAddCart.className = "btn btn-secondary";
    productInfoDiv.appendChild(buttonAddCart);

   container.appendChild(productDisplayDiv);
   container.appendChild(productInfoDiv);

}