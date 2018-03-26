//api key xmnsRKbacpmsh6ZB83cvLNMQc4LTp1Znb3fjsngAa5M9Bt400S
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
var api_key = 'qmFPcpp4ZnChQdF5';


$(document).on("ready", function(){

//   var api_url = 'http://api.eventful.com/json/categories/list?app_key='+ api_key
//   var request_url = cors_api_url + api_url;
//   $.ajax({
//     url: request_url,
//     context: document.body
//   })
//   .done(function(data) {
//     console.log("sUCCES")
//     console.log(data);
//   })
//   // Very strange...the response is coming to us in the error handler!!!
//   // but its not an error! Perhaps something to do with our CORS work around
//   .error(function(error) {
//     // we'll have to do our own error handling
//     response = JSON.parse(error.responseText)
//     console.log(response)
//   })
// })
  console.log("connected")
  $("#interestBtn").on("click", function(){
    // get the data from local storage
    var cities = JSON.parse(localStorage.cities)
    var dateRanges = JSON.parse(localStorage.dateRanges)
    var homeCity = JSON.parse(localStorage.dateRanges)
    var interests = JSON.parse(localStorage.interests)
    console.log("DATA FROM BACKEND")

    console.log(cities)
    console.log(dateRanges)
    console.log(homeCity)
    console.log(interests)
    // this will be the callback function after all of the results have come in
    function displayResults(vacations){
      console.log(vacations)
    }
    // build a request URL from the data
    var vacations = []
    cities.forEach(function(city){
      var vacation = {
        city: city,
        dateWindows:[]
      }
      dateRanges.forEach(function(dateRange){
        var dateWindow = {
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          interests: []
        }
        interests.forEach(function(interest){
          var eventList = {
            interestName: interest.interestName,
            events: []
          }
          var api_url = 'http://api.eventful.com/json/events/search?app_key='+ api_key+
          '&keywords='+interest.interestName +
          '&category='+interest.category +
          '&location='+ city.cityName +
          '&date='+dateRange.startDate+"00-"+dateRange.endDate + '00';
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
          // but its not an error! Perhaps something to do with our CORS work around
          .error(function(error) {
            // we'll have to do our own error handling
            response = JSON.parse(error.responseText)
            console.log(response)
            var parsedResults = response.events.event.map(function(event){
              return ({
                title: event.title,
                city: event.city_name,
                state: event.region_name,
                description: event.description,
                venue: event.venue_name,
                venueAddress: event.venue_address,
                venueUrl: event.venue_url,
                lat: event.latitude,
                lon: event.longitude,
                startTime: event.start_time
              })
            })
          })
          .then(function(){
            console.log(parsedResults)
            // put the events into the event list object
            // buildObjecy(parsedResults)
            eventList.events = parsedResults
            // then put the eventList into the interest list of the datewindow object
            dateWindow.interests.push(eventList)
            // check if this is the last interest
            // if (interestIndex === interests.length -1){
            ////   callback function
            // // then put the datewindow object into the vacation object
                  //vacation.dateWindows.push(dateWindow)
            //}
            // and if this is the last interest of the last date window
            // then push the date window to datewindow list
            // and then if this is the last city put the whole thing to the
          })
          })
        })

      })
      vacations.push(vacation)
      setTimeout(function(){
        console.log("VACATIONS")
        console.log(vacations)
      }, 10000)
    })
  })
