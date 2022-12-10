
displayGalleryOnLoad();

function displayGalleryOnLoad() {
    
    const URL = window.location.href.split('#');

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

    const selectedGallery = $(this).attr('href');

    $(`${selectedGallery}`).show();
    $(".gallery-container").not(`${selectedGallery}`).hide();
})

