$(document).ready(function(){
  $("form#favorites").submit(function(event){
  var foodInput = $("Input#food").val();
  var movieInput = $("input#movie").val();
  var icecreamInput = $("input#icecream").val();
  var candyInput = $("input#candy").val();
  var animalInput = $("input#animal").val();
  var favorite = [foodInput, movieInput, icecreamInput, candyInput, animalInput];

    $('.result').append(favorite[1 + 0 + 2]);

    event.preventDefault();

  });
});
