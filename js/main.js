$(document).ready(function () {
	var currentFloor = 2; // переменная, где храниться текущий этаж
	var floorPath = $(".home-image path"); //Этаж в svg
	var counterUp = $(".counter-up"); //Кнопка увеличения этажа
	var counterDown = $(".counter-down"); //Кнопка уменьшения этажа
	

	//функция при наведении мышью на этаж
	floorPath.on("mouseover", function () {
		floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
		currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
		$(".counter").text(currentFloor); //записываем значение этажа в счетчик справа
	});

	counterUp.on("click", function() { //отслеживаем клик по кнопке вверх
		if (currentFloor < 18) { // Проверяем значение этажа
			currentFloor++; //прибавляем 1 этаж
		usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2,
			useGroupping: false }); //форматируем переменную с этажом, чтобы было 02 а не 2
		$(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
		floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
		$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
		}
	});

	counterDown.on('click', function () {
		if (currentFloor > 2) {
			currentFloor--;
			usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2,
				useGroupping: false });
			$(".counter").text(usCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
		}
	})
});