let index = 0;

function mudarSlide(direcao) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    index += direcao;

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    slides.style.transform = `translateX(${-index * 100}%)`;
}