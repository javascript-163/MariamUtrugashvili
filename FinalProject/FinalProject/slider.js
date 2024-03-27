const carouselContainer = document.getElementById("carousel");
const carouselContent = document.getElementById("carouselContent");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
    carouselContainer.scrollLeft += carouselContainer.offsetWidth;
});

prevBtn.addEventListener("click", () => {
    carouselContainer.scrollLeft -= carouselContainer.offsetWidth;
});
