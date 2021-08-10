$(document).ready(function () {
  $('.menu-toggle').on('click', function () {
    $('.nav').toggleClass('showing');
    $('.page-wrapper').toggleClass('move');
  });


  $('.post-wraper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  


  let valueIn;

    
  $('a.headinfo').on('click', valueOut)  

  function valueOut(){
     
    $(this).each(function(){  
     
     valueIn = $(this).attr('id')});    
     localStorage.setItem("valuex", valueIn);
     return valueIn;
     
   }
   
   let usern = localStorage.getItem("usernam");
   let flag1 = localStorage.getItem("flags");

   if(flag1 == 1){

    $('.user').html(" "+usern+" ");
  
   }

   $('.contact1').on('click',function(){
     $(this).attr('href','#contact');
   })
   
});


