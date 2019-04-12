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

          $('.readText').fadeOut(250);
          setTimeout(function(){
            $('.playText').fadeIn(500);
          }, 500);

            playFilter = true;

          }, function() {
            $('#masked-page').removeClass("ClipOff").addClass("ClipOn");

            $('.playText').fadeOut(250);
            setTimeout(function(){
              $('.readText').fadeIn(500);
            }, 500);


            playFilter = false;
    });

    $("#openSources").click(function() {
          $(".sources").fadeIn(500);
    });

    $("#closeSources").click(function() {
          $(".sources").fadeOut(500);
    });

    $(".marquee").click(function() {
        var marqStop = $(this).find('div');

        marqStop.css({
            'animation-play-state': 'paused',
            'font-weight': '600',
            'text-shadow' : '0px 0px 5px #fff'
        });
        setTimeout(function(){
          marqStop.animate({ "opacity": "0" }, 500 );
        }, 1500);

        setTimeout(function(){
          marqStop.css({
            'animation-play-state': 'running',
            'font-weight': '200',
            'text-shadow' : 'none'
          });
          marqStop.animate({ "opacity": "1" }, 500 );
        }, 3000);
    });


});
