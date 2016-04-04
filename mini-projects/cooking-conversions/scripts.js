var BMI = function(weight,height) {
  return (weight / (height * height)) * 703;
};
var celsiusToFarenheight = function(degrees) {
  return ((degrees*9)/5)+32;
};
var farenheightToCelsius = function(degrees) {
  return ((degrees-32)*5)/9;
};
var gallonsToQuarts = function(gallons) {
  return gallons*4;
};
var quartsToPints = function(quarts) {
  return quarts*2;
};
var pintsToCups = function(pints) {
  return pints*2;
};
var cupsToOunces = function(cups) {
  return cups*8;
};
var ozToLiters = function(ounces) {
  return ounces/28;
};

var yourWeight = prompt("What is your weight in pounds?");
var yourHeight = prompt("What is your height in inches?");
var yourCTemp = prompt("What is the tempreature in Celsius?");
var yourFTemp = prompt("What is the temperatue in Farenheight?");
var yourGallons = prompt("How many gallons do you want?");

alert("Your BMI is " + BMI(yourWeight,yourHeight));
alert("The temperature is " + celsiusToFarenheight(yourCTemp) + " degrees Farenheight.");
alert("The temperature is " + farenheightToCelsius(yourFTemp) + " degrees Celsius.");
alert("You need " + gallonsToQuarts(yourGallons) +" quarts");
alert("You need " + quartsToPints(gallonsToQuarts(yourGallons)) +" pints");
alert("You need " + pintsToCups(quartsToPints(gallonsToQuarts(yourGallons))) +" cups");
var oz=cupsToOunces(pintsToCups(quartsToPints(gallonsToQuarts(yourGallons))))
alert("You need " + oz +" ounces");
alert("You need " + ozToLiters(oz) + " liters");
