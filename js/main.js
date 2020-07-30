var preloader = document.getElementById("loader");
	function loadfunction(){
		preloader.style.display = "none";}







		



			mybutton = document.getElementById("myBtn2");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


 $(".button").click(function(){
      var value=$(this).attr("data-filter");
      if (value=="all")
      {
        $(".filter").show("1000");
        
      }
      else
      {
      $(".filter").not("."+value).hide("1000");
      $(".filter").filter("."+value).show("1000");
      }
      
    
  
  
        $("ul.button").click(function(){
        $(this).addClass('active').sibling().removeClass('active');
})
})

 	




  $(document).ready(function(){
  $('.part3_col1').waypoint(function(direction){

  	$('.part3_col1').addClass(' animated fadeInDown')
    $('.part3_col2').addClass(' animated fadeInUp')
    $('.part3_col3').addClass('animated fadeInDown')
  },{
    offset:'30%'
  })


$('.part4_col1').waypoint(function(direction){

  	$('.part4_col1').addClass(' animated fadeInLeft')
    $('.part4_col2').addClass(' animated fadeRight')
    
  },{
    offset:'20%'
  })


$('.part5_col1').waypoint(function(direction){

  	$('.part5_col1').addClass(' animated fadeInLeft')
    $('.part5_col2').addClass(' animated fadeInRight')
    
  },{
    offset:'30%'
  })




$('.part6_col1').waypoint(function(direction){

  	$('.part6_col1').addClass(' animated fadeInLeft')
    $('.part6_col2').addClass(' animated fadeInRight')
    
  },{
    offset:'60%'
  })








});


$(document).ready(function(){
  $('#overlay').modal('show');

setTimeout(function() {
    $('#overlay').modal('hide');
}, 5000);

});












		
