$(document).ready(function () {
    $("#view1").show(); //hide these divs on load
    $("#view2").hide();
    $( "#details" ).on("click",function() {
     $("#view1").hide();
     console.log("button worked and files are linkeds")
      });
   // Set variables
    var city1 ="";
    var city2 ="";
    var city3 ="";
    var city4 ="";
    var city5 ="";

    //see if interests are Checked or not
    //if prop is checked save it

    $("#concerts").prop("checked")=true;




});//end document ready
