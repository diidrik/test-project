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
