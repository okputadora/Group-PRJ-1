




//api key xmnsRKbacpmsh6ZB83cvLNMQc4LTp1Znb3fjsngAa5M9Bt400S
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
var api_key = 'qmFPcpp4ZnChQdF5';
var api_url = 'http://api.eventful.com/rest/events/search?app_key='+ api_key+'&keywords="'+searchTERM+'&location='+location+'&date=Future';
var request_url = cors_api_url + api_url;
$.ajax({
  url: request_url,
  context: document.body
})
  .error(function(error) {
    console.log('error!');
    console.log(error);
  })
  .done(function(data) {
    console.log(data);
  });



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
