function isMobile() {
  return (
    (navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/i))
  );
}

function config_menu() {
  if (isMobile()) {
    $('.menu-section > ul').slideUp(0);

    $('.menu-section').find('h1').on('click', function() {
      $this = $(this);

      if ($this.hasClass('hide')) $this.removeClass('hide').addClass('show').parent().find('ul').slideDown(500);
      else $this.removeClass('show').addClass('hide').parent().find('ul').slideUp(500);
    });
    // No hace falta incorporar estilos, las clases son solamente para
    // saber si la "cajita" esta abierta o cerrada
  }

}

function get_youtube_url(url) {
  return url + "?rel=0";

  /*
  Descripcion de parametros:
   - rel: Muestra videos relacionados al final del videos
   - modestbranding: Muestra el logo de Youtube
  */
}

// GLOBAL VARIABLES
media_less = 700;
media_medium = 1000;
media_most = 1300;
// GLOBAL VARIABLES
