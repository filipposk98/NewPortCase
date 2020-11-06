//Hero parallax effect//
$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    // var background = $('.hero-back');
 
    // $(".hero-back").css({
    //       'background-size' : 1400 - scrollPos  + 500

    //     });  
        $(document).ready(function() {
            var s = skrollr.init();
          })
          

    });
//     if (scrollPos < 100) {
// $(".hero-back").css({    
// 'backgroud-size' : 150 - scrollPos + 'px'
// });
// }
// });



$(function(){
   
    $(window).on('scroll', function(){
        
        var opacity = $(document).scrollTop();
        opacity = (opacity > 100 ? 100 : opacity) / 100;

        $('#navbar').css('box-shadow', '0 1px 40px rgba(209,200,197, ' + opacity + ')');
    });

});