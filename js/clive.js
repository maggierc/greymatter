// Options documentation at:
// https://github.com/alvarotrigo/fullPage.js

// opacity/display none, then opacity/display block
// have consistent color

$(document).ready(function() {



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

      $('.playText span').mouseenter(function() {
        // var text = this.innerText;
        var myArray = [
          "Where am I?",
          "Who are you?",
          "What's going on?",
          "?",
          "?",
          "Where did you go?",
          "Who am I",
          "When",
          "Deborah!"
        ];
        var text = myArray[Math.floor(Math.random()*myArray.length)];
        $(this).css({'color':'cyan', 'opacity':'1'});
        var divW = (window.innerWidth / 10).toFixed();
        var divH = (window.innerHeight / 10).toFixed();
        var value = Math.random() * 0xFF | 0;
        var grayscale = (value << 16) | (value << 8) | value;
        var color = '#' + grayscale.toString(16);
        // var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<h3/>').css({
            'color': 'white',
        });

        var posx = (Math.random() * ($(document).innerWidth() - divW)).toFixed();
        var posy = (Math.random() * ($(document).innerHeight() - divH)).toFixed();

        $newdiv.css({
            'position': 'absolute',
            'left': posx + 'px',
            'top': posy + 'px',
            'display': 'none',
            'color' : '#fff',
            'filter': 'blur(4px)',
            'opacity' : '0.7'
        }).text(text).appendTo('body').fadeIn(1500).delay(500).fadeOut(500);
      });

      $('.playText span').mouseleave(function() {
        // var text = this.innerText;
        var myArray = [
          "What?",
          "Why",
          "How",
          "When",
          "Deborah?",
          "?"
        ];
        var text = myArray[Math.floor(Math.random()*myArray.length)];
        $(this).css('opacity', '0');
        var divW = (window.innerWidth / 10).toFixed();
        var divH = (window.innerHeight / 10).toFixed();
        var value = Math.random() * 0xFF | 0;
        var grayscale = (value << 16) | (value << 8) | value;
        var color = '#' + grayscale.toString(16);
        // var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<h1/>').css({
            'color': 'white',
        });

        var posx = (Math.random() * ($(document).innerWidth() - divW)).toFixed();
        var posy = (Math.random() * ($(document).innerHeight() - divH)).toFixed();

        $newdiv.css({
            'position': 'absolute',
            'left': posx + 'px',
            'top': posy + 'px',
            'filter': 'blur(1px)',
            'display': 'none'
        }).text(text).appendTo('body').fadeIn(1500).delay(500).fadeOut(500);
      });


});
