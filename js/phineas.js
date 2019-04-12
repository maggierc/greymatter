// Options documentation at:
// https://github.com/alvarotrigo/fullPage.js

// opacity/display none, then opacity/display block
// have consistent color

// select path + seven spans before, have it select children (create array of spans with ids)

$(document).ready(function() {
// Math.random() * (max - min) + min

  $(".playText span").addClass("shake");
  $("#section4 .effect").addClass("shake-hard");
  $("#section5 .effect").addClass("shake-hard");

  $("#section3 .effectDelay").css('animation-delay', '-500ms');

});
