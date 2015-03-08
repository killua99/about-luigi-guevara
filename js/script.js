(function() {
  'use strict';

  $(document).ready(function() {
    $("#page").onepage_scroll({
      sectionContainer: "section",
      animationTime: 700,
      easing: "ease-in-out",
      responsiveFallback: 600,
      loop: true
    });
  });

})();
