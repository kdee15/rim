// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. CAROUSEL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initSwiperFunctions() {

  // A.1. HOME CAROUSEL -----------------------------------

  $('.owl-desktop').owlCarousel({
    loop:true,
    nav:true,
    dots: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  })

  // A.1. END ---------------------------------------------

  // A.1. HOME CAROUSEL -----------------------------------

  $('.owl-tablet').owlCarousel({ 
    loop:true,
    nav:true,
    dots: true,
    responsive:{
      0:{
        items:1
      },
      992:{
        items:2
      },
      1200:{
        items:3
      }
    }
  })

  // A.1. END ---------------------------------------------

  // A.1. HOME CAROUSEL -----------------------------------

  $('.owl-mobile').owlCarousel({
    loop:true,
    nav:true,
    dots: true,
    responsive:{
      0:{
        items:1
      },
      450:{
        items:2
      },
      768:{
        items:3
      },
      992:{
        items:4
      }
    }
  })

  // A.1. END ---------------------------------------------

}
    

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++