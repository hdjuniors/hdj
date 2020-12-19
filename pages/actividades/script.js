(function($) {

  function config_menu() {
    if (isMobile()) {
      $('.menu-section > h1').on('click', function() {
        $this = $(this);

        if ($this.hasClass('hide')) $this.removeClass('hide').addClass('show').parent().find('.accordions').slideDown(500);
        else $this.removeClass('show').addClass('hide').parent().find('.accordions').slideUp(500);
      });
      // No hace falta incorporar estilos, las clases son solamente para
      // saber si la "cajita" esta abierta o cerrada
    }

  }

  function change_url(link) {
    $act_section = $('.act-section');
    $image_section = $('.image-section');

    $('.present-section').css('display', 'none');

    if (link.substring(0, 5) == 'https') { // Es una url
      $act_section.find('iframe').attr('src', link);
      $act_section.css('display', 'flex');
      $image_section.css('display', 'none');
    } else {
      $image_section.find('img').attr('src', link);
      $image_section.css('display', 'flex');
      $act_section.css('display', 'none');

      img = $image_section.find('img')[0];
      // Obtengo el objeto imagen en Javascript
      if (img.width > img.height)
        $image_section.find('img').removeClass('vertical').addClass('horizontal');
      else
        $image_section.find('img').removeClass('horizontal').addClass('vertical');
    }

    $(window).scrollTop(0);
  }

  $(document).ready(function() {
    config_menu();

    var $list = $(".accordion-content > ul");
    var listItems = null;
    for (var i = 0; i < $list.length; i++) {
      $listItems = $list.eq(i).children("li");
      $list.eq(i).append($listItems.get().reverse());
    }

    var $contenido = $(".accordion-content");
    for (var i = 0; i <= $contenido.length; i++) {
      $contenido.eq(i).slideUp(0).parent().addClass("hide");
    }
    // Ocultamos todo menos el primero

    $(".accordion-titulo").on("click", function() {
      var $contenido = $(this).next(".accordion-content");
      var $this = $(this);

      if($this.parent().hasClass("show")) {
        $contenido.slideUp(250).parent().addClass("hide").removeClass("show");
      }
      else {
        $contenido.slideDown(250).parent().addClass("show").removeClass("hide");
      }

      $this.parent().siblings('.accordion-container')
                    .addClass("hide")
                    .removeClass("show")
                    .find('.accordion-content')
                    .slideUp(250);
    });
  });

  $('.menu-section').find('li').find('li').on('click', function() {
    $this = $(this);
    url = $this.attr('data-url');

    if (!(url == undefined)) change_url(url);
  });

})(jQuery);
