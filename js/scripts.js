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

  $("#application form").submit(function(event) {
    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();
    var companynameInput = $("input#companyname").val();
    var positionInput = $("input#position").val();
    var experienceInput = parseInt($("input#experience").val());
    var dateInput = new Date();

    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);
    $(".companyname").text(companynameInput);
    $(".position").text(positionInput);
    $(".expeienceRequired").text(experienceInput*2);
    $(".todayDate").text(dateInput.toDateString());


    $("#application").hide();
    $("#letter").show();

    event.preventDefault();
  });
});
