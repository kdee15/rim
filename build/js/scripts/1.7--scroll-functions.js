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