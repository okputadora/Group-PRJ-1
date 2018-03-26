$(window).on("load", function () {
  console.log("WE're in javascript.js")
  //Call to Amadeus API for flight price

  //Example URL
  //"https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=0COdldqUIjt22sU7ABdhCSSmsYxU4JTa&origin=FRA&destination=LON&departure_date=2018-06-17&one-way=false&duration=7"

  function flightfare() {
    var apikey = "?apikey=0COdldqUIjt22sU7ABdhCSSmsYxU4JTa";
    var siteurl = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search";
    // search parameters
    // var org= "&origin="+$("#origin").val();  /* ABC */
    // var dest="&destination="+$("#city1").val();  /* XYZ */
    // var depdate="&departure_date="+$("#startdt").val(); /* YYYY-mm-dd */

    //test data
    var org = "&origin=NYC";  /* ABC */
    var dest = "&destination=MIA";  /* XYZ */
    var depdate = "&departure_date=2018-07-15"; /* YYYY-mm-dd */
    // end of test data


    var type = "&one-way=false"  /* show round trip fare */
    var length = "&duration=7";  /* length of trip */

    var searchurl = siteurl + apikey + org + dest + depdate + type + length;

    $.ajax({
      url: searchurl,
      method: "GET"
    })
      .then(function (response) {
        console.log(response);
      });
  }

  // End of Flight Price

  // *************************************************************************

  // Call to Amadeus API for hotel price

  // Exaple URL
  // "https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=0COdldqUIjt22sU7ABdhCSSmsYxU4JTa&location=BOS&check_in=2018-06-15&check_out=2018-06-17&radius=20&currency=usd&number_of_results=10&all_rooms=false"

  function hotelstay() {
    var apikey = "?apikey=0COdldqUIjt22sU7ABdhCSSmsYxU4JTa";
    var siteurl = "https://api.sandbox.amadeus.com/v1.2/hotels/search-airport"

    // search paramaters
    // var dest= "&location="+$(city1).val();
    // var checkin = "&check_in="+    /* YYYY-mm-dd */
    // var checkout = "&check_out="+   /* YYYY-mm-dd */
    // var rad = "&radius=" +   /* distance in km */

    // test data
    var dest = "&location=BOS";
    var checkin = "&check_in=2018-08-01";    /* YYYY-mm-dd */
    var checkout = "&check_out=2018-08-07";  /* YYYY-mm-dd */
    var rad = "&radius=20";   /* distance in km */
    // end of test data

    var curr = "&currency=usd";   /* show prices in this currency */
    var rescount = "&number_of_results=10";  /* max number of results */
    var roomtype = "&all_rooms=false";  /* shows lowest rate room */

    var searchurl = siteurl + apikey + dest + checkin + checkout + rad + curr + rescount + roomtype;
    console.log (searchurl);

    $.ajax({
      url: searchurl,
      method: "GET"
    })
      .then(function (response) {
        console.log(response);
      });

  }

  // End of Hotel Stay


  //**********************************************************************************


     // // City Autocomplete - 2 functions - Showcity, Autocomplete

    // // function showcity sends the correct city and IATA code to the screen

    function showcity(loc,message) {
      $("#"+loc.id+"resp").text(message);
  }

  $(".cityComplete").autocomplete({
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
          console.log(ui.item.label);
          console.log(ui.item.value);
          showcity(this, ui.item.label);
      },
  });

// End of City Autocomplete

});
