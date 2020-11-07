// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

jQuery(document).ready(function($) {
/*
 * JavaScript Templates Runtime
 * https://github.com/blueimp/JavaScript-Templates
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define */

;(function ($) {
    'use strict'
    var tmpl = function (id, data) {
        var f = tmpl.cache[id]
        return data ? f(data, tmpl) : function (data) {
            return f(data, tmpl)
        }
    }
    tmpl.cache = {}
    tmpl.encReg = /[<>&"'\x00]/g // eslint-disable-line no-control-regex
    tmpl.encMap = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#39;'
    }
    tmpl.encode = function (s) {
        return (s == null ? '' : '' + s).replace(
            tmpl.encReg,
            function (c) {
                return tmpl.encMap[c] || ''
            }
        )
    }
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return tmpl
        })
    } else if (typeof module === 'object' && module.exports) {
        module.exports = tmpl
    } else {
        $.tmpl = tmpl
    }
}(this))
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. MOBILE CLASS
// ==
// ====== INDEX  ======================================================================================================

// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
// A.1. MOBILE CLASS --------------------------------------------------------------------------------------------------
    
  var deviceAgent = navigator.userAgent.toLowerCase();

  $('html').addClass('desktop');
  
  if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
    $('html').removeClass('desktop');
    $('html').addClass('ios');
    $('html').addClass('mobile');
  }
  
  if (deviceAgent.match(/android/)) {
    $('html').removeClass('desktop');
    $('html').addClass('android');
    $('html').addClass('mobile');
  }
  
  if (deviceAgent.match(/blackberry/)) {
    $('html').removeClass('desktop');
    $('html').addClass('blackberry');
    $('html').addClass('mobile');
  }
  
  if (deviceAgent.match(/(symbianos|^sonyericsson|^nokia|^samsung|^lg)/)) {
    $('html').removeClass('desktop');
    $('html').addClass('mobile');
  }
    
// A.1. END -----------------------------------------------------------------------------------------------------------
  
// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. GLOBAL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
// A.1. FUNCTIONS -----------------------------------------

initToggleFunctions();
initSwiperFunctions();
initScrollFunctions();

// A.1. END -----------------------------------------------

// A.2. SCREEN SIZE CHECK ---------------------------------
    
	var screen = $( window ).width();
	console.log('I am a device, and my width is: ' + screen);
    
// A.2. END -----------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A.9. AUTO HEIGHT ---------------------------------------------------------------------------------------------------

/*
    http://codepen.io/micahgodbolt/pen/FgqLc

    Thanks to CSS Tricks for pointing out this bit of jQuery
    http://css-tricks.com/equal-height-blocks-in-rows/
    It's been modified into a function called at page load and then each time the page is resized.
    One large modification was to remove the set height before each new calculation.
*/

