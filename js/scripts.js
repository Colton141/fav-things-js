$(document).ready(function(){
  $("form#favorites").submit(function(event){
  event.preventDefault();
  var foodInput = $("input#food").val();
  var movieInput = $("input#movie").val();
  var icecreamInput = $("input#icecream").val();
  var candyInput = $("input#candy").val();
  var animalInput = $("input#animal").val();
  var favorite = [foodInput, movieInput, icecreamInput, candyInput, animalInput];
  var newArray = ["bug", "vegetable"];

  // $('.result').append(favorite[2], favorite[0]);


  // var newArray = [newArray.push(newFav)];
  newArray.push(favorite[1], favorite[0], favorite[2]);
  $('.result').append("<li>",newArray[0],"</li>");
  $('.result').append("<li>",newArray[1],"</li>");
  $('.result').append("<li>",newArray[2],"</li>");
  $('.result').append("<li>",newArray[3],"</li>");
  $('.result').append("<li>",newArray[4],"</li>");





  });
});
