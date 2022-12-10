
displayGalleryOnLoad();

// displayGalleryOnLoad() ensures that if someone tries to directly link to one of the galleries (e.g. https://mywebsite.com/galleries#dolphins), it will show that gallery.
function displayGalleryOnLoad() {
    // grab the URL (e.g. https://mywebsite.com/galleries#dolphins, and separate the components of the URL string based on the "#" delimiter to isolate the selected gallery on the end (basically, "splitting" the URL string on '#' to isolate 'dolphins' in this case))
    const URL = window.location.href.split('#');

    // checks if there is a '#something' in the link by checking the length of the URL variable. If the length is 1, it means we didn't have any # to split on. If this is the case, don't do any of the rest of the stuff in this function.
    if(URL.length == 1) {
        console.log("No gallery chosen; load default page")
        // return ensures that we exit the function and don't do any of the other steps below.
        return;
    }

    // store the isolated part of the string (e.g. dolphins) in a variable called selectedGallery (looks like "#dolphins" now)
    const selectedGallery = "#" + URL[URL.length - 1];

    // use the .show() jQuery function to display the selected gallery (essentially, what this looks like is, for example "$('#birds').show()
    $(`${selectedGallery}`).show();

    // use the .not() jQuery function to hide any .gallery-container that is NOT whatever the selected gallery is (i.e. if #birds is the current .gallery-container we want to display, then hide any .gallery-container that doesn't have that id (e.g. #capuchins and #dolphins))
    $(".gallery-container").not(`${selectedGallery}`).hide();
}

// any time one of the .gallery-links is clicked...
$('.gallery-link').click(function () {

    // store the gallery in a variable called 'selectedGallery', which stores 'href' attribute of that link (e.g. #birds, #capuchins, or #dolphins)
    const selectedGallery = $(this).attr('href');
    console.log("The selected gallery: " + selectedGallery);

    // use the .show() jQuery function to display the selected gallery (essentially, what this looks like is, for example "$('#birds').show()
    $(`${selectedGallery}`).show();

    // use the .not() jQuery function to hide any .gallery-container that is NOT whatever the selected gallery is (i.e. if #birds is the current .gallery-container we want to display, then hide any .gallery-container that doesn't have that id (e.g. #capuchins and #dolphins))
    $(".gallery-container").not(`${selectedGallery}`).hide();
})

