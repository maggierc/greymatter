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

          setTimeout(function(){
            $('.readText').css("display", "none");
            $('.playText').css("display", "inherit");
            $('.passiveTan').css("display", "inline");
            }, 1000);

            playFilter = true;

          }, function() {
            $('#masked-page').removeClass("ClipOff").addClass("ClipOn");

            setTimeout(function(){
              $('.playText').css("display", "none");
              $('.passiveTan').css("display", "none");
              $('.readText').css("display", "inherit");
            }, 500);


            playFilter = false;
    });

    $('p.playText').each(function() {

        var words = $(this).text().split(' ');

        $(this).empty().html(function() {

          for (i = 0; i < words.length; i++) {
            if (i == 0) {
              $(this).append('<span>' + words[i] + '</span>');
            } else {
              $(this).append(' <span>' + words[i] + '</span>');
            }
          }

        });

      });

    $('.playText span, .playFX').mouseover(function(){

      var random = (Math.random() * 3) + 0.5;

      if (playFilter==true) {
        $(this).text("tan").css({
            'color': '#f6ff00',
            'font-size': random + 'em',
            'font-family' : 'Roboto',
            'font-weight' : '500',
            'float' : 'left',
            'text-transform' : 'uppercase',
            'line-height' : '0.7em',
            'animation' : 'none',
            'letter-spacing' : '-0.05em'
        })

      }
      else {
      }

    });




});
