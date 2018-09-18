$(function () {
    
    //Elements showing thanks by ScrollReveal library
	window.sr = ScrollReveal().reveal('[class*=col-], .row, row>h2');

  
  	//Changing background and links when scroll 
	$(window).scroll(function(){
		
		if($(window).scrollTop() >= 100){
			$("#main-nav").addClass('scroll');
		} else {
			$("#main-nav").removeClass('scroll');
		}
		
	});
	
	//Smooth Scroll - animation during scrolling website
	var root = $('html, body');
	$('a[href*="#"]:not([href="#"])').click(function() {
		var href = $.attr(this, 'href');
		root.animate({
			scrollTop: $(href).offset().top - 50
		}, 500);
		return false;
	});
});
  
  