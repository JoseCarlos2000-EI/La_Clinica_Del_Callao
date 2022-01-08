$(document).ready(function() {
    $('.list-carrousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear',
        prevArrow: $('.left-selection'),
        nextArrow: $('.right-selection'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    $('.carrousel-presentation').slick({
      dots: false,
      prevArrow: false,
      nextArrow: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      
      });  

      $('.carrousel-logoe').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:500,
        infinite: true,
        prevArrow: false,
        nextArrow: false
      }); 
});

