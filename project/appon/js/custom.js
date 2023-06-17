$(function(){
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 50){
      $(".nav_scroll").addClass("nav_color")
    }else{ $(".nav_scroll").removeClass("nav_color")}
    if(scrolling > 50){
      $(".goTop").fadeIn(500)
    }else{ $(".goTop").fadeOut(500)}
  })  
  $(".goTop").click(function(){
    $("html, body").animate({
      scrollTop:0}, 2000)
  })
  
  $('.banner_slik').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:2000,
        nextArrow:".next", 
        prevArrow:".prev",
        dots:true,
        autoplay:true,
      });
      
      $('.screen_main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        centerMode:true,
        centerPadding:"0px",
        autoplay:true,
        rightPadding:'0px'
      });
      new VenoBox({
        selector: ".video_links"
    });
 
    $('.feed_text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.feed_img'
    });
    $('.feed_img').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.feed_text',
      dots: true,
      centerMode: true,
      centerPadding:"0px",
      focusOnSelect: true,
      arrows: false,
    });
      
})