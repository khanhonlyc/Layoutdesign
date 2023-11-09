$('.slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    // infinite: true,
    prevArrow:`<div class="icon-left"><svg width="8" class='slick-prev pull-left' height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></div>`,
    nextArrow:`<div class="icon-right"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L7 7L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></div>`,
    draggable : false,
    autoplaySpeed: 5000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   }
    // ]
  });
      
$('.project-slideshow').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    // variableWidth: true,
    arrows: false,
    autoplay: true,
    dots: false,
    // infinite: true,
    draggable : true,
    autoplaySpeed: 7000,
  });

  $('.box-job-list').hover(
    function(){
      $(this).find('.text-wrap').show();
      $(this).find('.text-wrap').addClass("active");
    },
    function(){
      // $(this).find('.text-wrap').hide();
      $(this).find('.text-wrap').removeClass("active");
    }
  )
  // $(".text-wrap").hide();