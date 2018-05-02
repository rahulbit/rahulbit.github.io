$(document).ready(function(){

$(window).resize(function () {
  // body...

    var wsize = $(this).width();

    if(wsize<600)
    {
      
      $("li").hide();
    }

});



$(".menu_acess").click(function () {
  // body..
  
  
  $("div").find("li").addClass("res").slideToggle();
});

 
});