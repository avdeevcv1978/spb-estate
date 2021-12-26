$(document).ready(function () {
	var currentFloor = 2; // переменная с текущим этажом
	var floorPath = $(".home-image path"); // каждый отдельный этаж в svg
	var counterUp = $(".counter-up");  /*кнопка увеличения этажа*/
	var counterDown = $(".counter-down");

	// функция при наведении мышкой на этаж
  floorPath.on("mouseover", function () {
		floorPath.removeClass("current-floor");//удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor");//получаем значение текущего этажа
    $(".counter").text(currentFloor); //записываем значение этажа в счетчик
  });
			counterUp.on("click", function (){ //отслеживаем клик по кнопке вверх
		if (currentFloor < 18) { // проверяем значение этажа
					currentFloor++; //прибавляем один этаж
          usCurrentFloor = currentFloor.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false }); // форматируем переменную с этажом, чтобы было 01 а не 1
          $(".counter").text(usCurrentFloor);
					floorPath.removeClass("current-floor");
					$(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');

		}
			});

			counterDown.on('click', function(){
				if (currentFloor > 2){
          currentFloor--;
          usCurrentFloor = currentFloor.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          });
          $(".counter").text(usCurrentFloor);
          floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
          $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
			})

});
