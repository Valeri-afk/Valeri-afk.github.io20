function renderSliderItems(count) {

    $('#slider-2').append('<div class="prm-slider-mob--content" id="slider-2-content"></div>');
  
    for (let i = 1; i <= count; i++) {
  
      const elementDesktop = $(`
        <div class="prm-slider-1__item">
          <img src="../img/slider/slider${i}.jpg" alt="" class="prm-mhide">
        </div>
      `);
  
      const elementMobile = $(`
        <div class="prm-slider-mob-item">
          <img src="../img/slider/slider${i}m.jpg" alt="">
        </div>
      `);
  
      $('#slider-1').append(elementDesktop);
      $('#slider-2-content').append(elementMobile);
    }
  }
  
  $(document).ready(function () {
  
    renderSliderItems(4);
  
    $("#slider-1").slick({
      slidesToScroll: 1,
      prevArrow: '<button class="prm-slider-arrow__left"></button>',
      nextArrow: '<button class="prm-slider-arrow__right"></button>',
      arrows: true,
      dots: true,
      infinite: false
    });
  
  })