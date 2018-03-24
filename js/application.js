$(document).ready(function () {
    //firebase commented out for the time beinginterestForm
    // var config = {
    //     apiKey: "AIzaSyD45BBdEbVt8n7x_oiBYMCbmw4pTZtt3jM",
    //     authDomain: "groupapplication-f576b.firebaseapp.com",
    //     databaseURL: "https://groupapplication-f576b.firebaseio.com",
    //     projectId: "groupapplication-f576b",
    //     storageBucket: "",
    //     messagingSenderId: "573680163830"
    //   };
    //   firebase.initializeApp(config);

    event.preventDefault();
//LOCATION Button
    $("#cityBtn").on("click", function () {
        console.log("button worked and files are linked")
        var city1 = $("#city1").val().trim();
        var city2 = $("#city2").val().trim();
        var city3 = $("#city3").val().trim();
        var city4 = $("#city4").val().trim();
        var city5 = $("#city5").val().trim();
        var cityArray=[];
        cityArray.push(city1,city2,city3,city4,city5);
        console.log(cityArray);
        var cities="";
        $("#cityList").text(city1+"<br>");
        localStorage.setItem(cities,cityArray);
    });
//DATE Button
    $('.datepicker').pickadate({
        // selectMonths: true,// Creates a dropdown to control month
        // selectYears: 15 // Creates a dropdown of 15 years to control year,
      });
      $("#dateBtn").on("click", function () {
     console.log($("#startDate").val());
     console.log($("#endDate").val());
     var startDate = $("#startDate").val();
     var endDate = $("#endDate").val();
     dateArray=[startDate,endDate];
    });
//HOME LOCATION Button
$("#homeBtn").on("click", function () {
    console.log("button worked and files are linked")
    var homeCity = $("#home").val().trim();
    console.log(homeCity);
});
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude; 
    var longitude= position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
}
//////


    // $('#interestList').click(function () {
    //     var result = $('input[type="checkbox"]:checked');
    //     if (result.length > 0) {
    //         var resultString = result.length + " checkboxe(s) checked<br/>";
    //         result.each(function () {
    //             resultString += $(this).val() + "<br/>";
    //         });
    //         $('#divResult').html(resultString);
    //     }
    //     else {
    //         $('#divResult').html("No checkbox checked");
    //     }
    // });
    //     //let's get our intersts in order
    //     $('input[type="checkbox"]:checked')
    //     var concerts=$("#concerts").prop('checked', true);
    //     if (concerts == true) {
    //         console.log("is checked");
    //     } else {
    //         console.log("not checked");
    //     }




});//end document ready