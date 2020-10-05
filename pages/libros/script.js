(function($) {

  function cargar_imagenes(images_actual, images_total) {
    $images = $('.libro');

    var i;
    for (i = images_actual; i < images_total; i++) {
      if (i >= $images.length) break;

      $images.eq(i).css('display', 'block');
    }

    return i;
  }

  $(document).ready(function() {

    var window_width = $(window).width();
    var images_to_load;

    if (window_width <= media_less) images_to_load = 2;
    else if (window_width > media_less && window_width <= media_medium)
      images_to_load = 4;
    else if (window_width > media_medium && window_width <= media_most)
      images_to_load = 6;
    else if (window_width > media_most) images_to_load = 8;
    // Siempre es el doble de lo que se pone por fila

    images_actual = 0;
    images_total = images_to_load;
    // La cantidad de imagenes con las que empieza son las mismas
    // carga cada vez que se baja al tope

    cargar_imagenes(images_actual, images_total);
    images_actual = images_to_load;

    $(window).scroll(function(event) {
      if ((window.scrollY + window.innerHeight + 10) >= parseInt($('.container').height())) {
        images_actual = cargar_imagenes(images_actual, images_actual + images_to_load);
      }

    });

  });

})(jQuery);
