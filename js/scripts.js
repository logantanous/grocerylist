$(document).ready(function() {
  var data = [];
  var length = 10; // user defined length
  var rownumber = 0;
  var vNumber = 0;
  var hNumber = 0;
  for(var k = 0; k < length; k++) {
    vNumber = 0;
    hNumber = 0;
    for(var i = 0; i < length; i++) {
      data.push("1");
      $(".container").append("<div class=\"lrSides unclicked v"+rownumber+"-"+vNumber+" \"></div><div class=\"tbSides unclicked h"+rownumber+"-"+hNumber+"\"></div>");
      vNumber++;
      hNumber++;
      };
      $(".container").append("<div class=\"lrSides unclicked v"+rownumber+"-"+vNumber+"\"></div>");
    $(".container").append("<br>");
    rownumber++;
  };
  for(var k = 0; k < length; k++) {
    $(".container").append("<div class=\"fSides\"></div><div class=\"tbSides unclicked h"+length+"-"+k+"\"></div>");
  }
  $(".unclicked").click(function(event) {
    $(this).css('background', '#000')
  });

$(".fSides:first").css('margin-left', '-10px');


 });
