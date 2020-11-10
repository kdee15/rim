// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. TOGGLE FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initToggleFunctions() {

  // A.3. SLIDE DIV --------------------------------------

  $('.m-screen-toggle').on('click', function(){
    $('.m-video').toggleClass('on');
    $('.m-screen-toggle').toggleClass('on');
  });

  $('.a-scroll-link').on('click', function(){
    $('.o-navigation').removeClass('on');
    $('.burger-nav').removeClass('on');
    $('#burger-nav').removeClass('on');
  });

  // A.5. END ---------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++