var equalheight;
equalheight = function (container) {
  var currentTallest = 0,
      currentRowStart = 0,
      topPosition = 0,
      currentDiv = 0,
      rowDivs = [],
      $el;
  $(container).each(function () {

    $el = $(this);
    $($el).height('auto');
    topPosition = $el.position().top;

    if (currentRowStart != topPosition) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPosition;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
};

$(document).ready(function() {

  equalheight('.features-block .reason-card .m-card-title');
  equalheight('.features-block .reason-card .m-card-body');

  if($(window).width() >= 767) {

    equalheight('.reasons-block .reason-card .m-card-title');
    equalheight('.reasons-block .reason-card .m-card-body');

  }

});

$(window).resize(function() {

  equalheight('.features-block .reason-card .m-card-title');
  equalheight('.features-block .reason-card .m-card-body');

  if($(window).width() >= 767) {

    equalheight('.reasons-block .reason-card .m-card-title');
    equalheight('.reasons-block .reason-card .m-card-body');

  }

});

// A.9. END -----------------------------------------------------------------------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. SCROLL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initScrollFunctions() {

// A.4. STICKY BLOCK --------------------------------------------------------------------------------------------------

  gsap.registerPlugin(ScrollTrigger);

  if ($(".projects-block")[0]){

    // A.4.1. PROJECT CARD EFFECTS --------------------------
    var elemCardBGs = document.querySelectorAll('.a-card-bg, .m-card-footer')

    for (var iT = 0; iT < elemCardBGs.length; iT++) {
      var elemCardBG = elemCardBGs[iT];
      var tl1 = gsap.timeline({
        defaults: {duration: 4},
        scrollTrigger: {
          trigger: elemCardBG,
          scrub: true,
          start: "top bottom",
          end: "top center",
          pinSpacing: true,
        }
      })
        .from(elemCardBG, {y: 80})
        .fromTo(elemCardBG, {opacity: 0}, {opacity: 1})

    }

    var elemCardPics = document.querySelectorAll('.m-card-image, .m-card-body')

    for (var i2 = 0; i2 < elemCardPics.length; i2++) {
      var elemCardPic = elemCardPics[i2];
      var tl2 = gsap.timeline({
        defaults: {duration: 2},
        scrollTrigger: {
          trigger: elemCardPic,
          scrub: true,
          start: "top bottom",
          end: "top center",
          pinSpacing: true,
        }
      })
        .fromTo(elemCardPic, {opacity: 0}, {opacity: 1})
    }

    var elemCardLinks = document.querySelectorAll('.a-card-link')

    for (var i4 = 0; i4 < elemCardLinks.length; i4++) {
      var elemCardLink = elemCardLinks[i4];
      var tl4 = gsap.timeline({
        defaults: {duration: 2},
        scrollTrigger: {
          trigger: elemCardLink,
          scrub: true,
          start: "top bottom",
          end: "top center",
          pinSpacing: true,
        }
      })
        .fromTo(elemCardLink, {y: 50}, {y: 0})
    }

    // A.4.1. END -------------------------------------------

  }

  if ($(".blog-card")[0]){

    var elemCardTitles = document.querySelectorAll('.a-card-header, .m-text-wrapper')

    for (var i3 = 0; i3 < elemCardTitles.length; i3++) {
      var elemCardTitle = elemCardTitles[i3];
      var tl3 = gsap.timeline({
        defaults: {duration: 2},
        scrollTrigger: {
          trigger: elemCardTitle,
          scrub: true,
          start: "top bottom",
          end: "top 80%",
          pinSpacing: true,
        }
      })
        .fromTo(elemCardTitle, {x: -40}, {x: 0})
    }

  }

  if ($(".stats-block")[0]){

    // A.4.2. STATS BLOCK EFFECTS -------------------------

    var tlStatsList = gsap.timeline({
      defaults: {duration: 2},
      scrollTrigger: {
        trigger: '.m-skills-list',
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        pinSpacing: true,
        toggleClass: 'in-view',
      }
    })

    gsap.timeline({
      defaults: {duration: 5},
      scrollTrigger: {
        trigger: '.a-overlay',
        scrub: true,
        start: "top top",
        end: "center top"
      }
    })

      .fromTo('.a-overlay', {opacity: 0}, {opacity: 1})

    if($(window).width() < 768) {
      $('.m-education-list, .a-edu-title').addClass('color-switch');
    }

    $(window).resize(function() {
      $('.m-education-list, .a-edu-title').removeClass('color-switch');
      if($(window).width() < 768) {
        $('.m-education-list, .a-edu-title').addClass('color-switch');
      }
    });

    gsap.timeline({
      defaults: {duration: 5},
      scrollTrigger: {
        trigger: '.color-switch',
        scrub: true,
        start: "top bottom",
        end: "top center"
      }
    })

      .to('.color-switch', {color: 'white'})
      .to('.path-cs', {fill: 'white'})

    // A.4.2. END -----------------------------------------

  }

  // A.4.2. END -------------------------------------------

  if ($(".archive-projects")[0]){

    gsap.defaults({ease: "power3"});
    gsap.set(".page.archive-projects .blog-card", {y: 50});

    var elemCardTitles = document.querySelectorAll('.a-card-header, .m-text-wrapper')

    for (var i3 = 0; i3 < elemCardTitles.length; i3++) {
      var elemCardTitle = elemCardTitles[i3];
      var tl3 = gsap.timeline({
        defaults: {duration: 2},
        scrollTrigger: {
          trigger: elemCardTitle,
          scrub: true,
          start: "top bottom",
          end: "top 80%",
          pinSpacing: true,
        }
      })
        .fromTo(elemCardTitle, {x: -40}, {x: 0})
    }

    ScrollTrigger.batch(".page.archive-projects .blog-card", {
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
      onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
      onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
      onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
    });

    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".page.archive-projects .blog-card", {y: 0}));

  }

  // A.4.2. END -------------------------------------------

// A.4. END -----------------------------------------------------------------------------------------------------------

// A.3. SCROLL TO LINK ------------------------------------------------------------------------------------------------

  $(".a-scroll-link").click(function(event){

    event.preventDefault();

    //calculate destination place
    var dest=0;
    if($(this.hash).offset().top > $(document).height()-$(window).height()){
      dest=$(document).height()-$(window).height();
    }else{
      dest=$(this.hash).offset().top;
    }

    //go to destination
    $('html,body').animate({scrollTop:dest}, 1000,'swing');


    //add active class
    $('.a-scroll-link').removeClass('active');
    $(this).addClass('active');

  });

// A.3. END -----------------------------------------------------------------------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. SCROLL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FILE END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

});