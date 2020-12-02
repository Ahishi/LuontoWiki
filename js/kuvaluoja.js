function createImage(src, title) {
    let image = new Image();

    image.src = src;
    image.className = "image";
    image.alt = title + " -kuva";

    return image;
}