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

    const infoDiv = document.createElement("div");
    
    const tag = document.createElement("b");
    tag.innerText = product.tag;

    const title = document.createElement("p")
    title.innerText = product.name + " " + product.dimensions;

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
        normalPriceP.innerText = `$${product.pricePromo.toFixed(2)}`;
        priceDiv.appendChild(normalPriceP);
    }

    infoDiv.appendChild(tag);
    infoDiv.appendChild(title);
    infoDiv.appendChild(priceDiv);
    
    productDiv.appendChild(infoDiv);

    return productDiv
}