$(document).ready(function() {

  var list = [];//create a blank array

  //when #addToList is clicked
  $( "#addToList" ).click(function() {

    //add to list input's value
    list.push($("input").val());
    //clear input's value
    $("input").val('');

  });

  //now that list has items we are going to loop through and add them to the page

  //when #displayToPage is clicked
  $( "#displayToPage" ).click(function() {

    //loop through all items in the list array
    for(var i = 0; i < list.length ; i++) {
      //add (append) all items in list to the container
      $(".container").append(list[i]+"<br>");
    };
  });

 });
