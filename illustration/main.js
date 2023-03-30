
displayGalleryOnLoad();

function displayGalleryOnLoad() {
    
    const URL = window.location.href.split('#');
    console.log(window.location.href)

    // checks if the default page should be loaded
    if(URL.length == 1) {
        return;
    }

    const selectedGallery = "#" + URL[URL.length - 1];
    $(`${selectedGallery}`).show();
    $(".gallery-container").not(`${selectedGallery}`).hide();
}

// any time one of the .gallery-links is clicked...
$('.gallery-link').click(function () {

    console.log("hello")

    const selectedGallery = $(this).attr('href');
    console.log(selectedGallery)

    $(`${selectedGallery}`).show();
    $(".gallery-container").not(`${selectedGallery}`).hide();
})

function generateAllImages() {
    const mainImage = $(".gallery a img").parent()
    const allGallery = $("#all .gallery")
    
    for (let i = 0; i < mainImage.length; i++) {
        allGallery.append(mainImage[i])
    }
}

generateAllImages()