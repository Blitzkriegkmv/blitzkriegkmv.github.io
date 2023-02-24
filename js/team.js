$(document).ready(function() {
    mouseMagic();

    //Mobile Navbar Toggle
    $(".header-wrapper .navbar-toggler").click(function() {
      $(".header-wrapper").toggleClass("active");
    });
  
    //Parallax Scrolling
    $('.root').scroll(function() {
    var currY = $(this).scrollTop();
    var postHeight = $(this).height();
    var scrollHeight = $('.root').height()*3;
    var scrollPercent = Math.floor((currY / (scrollHeight - postHeight)) * 100);
    console.log(scrollPercent);
    if (scrollPercent < 5) {
      $(".hero-wrapper").css("opacity", 1);
    }
    if (scrollPercent >= 5 && scrollPercent < 15) {
      $(".hero-wrapper").css("opacity", 0.8 - (scrollPercent/150)*9);
    }
    });

    //Owl Carousel Init
    $('.team-slider').owlCarousel({
        loop: true,            
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    });
      
  })
  
  
  //Mouse follow Animation
  function mouseMagic() {
      var mouseX = 0, mouseY = 0;
      var xp = 0, yp = 0;
       
      $(document).mousemove(function(e){
        mouseX = e.pageX - 40;
        mouseY = e.pageY - 40; 
      });
        
      setInterval(function(){
        xp += ((mouseX - xp)/6);
        yp += ((mouseY - yp)/6);
        $("#custom-cursor").css({left: xp +'px', top: yp +'px'});
      }, 10);
  
      //Handle click events
      $("*:not(.clickable)").click(function() {
        $("#custom-cursor").css("filter", "brightness(200%)");
        $('#custom-cursor').css("transform", 'scale(2)');
        setTimeout(function() {
          $("#custom-cursor").css("filter", "brightness(100%)");
          $('#custom-cursor').css("transform", 'scale(1)');
        }, 100)
      })
  
      //Handle cursor follower
      $('.clickable').mouseover(function() {
        $('#custom-cursor').css("transform", 'scale(2)');
      })
      $('.clickable').mouseout(function() {
          $('#custom-cursor').css("transform", 'scale(1)');
          
      })
  }