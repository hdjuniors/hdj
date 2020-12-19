(function($) {

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

    var list = $(".menu-section ul");
    var listItems = list.children('li');
    list.append(listItems.get().reverse());
    // Volteamos la lista de clases para que se vean primero las ultimas

    list = $(".des-section");
    listItems = list.children(".des-container");
    list.append(listItems.get().reverse());
    // Volteamos la lista de desafios que se muestran cuando se selecciona uno
    // IMPORTANTE: Para que esto funcione tienen que haber tantos items en el
    // menu como en la lista de desafios

    $('.menu-section').find('li').on('click', function() {
      $('.present-section').css('display', 'none');
      $('.des-section').css('display', 'block');

      indice = $('.menu-section').find('li').index($(this));

      $('.des-container').removeClass('show').addClass('hide');
      $('.des-container').eq(indice).addClass('show').removeClass('hide');

      $(window).scrollTop(0);
    });

  });

})(jQuery);
