// $('.main-slider').slick();
// $('.slider').slick();
$('.slider').slick({
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    prevArrow:`<div class="icon-left"><svg width="8" class='slick-prev pull-left' height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></div>`,
    nextArrow:`<div class="icon-right"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L7 7L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></div>`,
    draggable : false,
    autoplaySpeed: 5000,
  });
      