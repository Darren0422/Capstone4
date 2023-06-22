//Drop down menus:
//The tables are set as hidden and an accordian style is applies to the menus when its hovered over.
$(document).ready(function() {

    $('.winter-table .winter-table-box').hide();

    $('.winter-table').hover(
        function() {
        $(this).find('.winter-table-box').slideDown('fast');
        },
        function() {
        $(this).find('.winter-table-box').slideUp('fast');
        }
    );
});

$(document).ready(function() {

    $('.spring-table .winter-table-box').hide();

    $('.spring-table').hover(
        function() {
        $(this).find('.spring-table-box').slideDown('fast');
        },
        function() {
        $(this).find('.spring-table-box').slideUp('fast');
        }
    );
});

$(document).ready(function() {

    $('.summer-table .summer-table-box').hide();

    $('.summer-table').hover(
        function() {
        $(this).find('.summer-table-box').slideDown('fast');
        },
        function() {
        $(this).find('.summer-table-box').slideUp('fast');
        }
    );
});

$(document).ready(function() {

    $('.fall-table .fall-table-box').hide();

    $('.fall-table').hover(
        function() {
        $(this).find('.fall-table-box').slideDown('fast');
        },
        function() {
        $(this).find('.fall-table-box').slideUp('fast');
        }
    );
});


//Hiding and showing:
//The content of the top picks is hidden and displayed once the title is clicked.
$(document).ready(function() {
    $('.pick1-content').hide();

    $('.pick1').click(function() {
        $(this).find('.pick1-content').fadeToggle(1000);
    });
});

$(document).ready(function() {
    $('.pick2-content').hide();

    $('.pick2').click(function() {
        $(this).find('.pick2-content').fadeToggle(1000);
    });
});

$(document).ready(function() {
    $('.pick3-content').hide();

    $('.pick3').click(function() {
        $(this).find('.pick3-content').fadeToggle(1000);
    });
});

//Animation:
//Once the saved list heading is clicked the list items animate from left to right 
$(document).ready(function() {
    $('h2').click(function() {
      animateLeftRight();
    });
  
    function animateLeftRight() {
      $('#save-list')
        .animate({ marginLeft: "+=100px" }, 'fast')
        .animate({ marginLeft: "-=100px" }, 'fast')
        .animate({ marginLeft: "+=100px" }, 'fast')
        .animate({ marginLeft: "-=100px" }, 'fast');
    }
});


//Chained effect:
//Once the thumbsup ninja is clicked the website background will change colours.
//The image also enlarges and shrinks repeatedly 
$(document).ready(function() {
    $('.Thumbsup').click(function() {
      changeBackgroundColor();
      animateEnlargement();
    });
  
    function changeBackgroundColor() {
      setInterval(backgroundColor, 500);
    }
  
    function backgroundColor() {
      var letters = '0123456789ABCDEF';
      var colour = '#';
      for (var i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
      }
      document.body.style.backgroundColor = colour;
    }
  
    function animateEnlargement() {
      setInterval(enlargement, 500);
    }
  
    function enlargement() {
      var image = $('.Thumbsup img');
      image.animate({ width: '550px', height: '450px' }, 250, function() {
        image.animate({ width: '500px', height: '400px' }, 250);
      });
    }
});
  
  
