$('.img-list').hover(function(){
  $(this)
  .css("transition","all 1.0s ease").css("opacity", "0.5");
  },
  function(){
    $(this).css("opacity", "1");
});

var fillPage = function(name){
  var previous = findPrev(name);
  var nexttxt = findNext(name);
  var next = findNext(name);
  $(".prev").attr('href', previous);
  $(".next").attr('href', next);


  var color = 'rgba(0,0,0,.5)';
  var bg_string = "linear-gradient("+ color + "," + color +"), url('../img/" + name +".jpg')";

  $('.content-header').css('background', bg_string);
  $('.content-header').css('background-size', 'cover');
  $('.right-bottom').css('background',
    "linear-gradient("+ color + "," + color +"), url('../img/" + nexttxt +".jpg')");
  $('.right-bottom').css('background-size', 'cover');
  $('.content-header').css('background-size', 'cover');
  $('.right-bottom h2').text(nexttxt.toUpperCase().slice(0,1)+nexttxt.slice(1, nexttxt.length));

  var invis_classname= '.init-invis';
  $(invis_classname).text(name.toUpperCase().slice(0,1)+name.slice(1, name.length));
  $(".content-header h1").text(name.toUpperCase().slice(0,1)+name.slice(1, name.length));


  $(window).on('scroll', function(){
    if ($(this).scrollTop()> $(invis_classname).position().top){
      $(invis_classname).css('opacity', '1');
    }
  });
}
