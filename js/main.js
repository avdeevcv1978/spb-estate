


$(document).ready(function(){
  $('.slide-one').owlCarousel({
		loop:true, 
  	items:1,
  	margin:20,
  	nav: true,
		navText: ["<img src='img/Left.svg'>", "<img src='img/Right.svg'>"],
     // navText: ["<span></span>", "<span></span>"],
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



 $(document).ready(function(){  //дожидаемся загрузки страницы
    $('#btn1').on("click", function(){  //вешаем событие на клик по кнопке id="btn1"
        $('#text').toggle(); //включает/выключает элемент id="text"
        // $(this).remove(); Удаление этого элемента
    });
});


  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    // any initialisation options go here
  });

// // jQuery 
// $("#telephone").intlTelInput({
//   // options here
// });



// Авторизация в форме пароль включение показа пароля

$('body').on('click', '.password-control', function(){
  if ($('#password-input').attr('type') == 'password'){
    $(this).addClass('view');
    $('#password-input').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('#password-input').attr('type', 'password');
  }
  return false;
});




