$(document).ready(function() {
    mouseFollow();
})

//Mouse follow Animation
function mouseFollow() {
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 12;
      mouseY = e.pageY - 12; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/6);
      yp += ((mouseY - yp)/6);
      $("#cursor-follow").css({left: xp +'px', top: yp +'px'});
    }, 20);

    //Handle cursor follower
    $('.clickable').mouseover(function() {
        $('.circle-cursor').css("transform", 'scale(2)');
    })
    $('.clickable').mouseout(function() {
        $('.circle-cursor').css("transform", 'scale(1)');
        
    })
}