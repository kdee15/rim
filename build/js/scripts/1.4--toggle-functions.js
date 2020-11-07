// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. TOGGLE FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initToggleFunctions() {

  // A.3. SLIDE DIV --------------------------------------

  var slideContent = '';
  $('.slide-div').on('click', function(){
    console.log('hello!');
    slideContent = $(this).attr('name');
    if($('#'+slideContent).hasClass('on')){
      $('#'+slideContent).removeClass('on');
      $('.'+slideContent).removeClass('on');
    }else{
      hideSlideContent();
      showSlideContent(slideContent);
    }

    if($('#details').hasClass('on')) {
      $('.o-project-cover').addClass('on');
    } else {
      $('.o-project-cover').removeClass('on');
    }

  });

  function hideSlideContent(){
    $('.slide-div').removeClass('on');
    $('.slide-content').removeClass('on');
  };

  function showSlideContent(slideContentDiv){
    $('#'+slideContentDiv).addClass('on');
    $('.'+slideContentDiv).addClass('on');
  };

  // A.3. END ---------------------------------------------


  // A.5. BURGER MENU -------------------------------------

  var burgerContent = '';
  $('.o-hamburger').on('click', function(){
    burgerContent = $(this).attr('name');
    if($('#'+burgerContent).hasClass('on')){
      $('#'+burgerContent).removeClass('on');
      $('.'+burgerContent).removeClass('on');
      $('.o-navigation').removeClass('on');
    }else{
      hideBurgerContent();
      showBurgerContent(burgerContent);
    }
  });

  function hideBurgerContent(){
    $('.o-burger-nav').removeClass('on');
    $('.o-hamburger').removeClass('on');
    $('.o-navigation').removeClass('on');
  };

  function showBurgerContent(burgerContentDiv){
    $('#'+burgerContentDiv).addClass('on');
    $('.'+burgerContentDiv).addClass('on');
    $('.o-navigation').addClass('on');
  };

  $('.a-scroll-link').on('click', function(){
    $('.o-navigation').removeClass('on');
    $('.burger-nav').removeClass('on');
    $('#burger-nav').removeClass('on');
  });

  // A.5. END ---------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++