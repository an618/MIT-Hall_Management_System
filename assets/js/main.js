// Back to top button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});


const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
  const updateCount  = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    
    // Lower inc to slow and higher to slow
    const inc = target / speed;

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = Math.ceil(count + inc);
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }

    // console.log(count);
    // console.log(inc)
    // console.log(typeof target);
  }
  updateCount();
});







// new scroll 
/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
  /*
      CC 2.0 License Iatek LLC 2018 - Attribution required
  */
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 5;
  var totalItems = $('.carousel-item').length;

  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});

// Init AOS
function aos_init() {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    anchorPlacement: 'top-bottom'
  });
}
$(window).on('load', function() {
  aos_init();
});


$('.btnNext').click(function(){
  $('.nav-tabs > .active').next('li').find('a').trigger('click');
});

  $('.btnPrevious').click(function(){
  $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});