




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
