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
        var cities = [];
        var rank = 1;

        $(".city").each(function () {
            if ($(this).val() !== "") {
                var city = {
                    rank: rank,
                    cityName: $(this).val(),
                };
                cities.push(city);
                rank++;
            }
        });
        console.log(cities);

    });

    //Interests
    $("#interestBtn").on("click", function () {
        console.log("Interests button worked and files are linked")
        var interests = [];
        var interest;
        var categories = ["music", "sports", "theater"]
        $(".interest").each(function () {
            if ($(this).val() !== "") {
                for (i = 0; i < categories.length; i++) {
                    if ($(this).hasClass(categories[i])) {
                        var cat = categories[i]
                        console.log(cat)
                        interest = {
                            interestName: $(this).val(),
                            category: cat
                        }
                        interests.push(interest);
                        break;
                    }
                }
            }
        })
        console.log(interests)
    })

    $('.datepicker').pickadate({
        // selectMonths: true,// Creates a dropdown to control month
        // selectYears: 15 // Creates a dropdown of 15 years to control year,
    });
    //Dates with MOMENT Conversion
    $("#dateBtn").on("click", function () {
        console.log("DatesBTN worked and files are linked")
        //keep this vacaLenght
        var vacaLength = parseInt($("#vacaLength").val().trim());
        console.log(vacaLength)
        console.log(typeof vacaLength);
        // var startDate = $("#startDate").val();
        // var endDate = $("#endDate").val();
        // var ourFormat= "DDMMMMY";
        // var convertedStart = moment(startDate, ourFormat);
        // var ourStart=moment(convertedStart).format("YYYYMMDD")
        // var convertedEnd = moment(endDate, ourFormat);
        // var ourEnd=moment(convertedEnd).format("YYYYMMDD")
        var ranges = [];

        $(".date").each(function () {
            if ($(this).val() !== "") {
                var date = $("#this").val();
                var ourFormat = "DDMMMMY";
                var convertedStartDate = moment(date, ourFormat);
                var startDate = moment(convertedStartDate).format("YYYYMMDD");
                var momentStart = moment(startDate);
                var endDate=moment(momentStart).add(vacaLength, "day").format("YYYYMMDD");
                console.log(endDate);
                var range = {
                    startDate: convertedStartDate,
                    endDate: endDate,
                };
                ranges.push(range);
            }

            console.log(ranges);
        });
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
    //lat and long positions happen behind the scenes
    function showPosition(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude);
        console.log(longitude);
        var latlon = position.coords.latitude + "," + position.coords.longitude;
    }
});
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
