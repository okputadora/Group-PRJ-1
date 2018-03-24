
var city1 = $("#city1").val()
var city2 = $("#city2").val()
var city3 = $("#city3").val()
var city4 = $("#city4").val()
var city5 = $("#city5").val()

var searchTerms = "SEARCH TERMS FROM THE FORM"
var location = "VACATION DESTINATIONS"
var dateRange = "DATE THE USER WANTS TO VACATION"

//api key xmnsRKbacpmsh6ZB83cvLNMQc4LTp1Znb3fjsngAa5M9Bt400S
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
var api_key = 'qmFPcpp4ZnChQdF5';
var api_url = 'http://api.eventful.com/json/events/search?app_key='+ api_key+'&keywords=concerts&location=San+Diego&date=Future';
var request_url = cors_api_url + api_url;
$.ajax({
  url: request_url,
  context: document.body
})
.done(function(data) {
  console.log("sUCCES")
  console.log(data.responseText);
})
// Very strange...the response is coming to us in the error handler!!!
// but its not an error!
.error(function(error) {
  console.log('error!');
  response = JSON.parse(error.responseText)
  console.log(response)
  var parsedResults = response.events.event.map(function(event){
    return ({
      title: event.title,
      city: event.city_name,
      description: event.description,
      venue: event.venue_name,
      lat: event.latitude,
      lon: event.longitude,
      startTime: event.start_time
    })
  })

  console.log(parsedResults)

  //Call to Amadeus API

  // Example URL
  // "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=0COdldqUIjt22sU7ABdhCSSmsYxU4JTa&origin=FRA&destination=LON&departure_date=2018-06-17&one-way=false&duration=7"

  var apikey="?apikey=0COdldqUIjt22sU7ABdhCSSmsYxU4JTa";
  var siteurl = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search";
  // search parameters
  // var org= "&origin="+$("#origin").val();  /* ABC */
  // var dest="&destination="+$("#citi1").val();  /* XYZ */
  // var depdate="&departure_date="+$("#startdt").val(); /* YYYY-mm-dd */

  var org= "&origin=NYC";  /* ABC */
  var dest="&destination=MIA";  /* XYZ */
  var depdate="&departure_date=2018-07-15"; /* YYYY-mm-dd */
  var type="&one-way=false"
  var length = "&duration=7";

  var searchurl= siteurl+apikey+org+dest+depdate+type+length;

  $.ajax({
      url: searchurl,
      method: "GET"})
      .then(function(response) {
    console.log(response);
      });
})
