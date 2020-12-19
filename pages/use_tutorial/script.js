(function($) {

  $(document).ready(function() {

    if (isMobile()) {
      $('iframe').attr('src', "https://www.youtube.com/embed/n94JOHFH6L8");
    } else {
      $('iframe').attr('src', "https://www.youtube.com/embed/po07o124rJA");
    }

  });

})(jQuery);
