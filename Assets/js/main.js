
   $(document).ready(function() {
  var totalItems = $('#carouselExampleIndicators .carousel-item').length;
  var currentIndex = $('#carouselExampleIndicators .carousel-item.active').index() + 1;
  $('.num').html(formatSlideNumber(currentIndex) + '/' + formatSlideNumber(totalItems));

  $('#carouselExampleIndicators').carousel({
    interval: false // Disable automatic sliding
  });

  $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    currentIndex = $('#carouselExampleIndicators .carousel-item.active').index() + 1;
    $('.num').html(formatSlideNumber(currentIndex) + '/' + formatSlideNumber(totalItems));
    togglePrevNextButtonVisibility();
  });

  togglePrevNextButtonVisibility();

  function togglePrevNextButtonVisibility() {
    var prevButton = $('.carousel-control-prev');
    var nextButton = $('.carousel-control-next');

    if (currentIndex === 1) {
      prevButton.hide();
      nextButton.show();
    } else if (currentIndex === totalItems) {
      prevButton.show();
      nextButton.hide();
    } else {
      prevButton.show();
      nextButton.show();
    }
  }

  function formatSlideNumber(number) {
    return number.toString().padStart(2, '0');
  }
});


$(document).ready(function() {
    var buttons = $('.carousel-control-prev, .carousel-control-next');
    var carousel = $('#carouselExampleIndicators');
    var isMouseOverCarousel = false;
  
    carousel.on('mouseenter', function() {
      isMouseOverCarousel = true;
      buttons.removeClass('hide');
    });
  
    carousel.on('mouseleave', function() {
      isMouseOverCarousel = false;
      hideButtonsAfterDelay();
    });
  
    function hideButtonsAfterDelay() {
      setTimeout(function() {
        if (!isMouseOverCarousel) {
          buttons.addClass('hide');
        }
      }, 1); // Adjust the delay time as needed (in milliseconds)
    }
  });

  $(document).ready(function() {
    // Enable touch swipe navigation on mobile and tablet devices only
    if ($(window).width() < 992) {
      // Initialize the carousel
      $("#carouselExampleIndicators").carousel();
  
      // Enable touch swipe navigation
      $("#carouselExampleIndicators").swipe({
        swipe: function(event, direction) {
          if (direction === "left") {
            $(this).carousel("next");
          } else if (direction === "right") {
            $(this).carousel("prev");
          }
        },
        allowPageScroll: "vertical"
      });
    }
  });
  


// Function to handle touch swipe events
// Function to handle touch swipe events

  
  

  
  
  
  
  
  
  
  





  
  


