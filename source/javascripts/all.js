//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {

  // Smooth scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // navbar fadeIn/Out
  var vH = $(window).height();
  $(window).scroll(function() {
      if ($(this).scrollTop() > vH - 5)
       {
          $('.navbar').fadeIn();
          $('.navbar').removeClass("hidden");
       }
      else
       {
        $('.navbar').fadeOut();
       }
   });

  // navbar addClass/removeClass active 
  $(function() {
      $('.navbar li a').click(function() {
         $('.navbar li a').removeClass();
         $(this).addClass('active-nav');
      });
   });

  //Activate state off links in navbar
  // var sections = $('.section')
  // , nav = $('navbar');

  // $(window).on('scroll', function () {
  //   var cur_pos = $(this).scrollTop();
    
  //   sections.each(function() {
  //     var top = $(this).offset().top,
  //         bottom = top + $(this).outerHeight();
      
  //     if (cur_pos >= top && cur_pos <= bottom) {
  //       nav.find('a').removeClass('active-nav');
  //       sections.removeClass('active-nav');
        
  //       $(this).addClass('active-nav');
  //       nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active-nav');
  //     }
  //   });
  // });
  
  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.navbar a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.navbar ul li a').removeClass("active-nav");
              currLink.addClass("active-nav");
          }
          else{
              currLink.removeClass("active-nav");
          }
      });
    }


});