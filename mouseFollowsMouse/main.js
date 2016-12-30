var img = $('.mouse');


if(img.length > 0) {
  var offset = $('.mouse').offset();

  function mouse(evt) {
  // $("#log").text("pageX: " + event.pageX + ", pageY: " + event.pageY);



    setTimeout(function(){
    $('.mouse').css({'top': evt.pageY+'px', 'left': evt.pageX+'px'});
    var center_x = ($('.mouse').offset().left) + ($('.mouse').offset().width()/2);
    var center_y = ($('.mouse').offset().top) + ($('.mouse').offset().height()/2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    $('.mouse').offset().css('-moz-transform', 'rotate('+degree+'deg)');
    $('.mouse').offset().css('-webkit-transform', 'rotate('+degree+'deg)');
    $('.mouse').offset().css('-o-transform', 'rotate('+degree+'deg)');
    $('.mouse').offset().css('-ms-transform', 'rotate('+degree+'deg)');
    },400)


<!-- BEN VERSION -->
    // setTimeout(function () {
    //                 $('.mouse').animate({
    //                     'top': evt.pageY,
    //                     'left': evt.pageX
    //                 }, 10);
    //             }, 100);


  // $('.mouse').animate({'top': evt.pageY+'px', 'left': evt.pageX+'px'},1)
  };
}

$(document).mousemove(mouse);
