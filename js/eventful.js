//api key xmnsRKbacpmsh6ZB83cvLNMQc4LTp1Znb3fjsngAa5M9Bt400S
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
var api_key = 'qmFPcpp4ZnChQdF5';


$(document).on("ready", function(){

  console.log("connected")
  $("#interestBtn").on("click", function(){
    // get the data from local storage
    var cities = JSON.parse(localStorage.cities)
    var homeCity = JSON.parse(localStorage.dateRanges)
    var dateRanges = JSON.parse(localStorage.dateRanges)
    var interests = JSON.parse(localStorage.interests)
    // build a request URL from the data
    var vacations = []
    appendCity()
    function appendCity(){
      console.log("appending City")
      // remove one city from the list
      city = cities.shift()
      // create a new vacation object and add the city to it
      var vacation = {
        city: city,
        dateWindows: []
      }
      // it will be necessary to keep track of how many times we call appendDates
      // because when we add interests to that specific date range we need to reference
      // its position in the array of date windows
      var dateIndex = 0
      appendDates(vacation, dateIndex, function(){
        // add the vacation to the list of possible vacations
        vacations.push(vacation)
        // if there are more cities repeat the process
        if (cities.length !== 0){
          // reset the dateRanges.
          // to get the recursive functions to terminate we've been removing
          // items from these lists...now we need to reset them because we're
          // creating a new vacation object
          dateRanges = JSON.parse(localStorage.dateRanges)
          interests = JSON.parse(localStorage.interests)
          appendCity()
        }
        else {
          console.log("===============END RESULT==============")
          console.log(vacations)
        }
      })
    }
    function appendDates(vacation, dateIndex, callback){
      console.log("appending dates")
      // remove a datewindow from the list and add it to an object
      // that will also store interests associated with that date (& city)
      var window = dateRanges.shift()
      var dateWindow = {
        startDate: window.startDate,
        endDate: window.endDate,
        interests: []
      }
      // add it to the vacation object
      vacation.dateWindows.push(dateWindow)
      // pass the vacation  object off to appendInterests
      appendInterests(vacation, dateIndex, function(){
        // if theres more dateWindows repeat the process
        if (dateRanges.length !== 0){
          dateIndex += 1
          // reset the interests
          interests = JSON.parse(localStorage.interests)
          appendDates(vacation, dateIndex, callback)
        }
        else{
          callback()
        }
      })
    }
    function appendInterests(vacation, dateIndex, callback){
      console.log("appending interests")
      var interest = interests.shift()
      interest = {
        interestName: interest.interestName,
        interestCategory: interest.category,
        events: []
      }
      // get events from API
      console.log("VACATION")
      console.log(vacation)
      var api_url = 'http://api.eventful.com/json/events/search?app_key='+ api_key+
      '&keywords='+interest.interestName +
      '&category='+interest.interestCategory +
      '&location='+ vacation.city.cityName +
      '&date='+ vacation.dateWindows[dateIndex].startDate+"00-"+vacation.dateWindows[dateIndex].endDate + '00';
      console.log(api_url)
      var request_url = cors_api_url + api_url;
      $.ajax({
        url: request_url,
        context: document.body
      })
      .done(function(data){
        console.log(data.responseText);
      })
      .error(function(error) {
        // we'll have to do our own error handling
        response = JSON.parse(error.responseText)
        console.log(response)
        if (response.events){
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
          // add the results to our interes object
          interest.events = parsedResults
          // and add our interest object to our vacation object
          vacation.dateWindows[dateIndex].interests.push(interest)
        }
        if (interests.length !== 0){
          appendInterests(vacation, dateIndex, callback)
        }
        else {callback()}
      })
    }
  })
})
