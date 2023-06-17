 $(function(){
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    // if(scrolling > 50){
    //   $(".nav_scroll").addClass("nav_color")
    // }else{ $(".nav_scroll").removeClass("nav_color")}
    if(scrolling > 50){
      $(".goTop").fadeIn(500)
    }else{ $(".goTop").fadeOut(500)}
  })  
  $(".goTop").click(function(){
    $("html, body").animate({
      scrollTop:0}, 2000)
  })


   
      $("#colorful").colorfulTab(); 

      
      $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
      new VenoBox({
        selector: ".my-video-links"
    });



    $('.banner_slick').slick({
      dots: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed:2000,
      nextArrow:".next",
      prevArrow:".prev",
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed:2000,
            nextArrow:".next",
            prevArrow:".prev",
            dots:true,
            autoplay:true,
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
          breakpoint: 576.98,
          settings: {
            slidesToShow: 1,
        slidesToScroll: 1,
        speed:2000,
        arrows:false,
        dots:false,
        autoplay:true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.testimolial_slick').slick({
      dots: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed:2000,
      nextArrow:".next",
      prevArrow:".prev",
      dots: true,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            speed:2000,
            nextArrow:".next",
            prevArrow:".prev",
            dots: true,
            autoplay:true,
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
          breakpoint: 576.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed:2000,
            arrows:false,
            autoplay:true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    
    $('.slide').slick({
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      speed:2000,
      nextArrow:".next1",
      prevArrow:".prev1",
      dots: false,
      autoplay:true,
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
          breakpoint: 576.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            speed:2000,
            arrows:false,
            dots:false,
            autoplay:true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
            

})