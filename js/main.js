$(window).scroll(function() {
if ($(this).scrollTop() > $('#header-nav').height()){  
    $('#header-nav').addClass("sticky");
    
  }
  else{
    $('#header-nav').removeClass("sticky");
  }
});

$("#cat5-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#cat5").offset().top - $("#header-nav").height()
    }, 1000);
});
$("#consulting-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#consulting").offset().top - $("#header-nav").height()
    }, 1000);
});
$("#contact-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - $("#header-nav").height()
    }, 1000);
});