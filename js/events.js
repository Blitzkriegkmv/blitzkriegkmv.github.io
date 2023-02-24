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

    //Lightbox Animatoion
    $(".lightbox .close-area, .lightbox .close-btn").click(function() {
        $(".lightbox").removeClass("active");
        $(document.body).removeClass("overflow-hidden");
        //console.log("Click");
    })
    $(".card__header").click(function() {
        lightboxData = $(this).attr("data-toggle");
        $(".lightbox").attr("data-active", lightboxData);
        $(".lightbox").toggleClass("active");
        $(`.lightbox-wrapper:not([data-id=${lightboxData}])`).addClass("d-none");
        $(`.lightbox-wrapper[data-id=${lightboxData}]`).removeClass("d-none");

        $('body').addClass("overflow-hidden");
    })
      
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