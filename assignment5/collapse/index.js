$(document).ready(()=>{

  $("#p1").hide();
  $("#p2").hide();
  $("#p3").hide();

   $("#sec1").click(function () {
   	// body...
   	 $("#p1").slideToggle();
   	  $("#p2").hide();
      $("#p3").hide();
   })

    $("#sec2").click(function () {
   	// body...
   	 $("#p2").slideToggle();
   	   $("#p1").hide();
  $("#p3").hide();
   })

     $("#sec3").click(function () {
   	// body...
   	 $("#p3").slideToggle();
   	  $("#p1").hide();
  $("#p2").hide();
   })

 

})



