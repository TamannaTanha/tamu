$(document).ready(function(){
//CAROUSEL SLIDER

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 500
});

//COUNTER UP

$('.counter').counterUp({
delay: 10,
time: 1000
});


//MIXITUP

var mixer = mixitup('.portfolio');

//PORTFOLIO FILTER

$('.active-effect').click(function(){
$(this).addClass('filter-active').siblings().removeClass('filter-active');
});

//TESTIMONIAL SLIDER

$('.review').slick({
    infinite : true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
});

// FOR ABOUT PAGE SLIDE

    $('.pageslide').slick({
        infinite : true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


$('.teamslide').slick({
    infinite : true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]    
});





