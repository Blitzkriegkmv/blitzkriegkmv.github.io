$(document).ready(function() {
    mouseMagic();
    loadingAnimation();
    //Mobile Navbar Toggle
    $(".header-wrapper .navbar-toggler").click(function() {
      $(".header-wrapper").toggleClass("active");
    });
    
})

function loadingAnimation() {
  setTimeout(function() {
    $(".hero-bg").removeClass("glitch");
    $(".pre-loader").fadeOut();
    $(".hero").removeClass("d-none");
    setTimeout(function() {
      $(".hero .text-anim").removeClass("text-anim-up");
      $(".hero .text-anim").removeClass("text-anim-down");
    }, 1000);
    setTimeout(function() {
      $(".hero .fade").addClass("show");
    }, 3000);
  }, 1000)
}

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