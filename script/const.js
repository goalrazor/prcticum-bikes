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
const toggleButton = document.querySelector('.toggle__button');
const togglebuttonMobile = document.querySelector('#toggle__button-mobile');
const popupClose = document.querySelector('.popup__close-button');
const toggleLabelLight = document.querySelector('.toggle__label-light');
const toggleLabelDark = document.querySelector('.toggle__label-dark');
const logo = document.querySelector('.logo');

let currentSlideNum = 0;

const bikesCardsInfo = [
    [
        {
            bikeName: "Cervelo Caledonia-5",
            src: "./images/bikes/hw-carvelo.png",
            link: "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN "
        },
        {
            bikeName: "Cannondale Systemsix Himod",
            src: "./images/bikes/hw-cannodale.png",
            link: "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J"
        },
        {
            bikeName: "Trek Domane SL-7",
            src: "./images/bikes/hw-trek.png",
            link: "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF"
        }
    ],
    [
        {
            bikeName: "Cervelo Aspero GRX 810",
            src: "./images/bikes/gravel-carvelo.png",
            link: "https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE"
        },
        {
            bikeName: "Specialized S-Works Diverge",
            src: "./images/bikes/gravel-specialized.png",
            link: "https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9"
        },
        {
            bikeName: "Cannondale Topstone Lefty 3",
            src: "./images/bikes/gravel-cannodale.png",
            link: "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8"
        }
    ],
    [
        {
            bikeName: "Specialized S-Works Shiv",
            src: "./images/bikes/tt-specialized.png",
            link: "https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9 "
        },
        {
            bikeName: "BMC Timemachine 01 ONE",
            src: "./images/bikes/tt-bmc.png",
            link: "https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835"
        },
        {
            bikeName: "Cervelo P-Series",
            src: "./images/bikes/tt-carvelo.png",
            link: "https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q"
        }
    ],
]
