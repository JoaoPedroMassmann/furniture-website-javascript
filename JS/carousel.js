const showcaseCarousel = document.querySelector(".showcase_carousel .carousel");
const arrowButtons = document.querySelectorAll(".showcase_carousel i");
const cardWidth = showcaseCarousel.querySelector(".showcase_card").offsetWidth
const carouselChildrens = [...showcaseCarousel.children]

let isDragging = false, startX, scrollLeftStart;

//Pegar número de cards mostrados na tela
let cardPerView = Math.round(showcaseCarousel.offsetWidth / cardWidth)

//Inserir cópias dos cards no começo
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    showcaseCarousel.insertAdjacentHTML("afterbegin", card.outerHTML)
});

//Inserir cópias dos cards no final
carouselChildrens.slice(0, cardPerView).forEach(card => {
    showcaseCarousel.insertAdjacentHTML("beforeend", card.outerHTML)
})

arrowButtons.forEach(button => {
    button.addEventListener("click", () => {
        showcaseCarousel.scrollLeft += button.id === "left" ? -cardWidth : cardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    showcaseCarousel.classList.add("dragging")
    startX = e.pageX;
    scrollLeftStart = showcaseCarousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    showcaseCarousel.scrollLeft = scrollLeftStart - (e.pageX - startX)
}

const dragStop = () => {
    isDragging = false;
    showcaseCarousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    if(showcaseCarousel.scrollLeft === 0){
        showcaseCarousel.classList.add("no_transition");
        showcaseCarousel.scrollLeft = showcaseCarousel.scrollWidth - (2*showcaseCarousel.offsetWidth);
        showcaseCarousel.classList.remove("no_transition")
    } else if(Math.ceil(showcaseCarousel.scrollLeft) === showcaseCarousel.scrollWidth - showcaseCarousel.offsetWidth){
        showcaseCarousel.classList.add("no_transition");
        showcaseCarousel.scrollLeft = showcaseCarousel.offsetWidth
        showcaseCarousel.classList.remove("no_transition")
    }
}

showcaseCarousel.addEventListener("mousedown", dragStart)
showcaseCarousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
showcaseCarousel.addEventListener("scroll", infiniteScroll);







/* carousel(carousel, index) => {
    const firstCardWidth = carousel.querySelector(".carousel > div").offsetWidth
    const carouselChildrens = [...carousel.children];
    let isDragging = false, starX, startScrollLeft

    //Pega o número de cards que cabem no carossel por vez
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

    //Insere copias dos últimos cards para o início, permitindo scroll inifito
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
    })

    //Insere copias dos primeiros cards para o fim, permitindo scroll inifito
    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML)
    })

    //Funcao para que os botões funcionem
    arrowButton.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth
        })
    });

    const dragStart = (e) => {
        isDragging = true;
        console.log("teste")
        carousel.classList.add("dragging")
        //Grava a posição inivial do cursor
        startX = e.pageX
        startScrollLeft = carousel.scrollLeft
    }

    const dragging = (e) => {
        if(!isDragging) return
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
    }

    const dragStop = () => {
        isDragging = false
        carousel.classList.remove("dragging")
    }

    const infiniteScroll = () => {
        //Se o carossel chega no começo, passe para o fim
        if(carousel.scrollLeft === 0){
            carousel.classList.add("no_transition")
            carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth)
            carousel.classList.remove("no_transition")
        //Se o carossel chega noo fim, passe para o começo
        } else if(carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth){
            carousel.classList.add("no_transition")
            carousel.scrollLeft = carousel.offsetWidth
            carousel.classList.remove("no_transition")
        }
    }

    carousel.addEventListener("mousedown", dragStart)
    carousel.addEventListener("mousemove", dragging)
    document.addEventListener("mouseup", dragStop)
    carousel.addEventListener("scroll", infiniteScroll)
})

 */