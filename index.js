// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('#myCarousel');
    carousel.addEventListener('click', handleCarouselControls);
  
    function handleCarouselControls(event) {
      var target = event.target;
      if (target.classList.contains('carousel-control-prev')) {
        carousel.previous();
      } else if (target.classList.contains('carousel-control-next')) {
        carousel.next();
      }
    }
  });
  