(function($) {

  $(document).ready(function() {

    if (isMobile()) {
      $('iframe').attr('src', "https://www.youtube.com/embed/A9I_uKkCMX8");
    } else {
      $('iframe').attr('src', "https://www.youtube.com/embed/A9I_uKkCMX8");

    }

  });

})(jQuery);
