(function($) {

  var dias_semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  ];

  var meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  var $events = $('.events');

  function add_birthdays() {
    var data;
    $.ajax({
      dataType: "json",
      url: "cumples.json",
      data: data,
      success: function success(data) {
        fecha_actual = new Date().getTime();

        time_bet_weeks = 1209600000;
        // Tiempo en ms entre dos semanas

        $.each( data, function( key, val ) {
          fecha_aux = val.fecha.split("/");
          fecha_i = new Date(
            new Date().getFullYear(),
            parseInt(fecha_aux[1] - 1), // La funcion lo toma empezando en 0
            parseInt(fecha_aux[0])
          );

          // Calculo si el cumpleaños esta dentro de las dos semanas antes o
          // despues de la fecha de hoy
          if (Math.abs(fecha_actual - fecha_i.getTime()) < time_bet_weeks) {
            for (var i = 0; i < $events.length; i++) {
              fecha_event_aux = $events.eq(i).attr('data-date').split("/");
              fecha_event = new Date(
                new Date().getFullYear(),
                fecha_event_aux[1] - 1,
                fecha_event_aux[0]
              );

              // Comparo fecha por fecha los eventos para saber donde ubicar
              // el cartel del cumpleaños
              if (fecha_i.getMonth() < fecha_event.getMonth() ||
                  fecha_i.getMonth() == fecha_event.getMonth() &&
                  fecha_i.getDate() < fecha_event.getDate()) {
                // Si no es el mismo dia, si no que es un dia que ya paso

                years = new Date().getYear() - parseInt(fecha_aux[2]);

                $new_event = '<div class="events" data-date="' + fecha_i.getDate() + '/' + fecha_i.getMonth() + '"><h2 class="fecha">' + dias_semana[fecha_i.getDay()] + ' ' + fecha_i.getDate() + ' de ' + meses[fecha_i.getMonth() - 1] + '</h2><ul class="list"><li><i class="fas fa-birthday-cake"></i> ' + val.nombre + ' ' + val.apellido + ' cumple ' + years + ' años' + '</li></ul><div>';

                $events.eq(i).before($new_event);

              } else if (fecha_i.getMonth() == fecha_event.getMonth() &&
                        fecha_i.getDate() == fecha_event.getDate()) {
                // Si el cumple es un dia que ya tiene otro eventos

                $events.eq(i).find('ul').append('<li><i class="fas fa-birthday-cake"></i>' + val.nombre + ' ' + val.apellido + " cumple " + years + " años" + '</li>');
              } else continue;
              // Si no lo ubique en ningun lado sigo buscando

              break;
              // Para evitar que siga buscando donde ubicar y compare con los
              // demas eventos, generando duplicados
            }
          }
        });
      }
    });
  }

  $(document).ready(function() {

    add_birthdays();
    // Al cargar la pagina, accede a un archivo JSON, y se fija si hay cumpleaños
    // en las ultimas o proximas dos semanas, y los agrega al calendario

    // Al cargar la pagina, va item por item viendo la fecha para agregar
    // la clase "today" al que tenga la fecha de hoy
    // Tambien agrega el divisor que separa los eventos que ya pasaron de Los
    // que vienen
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
        }
      } else {
        $events.eq(i).before('<div class="divider"><span></span><p>PRÓXIMOS</p><span></span></div>');
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
