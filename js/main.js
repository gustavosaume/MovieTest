$(document).ready(function() {
  $(".movies > .movie").click(function() {
    $(".movie").removeClass("selected");
    $(this).addClass("selected");
  });
});
