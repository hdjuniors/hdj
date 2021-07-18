(function($) {

  url_list = [
    "https://www.youtube.com/embed/H7hrX7klZNs", // 1
    "https://www.youtube.com/embed/BStSwj7tC2I", // 2
    "https://www.youtube.com/embed/4dCxBYMmSN4", // 3
    "https://www.youtube.com/embed/po07o124rJA", // 4
    "https://www.youtube.com/embed/01GVoJqrThQ", // 5
    "https://www.youtube.com/embed/xzez0fYEEjk", // 6
    "https://www.youtube.com/embed/UDu0PLS7aUw", // 7
    "https://www.youtube.com/embed/pTAsVmeTCDI", // 8
    "https://www.youtube.com/embed/Kw-e3G7SK5k", // 9
    "https://www.youtube.com/embed/9g7LYJcl4Yo", // 10
    "https://www.youtube.com/embed/UppvY9o-sD0", // 11
    "https://www.youtube.com/embed/aI_jix2094w", // 12
    "https://www.youtube.com/embed/n94JOHFH6L8", // 13
    "",// ACA IRIA LA CLASE 14, DEL SEXTO MANDAMIENTO
    "https://www.youtube.com/embed/wvUwDs6xmuk", // 15
    "https://www.youtube.com/embed/XioytlvQ_rY", // 16
    "https://www.youtube.com/embed/8Fyni8rI3X0", // 17
    "https://www.youtube.com/embed/I0x2K6RN61U", // 18
    "https://www.youtube.com/embed/YT43w2nS6qk", // 19
    "https://www.youtube.com/embed/Sda5CVw2CCw", // 20
    "https://www.youtube.com/embed/GDxDuJ2KOQs", // 21
    "https://www.youtube.com/embed/ikw7jhYIG60", // 22
    "https://www.youtube.com/embed/FlBZvr3C6uo", // 23
    "https://www.youtube.com/embed/yjVL5zubISQ", // 24
    "https://www.youtube.com/embed/m9J7gyzxCy8", // 25
    "https://www.youtube.com/embed/EdZIh_RkSN8", // 26
    "https://www.youtube.com/embed/RkfJAYlqvZk", // 27
    "https://www.youtube.com/embed/iJcAcda59uo", // 28
    "https://www.youtube.com/embed/DzY5L24IO1M", // 29
    "https://www.youtube.com/embed/ZzvyOSV_W10", // 30
    "https://www.youtube.com/embed/VQ4xlWLr-i0", // 31
    "https://odysee.com/$/embed/hdj-clase-10/ef1f76760ea8cbcbdc6cf624c9b941570edfe445?r=3vbNdwZ7b2FSEjXGHdLuWCSBW1fFERDH"
  ].reverse();
  // LISTA DE VIDEOS DE YOUTUBE DE LAS CLASES
  // SON LOS ENLACES DE LOS ELEMENTOS EMBED QUE SE OBTIENE DE INSERTAR

  function config_menu() {
    if (isMobile()) {
      $('.menu-section > ul').slideUp(0);

      $('.menu-section > h1').on('click', function() {
        $this = $(this);

        if ($this.hasClass('hide')) $this.removeClass('hide').addClass('show').parent().find('ul').slideDown(500);
        else $this.removeClass('show').addClass('hide').parent().find('ul').slideUp(500);
      });
      // No hace falta incorporar estilos, las clases son solamente para
      // saber si la "cajita" esta abierta o cerrada
    }

  }

  $(document).ready(function() {
    config_menu();

    var list = $("ul");
    var listItems = list.children('li');
    list.append(listItems.get().reverse());
    // Volteamos la lista de clases para que se vean primero las ultimas

    $('.video-section').find('iframe').attr('src', get_youtube_url(url_list[0]));

    $('.menu-section').find('ul').find('li').on('click', function() {
      indice = $('.menu-section').find('ul').find('li').index($(this));
      url = url_list[indice];

      $(this).parent().find('.selected').removeClass('selected');
      $(this).addClass('selected');

      $('.video-section').find('iframe').attr('src', get_youtube_url(url));

      $(window).scrollTop(0);
    });
    // IMPORTANTE: Algoritmo solamente para menus de 1 nivel

  });

})(jQuery);
