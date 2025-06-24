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