export function renderProductPage(product) {
    const container = document.getElementById("product_area");
    container.innerHTML = ``;

    const productDiv = document.createElement("div")
    productDiv.className = "product_display";

   //image area
   const imageWrapper = document.createElement("div");
   imageWrapper.className = "product_image_wrapper";
   imageWrapper.style.backgroundImage = `url(${product.images.fallback})`;

   const picture = documet.createElement("picture");

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

   product.colos.forEach((colorSrc, index) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `color_${product.id}`;
    input.id = `color_${product.id}_${index}`;
    input.hidden = true;
    if(index === 0) input.checked = true;

    const label = document.createElement("label");
    label.setAttribute("for", input.id);
    label.style.backgroundImage = `url(${colorSrc})`;

    colorSelector.appendChild(input);
    colorSelector.appendChild(label);
   })

   productDiv.appendChild(colorSelector);

   //info section
   const infoDiv = document.createElement("div");

   const tag = document.createElement("strong");
   tag.innerText = product.tag;
   infoDiv.appendChild(tag);

   const title = document.createElement("h1");
   title.innerText = `${product.name} ${product.dimensions || ""}`;
   infoDiv.appendChild(title);

   const priceRange = document.createElement("p");
   priceRange.innerText = product.priceRange;
   infoDiv.appendChild(priceRange);

   productDive.appendChild(infoDiv);

   const buttonAddCart = document.createElement("button");
   buttonAddCart.innerText = "Add To Cart";
   buttonAddCart.className = "btn btn-secondary";
   productDiv.appendChild(buttonAdd);

   const buttonBuy = document.createElement("button");
   buttonBuy.innerText = "Buy Now";
   buttonBuy.className = "btn btn-secondary";
   productDiv.appendChild(buttonBuy);

   container.appendChild

}