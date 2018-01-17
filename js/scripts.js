$(document).ready(function() {
  var data = [];
  var length = 9; // user defined length
  var rownumber = 0;
  var vNumber = 0;
  var hNumber = 0;
  length = length + 1;
  for(var k = 0; k < length; k++) {
    vNumber = 0;
    hNumber = 0;
    for(var i = 0; i < length-1; i++) {
      data.push("1");
      $(".container").append("<div id=\"v"+rownumber+"-"+vNumber+"\"class=\"lrSides unclicked v"+rownumber+"-"+vNumber+" "+rownumber+"\"></div><div id=\"h"+rownumber+"-"+vNumber+"\"class=\"tbSides unclicked h"+rownumber+"-"+hNumber+"\"></div>");
      vNumber++;
      hNumber++;
      };
      $(".container").append("<div id=\"v"+rownumber+"-"+vNumber+"\" class=\"lrSides unclicked v"+rownumber+"-"+vNumber+" "+rownumber+"\"></div>");
      if (rownumber<length){
        $(".container").append("<br>");
      }
      rownumber++;
  };
  $(".unclicked").click(function(event) {
    $(this).css('background', '#000').addClass('clicked');
    $(".10").css('background', '#fff').removeClass('clicked');
    //get id name
    var idName = $(this).attr('id');

    var firstNumber = idName.substring(1,2);
    var lastNumber = idName.substring(3,4);
    //alert(firstNumber+" "+lastNumber);
    if (idName.substring(0,1) == "v") {
        if($("#v1-1").hasClass("unclicked") == true) {
          alert("test");
        }
    }
    //if (idName.substring(0,1) == "h") {}

  });
  var lessThanLength = length-1;
  $("."+lessThanLength).removeClass('unclicked');
$(".fSides:first").css('margin-left', '-10px');


 });

 /*
 V(x|y) =
 > V[x|(y-1)]
 > V[x|(y+1)]
 > H[x|(y-1)]
 > H[(x+1)|(x-1)]
 > H(x|y)
 > H[(x+1)|y]
 ------------
 H(x|y) =
 > H[(x-1)|y]
 > H[(x+1)|y]
 > V[(x-1)|y]
 > V[(x-1)|(y+1)]
 > V(x|y)
 > V[x|(y+1)]
 */
