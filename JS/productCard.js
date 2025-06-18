export function createProductCard(product, category){
    const productDiv = document.createElement("div");
    productDiv.className = "product_display";
    productDiv.style.cursor = "pointer";

    //evento de clique
    productDiv.addEventListener("click", () => {
        window.location.href = `product.html?id=${product.id}&category=${category}`;
    })

    //wrapper
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "product_image_wrapper";
    imageWrapper.style.backgroundImage = `url(${product.images.fallback})`

    const picture = document.createElement("picture");

    const source = document.createElement("source");
    source.srcset = product.images.avif;
    source.type = "image/avif";

    const img = document.createElement("img");
    img.src = product.images.main;
    img.alt = product.name;
    img.draggable = false;
    img.loading = "lazy";
    
    picture.appendChild(source);
    picture.appendChild(img);
    imageWrapper.appendChild(picture);
    productDiv.appendChild(imageWrapper);

    //color selector
    const colorSelector = document.createElement("div");
    colorSelector.className = "color_selector";

    product.colors.forEach((colorSrc, index) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `color_${product.id}`;
        input.id = `color_${product.id}_${index}`;
        input.hidden = true;

        const label = document.createElement("label");
        label.setAttribute("for", input.id);
        label.style.backgroundImage = `url(${colorSrc})`;

        colorSelector.appendChild(input);
        colorSelector.appendChild(label);
    });

    productDiv.appendChild(colorSelector);

    const infoDiv = document.createElement("div");
    
    const tag = document.createElement("b");
    tag.innerText = product.tag;

    const title = document.createElement("p")
    title.innerText = product.name + " " + product.dimensions;

    const priceRange = document.createElement("p");
    priceRange.innerText = product.priceRange;

    infoDiv.appendChild(tag);
    infoDiv.appendChild(title);
    infoDiv.appendChild(priceRange);
    
    productDiv.appendChild(infoDiv);

    return productDiv
}