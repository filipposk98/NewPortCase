$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    var background = $('.hero-back');
    
    $(".hero-back").css({
          'background-size' : 100 - scrollPos + "%"

         

    });
    if (scrollPos < 40) {
$(".hero-back").css({    
'backgroud-size' : 50 - scrollPos + 'px'
});
}
});