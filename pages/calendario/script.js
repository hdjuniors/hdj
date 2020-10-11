(function($) {

  $(document).ready(function() {

    
    // Al carga la pagina, accede a un archivo JSON, y se fija si hay cumpleaños
    // en las ultimas o proximas dos semanas, y los agrega al calendario

    // Al cargar la pagina, va item por item viendo la fecha para agregar
    // la clase "done" a los que ya les haya pasado la fecha
    $events = $('.events');
    for (var i = 0;i < $events.length; i++) {
      fecha_event = $events.eq(i).attr('data-date').split("/");
      fecha_event = new Date(new Date().getFullYear(),
                            parseInt(fecha_event[1]) - 1,
                            fecha_event[0],
                            "00",
                            "00");
      fecha_hoy = new Date();
      if (fecha_event.getTime() < fecha_hoy.getTime()) {
        if (fecha_event.getDate() == fecha_hoy.getDate() &&
            fecha_event.getMonth() == fecha_hoy.getMonth() &&
            fecha_event.getYear() == fecha_hoy.getYear()) {

          $events.eq(i).addClass("today");
        } else {
          $elements = $events.eq(i).find('li').addClass('done');
        }
      }
    }

  });

  if(isMobile()) {
    $('.gotobottom').on('click', function(event) {
      var altura = $('.calendar').height();
      $('html, body').animate({
        scrollTop: altura
      }, 1000);
    });

    $('.gototop').on('click', function(event) {
      $('html, body').animate( {
        scrollTop: "0"
      }, 1000);
    });

  }

})(jQuery);
