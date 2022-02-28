


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

// --------------открытие закрытие секции Пдробнее-----------------

 $(document).ready(function(){  //дожидаемся загрузки страницы
    $('#btn1').on("click", function(){  //вешаем событие на клик по кнопке id="btn1"
        $('#text').toggle(); //включает/выключает элемент id="text"
        // $(this).remove(); Удаление этого элемента
    });
});


  

// --------------открытие закрытие секции Пдробнее-----------------


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

// -----------------------------------------------


// Появление звездочки на картинке на моб версии


// $(document).ready(function(){  
//           $('#btn2').on("click", function(){  
//                $('#icon-aft').toggle(); 
             
             
//           });
//       });


// -------------------------------

$(".bef").click(function(e) {
  e.preventDefault();
   $(".bef").not(this).removeClass('aft-hidden');
   $(this).toggleClass('aft-hidden');
  
})



// -----------------------------------------------




// const buttons = document.querySelectorAll('.icon');
// const fullStar = document.querySelectorAll('.aft');


// buttons.forEach((btnItem, index) => {      
//   btnItem.addEventListener('click', () => {
//     buttons.forEach((btnItem) => {
    
//    })


//     fullStar.forEach((listItem) => {  //перебираем весь список listItem перебираемый элемент
//       listItem.classList.toggle('aft-hidden') //добавим всем кнопкам класс hidden

// })
    

// })
// })


// ------------------вызов меню бургер--------------

 $(document).ready(function() {
    $('.burger').click(function() {
        $('.burger').toggleClass('open-menu');
    });
});



// ------------------вызов меню бургер e--------------end


         // Бургер справа



$('.burger').on('click', function(e) {
  e.preventDefault();
  $('.navbar').toggleClass('navbar_active');
  $('.navbar-menu').toggleClass('navbar-menu_active');
  $('.navbar-menu-list').toggleClass('navbar-menu-list_active');
  $('.fixed-wrapper').toggleClass('fixed-wrapper_active');
  $('.navbar-menu-link').toggleClass('navbar-menu-link_active');
  $('.auth').toggleClass('auth_active');
  $('.burger').toggleClass('burger_active');
})

 // Бургер справа