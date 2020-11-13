//Hero parallax effect//
$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
   
        $(document).ready(function() {
            var s = skrollr.init();
          })
          

    });


//Nav shadow effect//

$(function(){
   
    $(window).on('scroll', function(){
        
        var opacity = $(document).scrollTop();
        opacity = (opacity > 100 ? 100 : opacity) / 100;

        $('#navbar').css('box-shadow', '0 1px 40px rgba(209,200,197, ' + opacity + ')');
    });

});
//Carousel feature//
$(document).ready(function(){
    $('.carousel').carousel();
  });