(function($) {

  links = [
    "https://i.postimg.cc/XJtM4QRX/84303176-3531308590244484-2810629175482777600-o.jpg",
    "https://i.postimg.cc/L6KdWQkb/85058654-3531294196912590-820327204368941056-o.jpg",
    "https://i.postimg.cc/kgskBn00/85058654-3531376226904387-4058325270984130560-o.jpg",
    "https://i.postimg.cc/85pQZ7hP/85064374-3531431016898908-5775779643504197632-o.jpg",
    "https://i.postimg.cc/vZvdf7VS/87161969-3531294043579272-8588814632032927744-o.jpg",
    "https://i.postimg.cc/43LkFJw6/87164984-3531318676910142-7439271686140067840-o.jpg",
    "https://i.postimg.cc/YSqB34N2/87167964-3531338480241495-721855763324076032-o.jpg",
    "https://i.postimg.cc/TYV8vjCY/87174687-3531371353571541-1708603007563726848-o.jpg",
    "https://i.postimg.cc/85782qnq/87185545-3531313180244025-7644141050633650176-o.jpg",
    "https://i.postimg.cc/Z54Gb9MP/87259029-3531489786893031-2526296069835325440-o.jpg",
    "https://i.postimg.cc/tCtcMq4s/87284287-3531461980229145-1250544951603757056-o.jpg",
    "https://i.postimg.cc/XvDmks7x/87285317-3531296563579020-768525479257833472-o.jpg",
    "https://i.postimg.cc/Gpp6DWrH/87304125-3531394500235893-1611705573248598016-o.jpg",
    "https://i.postimg.cc/QxrPm9hL/87360905-3531419480233395-5672632902924369920-o.jpg",
    "https://i.postimg.cc/Bb2zss5w/87363164-3531444900230853-4063653817864945664-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg",
    "https://i.postimg.cc/MGXrH1bB/87367165-3531390583569618-8052570042228801536-o.jpg"
  ]

  function cargar_imagenes(images_actual, images_total) {
    $images = $('.gallery').find('a');

    var i;
    for (i = images_actual; i < images_total; i++) {
      if (i >= links.length) break;

      link = links[i];

      $('.gallery').append("<a href='" + link + "' data-lightbox='hdj'><img src='" + link + "'></a>");
    }

    return i;
  }

  $(document).ready(function() {

    var window_width = $(window).width();
    var images_to_load;

    if (window_width <= media_less) images_to_load = 24;
    else if (window_width > media_less && window_width <= media_medium)
      images_to_load = 8;
    else if (window_width > media_medium && window_width <= media_most)
      images_to_load = 12;
    else if (window_width > media_most) images_to_load = 16;
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
