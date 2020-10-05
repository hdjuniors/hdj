(function($) {

  url_list = [
    "https://www.youtube.com/embed/H7hrX7klZNs",
    "https://www.youtube.com/embed/BStSwj7tC2I",
    "https://www.youtube.com/embed/4dCxBYMmSN4",
    "https://www.youtube.com/embed/po07o124rJA",
    "https://www.youtube.com/embed/01GVoJqrThQ",
    "https://www.youtube.com/embed/xzez0fYEEjk",
    "https://www.youtube.com/embed/UDu0PLS7aUw",
    "https://www.youtube.com/embed/pTAsVmeTCDI",
    "https://www.youtube.com/embed/Kw-e3G7SK5k",
    "https://www.youtube.com/embed/9g7LYJcl4Yo",
    "https://www.youtube.com/embed/UppvY9o-sD0",
    "https://www.youtube.com/embed/aI_jix2094w",
    "https://www.youtube.com/embed/n94JOHFH6L8",
    "",// ACA IRIA LA CLASE 14, DEL SEXTO MANDAMIENTO
    "https://www.youtube.com/embed/wvUwDs6xmuk",
    "https://www.youtube.com/embed/XioytlvQ_rY",
    "https://www.youtube.com/embed/8Fyni8rI3X0",
    ""// ACA IRIA LA CLASE 19, DEL ULTIMO MANDAMIENTO
  ]

  $(document).ready(function() {
    config_menu();

    $('.menu-section').find('ul').find('li').on('click', function() {
      indice = $('.menu-section').find('ul').find('li').index($(this));
      url = url_list[indice];

      $('.video-section').find('iframe').attr('src', url);
    });
    // IMPORTANTE: Programa solamente para menus de 1 nivel

  });

})(jQuery);
