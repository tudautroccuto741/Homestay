$(document).ready(function()
{
    $('.promotion').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
      });   

      $('.location-title').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
      });  

      $('.kind-room').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
      }); 

      $('.room').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
      }); 
});

$(window).on('scroll',function(){
  if($(window).scrollTop()){
    $('nav').addClass('nav-box');
  }
  else
  {
    $('nav').removeClass('nav-box');
  }
})
