// function toggleDarkMode() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

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

//glightbox

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

videoLightBoxes = document.querySelectorAll('.vimeo-lightbox');

videoLightBoxes.forEach(videoLightBox => {
  videoLightBox.GLightbox = new GLightbox({
    source: 'vimeo',
    autoplayVideos: false,
    openEffect: 'none',
    closeEffect: 'fade',
    cssEffects: {
      fade: { in: 'fadeIn', out: 'fadeOut' },
      zoom: { in: 'zoomIn', out: 'zoomOut' },
    },
    elements: [
      {
            'href': videoLightBox.dataset.targetUrl,
            'type': 'video',
            'source': 'vimeo', //vimeo, youtube or local
       },
    ],
    touchNavigation: true,
    loop: true,
    plyr: {
      config: {
        ratio: '16:9', // or '4:3'
        muted: false,
        hideControls: false,
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
        },
        vimeo: {
          autoplay: false,
          background: false,
          loop: true,
          byline: false,
          portrait: false,
          title: false,
          speed: true,
          transparent: false,
        },
      },
    },
  });
});

// Find all triggers and set up an eventlistener for them
const lightBoxTriggers = document.querySelectorAll('button[data-trigger-lightbox]');
lightBoxTriggers.forEach(trigger => {
  targetElem = document.getElementById(trigger.dataset.triggerLightbox);

  // bail out if no target found
  if (! targetElem ) {
    console.log('target not found')
    return;
  }
  trigger.addEventListener('click', triggerLightBox(targetElem)); 
});

// trigger event listener callback function
function triggerLightBox(targetElem) {
  return function(event) {
    // bail out if lightbox is not initialized
    if (! ('GLightbox' in targetElem)) {
      console.log(`GLightbox does not exist in #${targetElem.id}`);
      return;
    }

    targetElem.GLightbox.open();
  }
}