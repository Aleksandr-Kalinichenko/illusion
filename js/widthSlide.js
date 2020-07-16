setWidthHeightSlides();

window.addEventListener("resize", setWidthHeightSlides);

function setWidthHeightSlides() {
    const
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
    } else {
        allSliderItem.forEach(item => {
            item.style.minHeight = item.clientWidth + "px";
            item.style.height = item.clientWidth + "px";
            item.style.maxHeight = item.clientWidth + "px";
        });
    }
}