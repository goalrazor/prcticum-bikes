// ------------------------------ var\const ---------------------------- //
const covering = document.querySelector(".covering");
const leftPaginatorButton = covering.querySelector(".paginator__button_left");
const rightPaginatorButton = covering.querySelector(".paginator__button_right");
const coveringSlides = covering.querySelectorAll(".covering__slide");
let currentSlideNum = 0;

// ------------------------------ functions ---------------------------- //

function getGalleryIconUrl(galleryImg) {
    const iconType = galleryImg.src.slice(galleryImg.src.lastIndexOf('/'));
    switch (iconType) {
        case "/hw-pic.jpg":
            return "../../../images/hw-icon.svg";
        case "/gravel-pic.jpg":
            return "../../../images/gravel-icon.svg";
        case "/tt-pic.jpg":
            return "../../../images/tt-icon.svg";
    }
}

function setGalleryIcon(currentSlideElement) {
    const currentGalleryImage = currentSlideElement.querySelector(".gallery__img");
    const currentGalleryIconElement = currentSlideElement.querySelector(".gallery__icon");
    currentGalleryIconElement.style.backgroundImage = "url(" + getGalleryIconUrl(currentGalleryImage) + ")";
}

function slideLeft() {
    coveringSlides[currentSlideNum].style.display = 'none';
    currentSlideNum++;
    if (currentSlideNum >= coveringSlides.length) {
        currentSlideNum = 0;
    }
    coveringSlides[currentSlideNum].style.display = 'flex';

    setGalleryIcon(coveringSlides[currentSlideNum]);
}

function slideRight() {
    coveringSlides[currentSlideNum].style.display = 'none';
    currentSlideNum = currentSlideNum - 1;
    if (currentSlideNum < 0) {
        currentSlideNum = coveringSlides.length - 1;
    }
    coveringSlides[currentSlideNum].style.display = 'flex';

    setGalleryIcon(coveringSlides[currentSlideNum]);
}

// ------------------------------ listeners ---------------------------- //
rightPaginatorButton.addEventListener("click", slideLeft);
leftPaginatorButton.addEventListener("click", slideRight);

// ------------------------------ execution ---------------------------- //
