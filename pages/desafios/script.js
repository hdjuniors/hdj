(function($) {

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
      $('.des-section').css('display', 'flex');

      indice = $('.menu-section').find('li').index($(this));

      $('.des-container').removeClass('show').addClass('hide');
      $('.des-container').eq(indice).addClass('show').removeClass('hide');

      $(window).scrollTop(0);
    });

  });

})(jQuery);
