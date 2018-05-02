$(document).ready(()=>{



  $(".modals").hide();


	$(".open").on("click", function(){
       $(".modals").show();
});


$(".close").on("click", function(){
  $(".modals").hide();
});
})