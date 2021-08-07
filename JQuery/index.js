alert("Hello");
$("h1").css("color","red");

$(document).keypress(function(event)
{
  $("h1").text(event.key);

})
