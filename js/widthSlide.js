setWidthHeightSlides();

window.addEventListener("resize", setWidthHeightSlides);

function setWidthHeightSlides() {
    const
        customersItem = document.querySelector("#customers-testimonials .item"),
        galleryImg = document.querySelector(".gallery__items .item"),
        allSliderItem = document.querySelectorAll(".slider__item"),
        allGalleryItems = document.querySelectorAll(".gallery__items");

    if (document.documentElement.clientWidth > 940) {
        const galleryDesktopWidth = document.querySelector(".gallery.desktop").clientWidth;

        allSliderItem.forEach(item => {
            let
                widthAllGalleryItems = 0,
                marginForSliderItem;

            allGalleryItems.forEach(item => {
                widthAllGalleryItems += item.clientWidth;
            });

            marginForSliderItem = (galleryDesktopWidth - widthAllGalleryItems) / (allGalleryItems.length -1);

            item.style.minWidth = galleryImg.clientWidth + "px";
            item.style.maxWidth = galleryImg.clientWidth + "px";
            item.style.height = galleryImg.clientHeight + "px";
            item.style.marginRight = marginForSliderItem + "px";
        });
    } else if (document.documentElement.clientWidth >= 730) {
        const
            customersWidth = document.getElementById("customers-testimonials").clientWidth,
            customersJsBtn1 = document.querySelector("#customers-testimonials .item.js-button1"),
            customersJsBtn2 = document.querySelector("#customers-testimonials .item.js-button2");

        allSliderItem.forEach(item => {
            let widthAllCustomersItems = 0;

            widthAllCustomersItems += customersJsBtn1.clientWidth;
            widthAllCustomersItems += customersJsBtn2.clientWidth;

            let marginForSliderItem = (customersWidth - widthAllCustomersItems)/4;

            item.style.minWidth = customersItem.clientWidth + "px";
            item.style.maxWidth = customersItem.clientWidth + "px";
            item.style.height = customersItem.clientHeight + "px";
            item.style.marginLeft = marginForSliderItem + "px";
            item.style.marginRight = marginForSliderItem + "px";
        });
    } else {
        const
            customersWidth = document.getElementById("customers-testimonials").clientWidth,
            customersJsBtn1 = document.querySelector("#customers-testimonials .item.js-button1");

        allSliderItem.forEach(item => {
            let marginForSliderItem = (customersWidth - customersJsBtn1.clientWidth) / 2;

            item.style.minWidth = customersItem.clientWidth + "px";
            item.style.maxWidth = customersItem.clientWidth + "px";
            item.style.height = customersItem.clientHeight + "px";
            item.style.marginLeft = marginForSliderItem + "px";

            if (document.documentElement.clientWidth > 700 && document.documentElement.clientWidth <= 729) {
                item.style.marginRight = marginForSliderItem + 7 + "px";
            } else if (document.documentElement.clientWidth > 650 && document.documentElement.clientWidth <= 700) {
                item.style.marginRight = marginForSliderItem + 6.5 + "px";
            } else if (document.documentElement.clientWidth > 540 && document.documentElement.clientWidth <= 650) {
                item.style.marginRight = marginForSliderItem + 6 + "px";
            } else if (document.documentElement.clientWidth >= 460 && document.documentElement.clientWidth <= 540) {
                item.style.marginRight = marginForSliderItem + 5 + "px";
            } else {
                item.style.marginRight = marginForSliderItem + "px";
            }
        });
    }
}