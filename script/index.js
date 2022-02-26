// ------------------------------ var\const ---------------------------- //
const covering = document.querySelector(".covering");
const leftPaginatorButton = covering.querySelector(".paginator__button_left");
const rightPaginatorButton = covering.querySelector(".paginator__button_right");
const coveringSlides = covering.querySelectorAll(".covering__slide");
const bikesCardContainer = document.querySelector(".bikes__images");
const bikesTypeButtons = document.querySelectorAll('.bikes__menu-item');
const bikesSelector = document.querySelector(".bikes__selector")
const bikeOptions = bikesSelector.querySelectorAll('.bike-option');
const radioButtons = document.querySelectorAll('.radio__button');
const feedbackInput = document.querySelector('.feedback__email');
const feedbackButton = document.querySelector('.feedback__button');
const burger = document.querySelector('.burger');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const linksInMenu = document.querySelectorAll('.link_menu');

let currentSlideNum = 0;

const bikesCardsInfo = [
    [
        {
            bikeName: "Cervelo Caledonia-5",
            src: "./images/bikes/hw-carvelo.png",
        },
        {
            bikeName: "Cannondale Systemsix Himod",
            src: "./images/bikes/hw-cannodale.png"
        },
        {
            bikeName: "Trek Domane SL-7",
            src: "./images/bikes/hw-trek.png",
        }
    ],
    [
        {
            bikeName: "Cervelo Aspero GRX 810",
            src: "./images/bikes/gravel-carvelo.png",
        },
        {
            bikeName: "Specialized S-Works Diverge",
            src: "./images/bikes/gravel-specialized.png"
        },
        {
            bikeName: "Cannondale Topstone Lefty 3",
            src: "./images/bikes/gravel-cannodale.png",
        }
    ],
    [
        {
            bikeName: "Specialized S-Works Shiv",
            src: "./images/bikes/tt-specialized.png",
        },
        {
            bikeName: "BMC Timemachine 01 ONE",
            src: "./images/bikes/tt-bmc.png"
        },
        {
            bikeName: "Cervelo P-Series",
            src: "./images/bikes/tt-carvelo.png",
        }
    ],
]

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

function renderBikeCards(cardInfo) {
    const bikesCardElement = document.querySelector('#bikeCardTemplate').content
        .querySelector(".bikes__card")
        .cloneNode(true);
    const bikeCardSrc = bikesCardElement.querySelector(".bikes__img")

    bikeCardSrc.src = cardInfo.src;
    bikeCardSrc.alt = cardInfo.bikeName
    bikesCardElement.querySelector(".bikes__caption").textContent = cardInfo.bikeName;

    return bikesCardElement;
}

function addBikeCards(cardElement) {
    const numBikesOfType = 3;

    for (let i = 0; i < numBikesOfType; i++) {
        bikesCardContainer.append(renderBikeCards(cardElement[i]));
    }
    const renderedBikes = bikesCardContainer.querySelectorAll('.bikes__card');

    for (let i = 1; i < numBikesOfType; i++) {
        renderedBikes[i].classList.add('bikes__card_not-active')
    }
}

function deleteBikesCard() {
    const renderedBikes = bikesCardContainer.querySelectorAll('.bikes__card');
    renderedBikes.forEach(el => {
        el.remove();
    })
}

function handleBikesCard(index) {
    deleteBikesCard();
    addBikeCards(bikesCardsInfo[index]);
}

function handleRadio(index) {
    const bikesCards = bikesCardContainer.querySelectorAll('.bikes__card');
    bikesCards.forEach(el => {
        el.classList.add('bikes__card_not-active')
    });
    if (radioButtons[index].checked) {
        bikesCards[index].classList.remove('bikes__card_not-active');
    }
}
// ------------------------------ listeners ---------------------------- //
rightPaginatorButton.addEventListener("click", slideLeft);
leftPaginatorButton.addEventListener("click", slideRight);

for (let i = 0; i < bikesTypeButtons.length; i++) {
    bikesTypeButtons[i].addEventListener('click', function (evt) {
        event.preventDefault();
        handleBikesCard(i);
        handleRadio(i);
    });
}

for (let i = 0; i < bikeOptions.length; i++) {
    bikesSelector.addEventListener('click', () => {
        const count = bikeOptions.length;
        if (typeof (count) === "undefined" || count < 2) {
            deleteBikesCard();
            handleBikesCard(i);
            handleRadio(i);
        }
    });

    bikesSelector.addEventListener('change', () => {
        const currentValue = bikesSelector.value;
        switch (currentValue) {
            case 'Шоссе':
                handleBikesCard(0);
                radioButtons[0].checked = true;
                break;
            case 'Грэвел':
                handleBikesCard(1);
                radioButtons[0].checked = true;
                break;
            case 'ТТ':
                handleBikesCard(2);
                radioButtons[0].checked = true;
                break;
        }
    });
}

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', () => {
        handleRadio(i)
    });
}

feedbackInput.addEventListener('focus', () => {
    feedbackInput.value = "";
    feedbackButton.classList.add('feedback__button_active');
});

feedbackButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    feedbackInput.value = "Круто!"
    feedbackButton.classList.remove('feedback__button_active');
    feedbackInput.setAttributeNS(null, "disabled", "");
})

burger.addEventListener('click', ()=> {
    popup.classList.add('popup_opened');
})

popupCloseButton.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
})

linksInMenu.forEach(el => {
    el.addEventListener('click', () =>{
        popup.classList.remove('popup_opened');
    })
})

// ------------------------------ execution ---------------------------- //

addBikeCards(bikesCardsInfo[0]);
