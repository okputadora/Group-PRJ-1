

var searchTerms = "SEARCH TERMS FROM THE FORM"


//api key xmnsRKbacpmsh6ZB83cvLNMQc4LTp1Znb3fjsngAa5M9Bt400S
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
var api_key = 'qmFPcpp4ZnChQdF5';
var api_url = 'http://api.eventful.com/json/events/search?app_key='+ api_key+'&keywords=books&location=San+Diego&date=Future';
var request_url = cors_api_url + api_url;
$.ajax({
  url: request_url,
  context: document.body
})
.done(function(data) {
  console.log("sUCCES")
  console.log(data.responseText);
})
.error(function(error) {
    console.log('error!');
    response = JSON.parse(error.responseText)
    console.log(response)
  })
