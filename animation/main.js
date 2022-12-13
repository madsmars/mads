function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function expandReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "read some more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "read a lil less";
      moreText.style.display = "inline";
    }
}



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
    console.log(selectedGallery)

    $(`${selectedGallery}`).show();
    $(".gallery-container").not(`${selectedGallery}`).hide();
})