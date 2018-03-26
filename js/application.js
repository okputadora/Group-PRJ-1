$(document).ready(function () {
    //  TONYS CODE
    // $(window).on("load", function () {
    //
    //     function log(message) {
    //         console.log(message);
    //         console.log(typeof (message));
    //         console.log(message.charAt(0));
    //         //switching selector from "#city1" to class selector ".city"
    //         $(".city").val(message.charAt(0)); /* .prependTo($("#city1")); */
    //         // $old("#city1").attr("id").scrollTop(0);
    //     }
    //
    //     $(function () {
    //         $old(".city").autocomplete({
    //             source: function (request, response) {
    //                 $.ajax({
    //                     url: "https://api.sandbox.amadeus.com/v1.2/airports/autocomplete",
    //                     dataType: "json",
    //                     data: {
    //                         apikey: "0COdldqUIjt22sU7ABdhCSSmsYxU4JTa",
    //                         term: request.term
    //                     },
    //                     success: function (data) {
    //                         response(data);
    //                     }
    //                 });
    //             },
    //             minLength: 3,
    //             select: function (event, ui) {
    //                 console.log(ui);
    //                 console.log(ui.item.label);
    //                 console.log(ui.item.value);
    //                 // log(ui.item ? "Selected: " + ui.item.label: "Nothing selected, input was " + this.value);
    //                 log(ui.item.label);
    //                 // log(ui.item ?
    //                 //   "Selected: " + ui.item.label :
    //                 //   "Nothing selected, input was " + this.value);
    //             },
    //             open: function () {
    //                 $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
    //             },
    //             close: function () {
    //                 $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
    //             }
    //         });
    //     });
    // // });
    // //
    //************
    //CITY LOCATION CODE
    //************
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
        //local storage done in pairs or stings
        var storedCities = JSON.stringify(cities);
        localStorage.setItem("cities", storedCities);
        console.log(localStorage)
    });


    //Interests
    $("#interestBtn").on("click", function () {
        var interests = [];
        var interest;
        var categories = ["music", "sports", "theater"]
        $(".interest").each(function () {
            if ($(this).val() !== "") {
                for (i = 0; i < categories.length; i++) {
                    if ($(this).hasClass(categories[i])) {
                        var cat = categories[i]
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
        // add to local storage
        localStorage.setItem("interests", JSON.stringify(interests))
    })

    //************
    //DATE and range code
    //************
    $('.datepicker').pickadate({
        // selectMonths: true,// Creates a dropdown to control month
        // selectYears: 15 // Creates a dropdown of 15 years to control year,
    });
    //Dates with MOMENT Conversion
    $("#dateBtn").on("click", function () {
        //keep this vacaLenght
        var vacaLength = parseInt($("#vacaLength").val().trim());
        var ranges = [];

        $(".date").each(function () {
            if ($(this).val() !== "") {
                var date = $(this).val();
                var ourFormat = "DDMMMMY";
                // create a moment from the users input date
                var startMoment = moment(date, ourFormat)
                // use this moment to get a string of the start date
                // in the format we want for storage
                var startDate = startMoment.format("YYYYMMDD");
                // use the original moment object to calculate the end date
                // and format it at the same time
                var endDate = startMoment.add(vacaLength, "day").format("YYYYMMDD")
                var range = {
                    startDate: startDate,
                    endDate: endDate,
                };
                ranges.push(range);
            }

        });
        console.log(ranges);
        // add to localstorage
        localStorage.setItem("dateRanges", JSON.stringify(ranges))
    });


    //************
    //HomeLocation Code
    //************
    $("#homeBtn").on("click", function () {
        console.log("button worked and files are linked")
        var homeCity = $("#home").val().trim();
        console.log(homeCity);
        // add to local storage
        localStorage.setItem("homeCity", homeCity)
    });
    //************
    //get Long and Lat of current computer location
    //************
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

    //************
    //Take Long and Lat of current computer location and get city and airport code
    //no code yet
    //************

});
