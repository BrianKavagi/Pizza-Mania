$(function () {
    $('form').submit(function () {
      event.preventDefault();
      var valuesArray = getValues();
      var size = valuesArray[0];
      var crust = valuesArray[1];
      var toppings = valuesArray[2];
     
      var sizeCost = calculateSize(size);
      var meatCost = calculateMeatVeggie(meats);
      var cheeseCost = calculateCheese();
      var crustCost = calculateCrust();
      var totalCost = sizeCost + meatCost + veggieCost + sauceCost + cheeseCost + crustCost;
   
      meats = concat(meats, meatCost);
      veggies = concat(veggies, veggieCost);
   
      $('#sizeSelection').html(size);
      $('#sizeCost').html(sizeCost);
      $('#crustSelection').html(crust);
      $('#crustCost').html(crustCost);
      
      $('#receipt').slideToggle(0);
   
      $('form').slideToggle(0);
      $('#orderAgain').show();
    });
   
   
    $('#orderAgain').click(function () {
      event.preventDefault;
      $('form').trigger('reset');
      $('form').slideToggle(0);
      $('#receipt').slideToggle(0);
      $('#orderAgain').hide();
    });
   
   });
   
   function getValues() {
    var meats = [];
    var veggies = [];
    var size = $('input[name=selectSize]:checked').val();
    $('.meat:checked').each(function (m) {
      meats[m] = $(this).val();
    });
    $('.veggie:checked').each(function (v) {
      veggies[v] = $(this).val();
    });
    var cheese = $('input[name=cheeseRadio]:checked').val();
    var crust = $('input[name=crustRadio]:checked').val();
    var sauce = $('input[name=sauceRadio]:checked').val();
   
    var values = [size, meats, veggies, cheese, crust, sauce];
    return values;
   };
   
   function calculateMeatVeggie(array) {
    if (array.length === 0) {
      return 0;
    } else {
      var cost = array.length - 1;
      return cost;
    }
   };
   
   function calculateCheese() {
    if ($('input[name=cheeseRadio]:checked').val() === 'EXTRA CHEESE') {
      var cost = 3;
      return cost;
    } else return 0;
   };
   
   function calculateCrust() {
    if ($('input[name=crustRadio]:checked').val() === 'Stuffed Crust') {
      var cost = 3;
      return cost;
    } else return 0;
   };
   
   function calculateSize(size) {
    if (size === "small") {
      return 500;
    } else if (size === "Medium") {
      return 800;
    } else if (size === "Large") {
      return 1000;
    } 
   };
   
   function concat(toppings, cost) {
    if (cost === 0) {
      return "NONE";
    } else if (cost >= 1) {
      var oneWord = toppings.join(", ");
      return oneWord;
    }
   };