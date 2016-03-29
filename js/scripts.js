$(document).ready(function() {
  $("h1").dblclick(function(){
    alert("This is a header.");
  });

  $("p").click(function() {
    $("img").slideToggle();
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $("img").hover(function() {
    alert("Isn't he cute?");
  });

  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
