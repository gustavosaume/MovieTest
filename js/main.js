$(document).ready(function() {
  $(".movies > .movie").click(function() {
    $(".movie").removeClass("selected");
    $(this).addClass("selected");
  });
});

// (function(){
//   var current = null;
//   function select() {

//   }
//   function change() {

//   }
//   function verify() {

//   }
// })();