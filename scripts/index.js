// ------------------------------ functions ---------------------------- //

function getGalleryIconUrl(galleryImg) {
  const iconType = galleryImg.src.slice(galleryImg.src.lastIndexOf('/'));
  switch (iconType) {
    case "/hw-pic.jpg":
      return "../images/hw-icon.svg";
    case "/gravel-pic.jpg":
      return "../images/gravel-icon.svg";
    case "/tt-pic.jpg":
      return "../images/tt-icon.svg";
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
  bikeCardSrc.alt = cardInfo.bikeName;
  bikesCardElement.href = cardInfo.link;
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

function setDarkIcons() {
  popupClose.style
    .setProperty('background-image', 'url(\'./images/close-icon.svg\')');
  toggleLabelLight.style
    .setProperty('background-image', 'url(\'./images/dark-scheme-sun-icon.svg\')');
  toggleLabelDark.style
    .setProperty('background-image', 'url(\'./images/dark-scheme-moon-icon.svg\')');
  burger.style
    .setProperty('background-image', 'url(\'./images/burger-light.svg\')');
  logo.style
    .setProperty('background-image', 'url(\'./images/logo-light.svg\')');
}

function setLightIcons() {
  popupClose.style
    .setProperty('background-image', 'url(\'./images/close-icon-dark.svg\')');
  toggleLabelLight.style
    .setProperty('background-image', 'url(\'./images/light-scheme-sun-icon.svg\')');
  toggleLabelDark.style
    .setProperty('background-image', 'url(\'./images/light-scheme-moon-icon.svg\')');
  burger.style
    .setProperty('background-image', 'url(\'./images/burger.svg\')');
  logo.style
    .setProperty('background-image', 'url(\'./images/logo.svg\')');
}

function handleToggle() {
  const themeElements = document.querySelectorAll('.color-theme');
  if (toggleButton.checked || togglebuttonMobile.checked) {
    themeElements.forEach((el) => {
      el.classList.add('color-theme_dark');
    });
    setDarkIcons();
  } else {
    themeElements.forEach((el) => {
      el.classList.remove('color-theme_dark');
    });
    setLightIcons();
  }
}

// ------------------------------ listeners ---------------------------- //
rightPaginatorButton.addEventListener("click", slideLeft);
leftPaginatorButton.addEventListener("click", slideRight);

for (let i = 0; i < bikesTypeButtons.length; i++) {
  bikesTypeButtons[i].addEventListener('click', () => {
    for (let k = 0; k < bikesTypeButtons.length; k++) {
      bikesTypeButtons[k].classList.remove('bikes__menu-item_active')
    }
    event.preventDefault();
    handleBikesCard(i);
    handleRadio(i);
    bikesTypeButtons[i].classList.add('bikes__menu-item_active')
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
  feedbackInput.style.outline = 'none';
  feedbackInput.value = "";
  feedbackButton.classList.add('feedback__button_active');
});
feedbackButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const mailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (feedbackInput.value.match(mailRegExp)) {
    feedbackInput.value = "Круто!"
    feedbackButton.classList.remove('feedback__button_active');
  } else {
    feedbackInput.style.outline = '1px solid red';
  }
});


burger.addEventListener('click', () => {
  popup.classList.add('popup_opened');
})

popupCloseButton.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
})

linksInMenu.forEach(el => {
  el.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
  })
})

toggleButton.addEventListener('click', () => {
  handleToggle();
});
togglebuttonMobile.addEventListener('click', () => {
  handleToggle();
});

// ------------------------------ execution ---------------------------- //

addBikeCards(bikesCardsInfo[0]);
