$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".bg-intro").css({"opacity" : "0"})
    }
    else {
        $(".bg-intro").css({"opacity" : "1"})
    }
  });
});

$(document).ready( function () {
  $("#burger-container").on('click', function () {
    $(this).toggleClass("open");
  });
});

$(document).ready( function () {
  $("#burger-container").on('click', function () {
    $("#slide-menu").toggleClass("open");
  });
});
