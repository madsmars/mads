function generateAllImages() {
    const mainImage = $(".gallery a img").parent()
    const allGallery = $("#all .gallery")
    
    for (let i = 0; i < mainImage.length; i++) {
        allGallery.append(mainImage[i])
    }
}

generateAllImages()