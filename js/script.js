(function($) {

	colores = ["to_pink",
						"to_red",
						"to_orange",
						"to_yellow",
						"to_green",
						"to_teal",
						"to_blue",
						"to_violet",
						"to_purple"]
	colores_indice = 0;
	breve_descripcion = [
		"Mira la última clase, y cualquiera de las anteriores",
		"Acá podés hacer las actividades de todas las clases",
		"Cada semana hay un desafio nuevo, mirá el de esta semana",
		"Mira la hermosa galería de fotos de HDJ",
		"Acá podés leer todo tipo de libros y cuentos",
		"Si es la primera vez que entrás, seguro queres saber como usar la página"
	]

	function color_iteration() {
		$('.divider').attr('class', "divider " + colores[colores_indice]);
		$('.titulo').attr('class', "titulo " + colores[colores_indice]);
		$('.left-section').find('img').attr('class', colores[colores_indice]);
		colores_indice++;
		if (colores_indice >= 8) colores_indice = 0;

		setTimeout(color_iteration, 1000);
	}

	$(document).ready(function () {
		if (!isMobile()) { // Funciones solo disponibles para computadora
			$(document).find('.right-section').find('.opciones').find('ul').find('li').on('mouseenter', function() {
				indice = $(document).find('.right-section').find('.opciones').find('ul').find('li').index($(this));

				$('.description-box').removeClass('hide').addClass('show').text(breve_descripcion[indice]);
			}).on('mouseleave', function() {
				$('.description-box').removeClass('show').addClass('hide');
			});
		}

		color_iteration();
	});

})(jQuery);
