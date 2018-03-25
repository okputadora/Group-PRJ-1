$(document).ready(function () {

    event.preventDefault();

    $(window).on("load", function () {

        function log(message) {
            console.log(message);
            console.log(typeof (message));
            console.log(message.charAt(0));
            //switching selector from "#city1" to class selector ".city"
            $(".city").val(message.charAt(0)); /* .prependTo($("#city1")); */
            // $old("#city1").attr("id").scrollTop(0);
        }

        $(function () {
            $old(".city").autocomplete({
                source: function (request, response) {
                    $.ajax({
                        url: "https://api.sandbox.amadeus.com/v1.2/airports/autocomplete",
                        dataType: "json",
                        data: {
                            apikey: "0COdldqUIjt22sU7ABdhCSSmsYxU4JTa",
                            term: request.term
                        },
                        success: function (data) {
                            response(data);
                        }
                    });
                },
                minLength: 3,
                select: function (event, ui) {
                    console.log(ui);
                    console.log(ui.item.label);
                    console.log(ui.item.value);
                    // log(ui.item ? "Selected: " + ui.item.label: "Nothing selected, input was " + this.value);
                    log(ui.item.label);
                    // log(ui.item ?
                    //   "Selected: " + ui.item.label :
                    //   "Nothing selected, input was " + this.value);
                },
                open: function () {
                    $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
                },
                close: function () {
                    $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
                }
            });
        });
    });
    //
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
        var storedCities = JSON.stringify(city);
        localStorage.setItem("cities", "storedCities");
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

    //************
    //DATE and range code
    //************
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
                var date = $(this).val();
                console.log("this Date " + date);
                var ourFormat = "DDMMMMY";
                var convertedStartDate = moment(date, ourFormat);
                var startDate = moment(convertedStartDate).format("YYYYMMDD");
                console.log("start Date formated " + startDate);

                var ourFormat = "DDMMMMY";
                var convertedStartDate = moment(date, ourFormat);
                console.log("convertedStartDate")
                console.log(convertedStartDate)
                var startDate = moment(convertedStartDate).add(vacaLength, "day")
                console.log("start date")
                console.log(startDate)

                var momentStart = moment(startDate);
                var endDate = moment(momentStart).add(vacaLength, "day").format("YYYYMMDD");
                console.log("end Date formated" + endDate);
                var range = {
                    startDate: convertedStartDate,
                    endDate: endDate,
                };
                ranges.push(range);
            }

            console.log(ranges);
        });
    });


    //************
    //HomeLocation Code
    //************
    $("#homeBtn").on("click", function () {
        console.log("button worked and files are linked")
        var homeCity = $("#home").val().trim();
        console.log(homeCity);
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