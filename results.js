$(document).on("ready", function () {
    //Copied from application.js 
    // var config = {
    //     apiKey: "AIzaSyD45BBdEbVt8n7x_oiBYMCbmw4pTZtt3jM",
    //     authDomain: "groupapplication-f576b.firebaseapp.com",
    //     databaseURL: "https://groupapplication-f576b.firebaseio.com",
    //     projectId: "groupapplication-f576b",
    //     storageBucket: "",
    //     messagingSenderId: "573680163830"
    //   };
    //   firebase.initializeApp(config);

    //Copied over from Tony's file
    $(function () {
        $old(".city").autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: "https://www.google.com/maps/@?api=1&map_action=map&parameters",
                    dataType: "json",
                    data: {
                        apikey: "AIzaSyCYUN28qqTKuwxF_I12PmuRvAQ6MqbmUDk",
                        term: request.term
                    },
                    success: function (data) {
                        response(data);
                    }
                });
            },
        })
    })