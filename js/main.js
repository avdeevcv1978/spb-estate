


$(document).ready(function(){
  $('.slide-one').owlCarousel({
		loop:true, 
  	items:1,
  	margin:20,
  	nav: true,
		navText: ["<img src='img/Left.svg'>", "<img src='img/Right.svg'>"],

  });

});




$(document).ready(function(){
  $('.slide-two').owlCarousel({
    loop:true,
    margin:20,
  	items:2,
    // responsiveClass:true,
  	 	
           responsive:{ //Адаптация в зависимости от разрешения экрана
                        0:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        1200:{
                            items:3
                        }
                    }
           
		  });

});