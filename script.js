// Options documentation at:
// https://github.com/alvarotrigo/fullPage.js

// opacity/display none, then opacity/display block
// have consistent color

$(document).ready(function() {

  var playFilter = false;

  $("#readplayButton0").mouseenter(function(){
    $('#readplayButton3').css({
        'height': '60px',
        'width': '60px',
        'background' : 'white'
    });
  });

  $("#readplayButton0").mouseleave(function(){
    $('#readplayButton3').css({
        'height': '20px',
        'width': '20px',
        'background' : 'none'
    });
  });

    $("#readplayButton0").toggle(function() {
          $('#masked-page').removeClass("ClipOn").addClass("ClipOff");

          $('.readText').fadeOut(300);
          setTimeout(function(){
            $('.playText').fadeIn(400);
          }, 500);

            playFilter = true;

          }, function() {
            $('#masked-page').removeClass("ClipOff").addClass("ClipOn");

            $('.playText').fadeOut(250);
            setTimeout(function(){
              $('.readText').fadeIn(400);
            }, 500);


            playFilter = false;
    });


    $("#openSources").click(function() {
          $(".sources").fadeIn(500);
    });

    $("#closeSources").click(function() {
          $(".sources").fadeOut(500);
    });



});
