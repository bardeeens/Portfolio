$(function() {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      console.log(winTop);
      if (winTop >= 10) {
        $("body").addClass("sticky-shrinknav-wrapper");
        console.log(winTop);
      } else if (winTop >= 1) {
          console.log("poopy"+winTop);
        $("body").removeClass("sticky-shrinknav-wrapper");
      }
    });
  });
  
 
