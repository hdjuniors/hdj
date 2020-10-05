(function($) {

  $(document).ready(function() {

    config_menu();

    $('.menu-section').find('li').on('click', function() {
      $('.present-section').css('display', 'none');
      $('.des-section').css('display', 'flex');

      indice = $('.menu-section').find('li').index($(this));

      $('.des-container').removeClass('show').addClass('hide');
      $('.des-container').eq(indice).addClass('show').removeClass('hide');
    });

  });

})(jQuery);
