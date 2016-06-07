$(document).ready(function(){

   getRecommendedData();

});

function getRecommendedData () {

    var counter = 0;

   // $.getJSON("js/tv.json", function(json) {
        $.getJSON("js/rec.json", function(json) {

            console.log("JSON Received");

            for (var prop in json) {
                if (!json.hasOwnProperty(prop)) {
                    //The current property is not a direct property of prop
                    continue;
                }

                var Posturl = json[prop][0]["PosterURL"];
                var url = json[prop][0]["ID"];
                //split url, get only first letter
                var type = url.substr(0,1);
                if (type === "M") {

                  var currentPoster = ".posterR";
                  var currentLinkPoster = ".linkR"
                  currentPoster += counter+1;
                  currentLinkPoster += counter+1;

                  if (url !== "") {
                      $(currentPoster).attr('src',Posturl);
                      $(currentLinkPoster).attr('href', "/details.html?=" + url);
                  }
                  else {
                      console.log("failed to find");
                      continue;
                  }

                  counter += 1;
                }
                else if (type === "T"){

                var currentPoster = ".posterR";
                var currentLinkPoster = ".linkR"
                currentPoster += counter+1;
                currentLinkPoster += counter+1;

                if (url !== "") {
                    $(currentPoster).attr('src',Posturl);
                    $(currentLinkPoster).attr('href', "/episode-list.html?=" + url);
                }
                else {
                    console.log("failed to find");
                    continue;
                }

                counter += 1;
              }
            }

            getTVData();

    }).fail(function (d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: " + error)
    });
}

function getTVData () {

     var counter = 0;

     $.getJSON("js/tv.json", function(json) {

         console.log("JSON Received");

         for (var prop in json) {

            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of p
                continue;
            }

            var Posturl = json[prop][0]["PosterURL"];
            var url = json[prop][0]["ID"];
            var currentPoster = ".posterT";
            var currentLinkPoster = ".linkT"
            currentPoster += counter+1;
            currentLinkPoster += counter+1;

            if (url !== "") {
                $(currentPoster).attr('src',Posturl);
                $(currentLinkPoster).attr('href', "/episode-list.html?=" + url);
            }
            else {
                console.log("failed to find");
                continue;
            }

            counter += 1;
        }

    getMovieData();

  }).fail(function (d, textStatus, error) {
      console.error("getJSON failed, status: " + textStatus + ", error: " + error)
  });
}

function getMovieData () {

    var counter = 0;

    $.getJSON("js/movies.json", function(json) {
        for (var prop in json) {

            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of prop
                console.log("prop fail");
                continue;
            }

            var Posturl = json[prop][0]["PosterURL"];
            var url = json[prop][0]["ID"];
            var currentPoster = ".posterM";
            var currentLinkPoster = ".linkM"
            currentPoster += counter+1;
            currentLinkPoster += counter+1;

            if (url !== "") {
                $(currentPoster).attr('src',Posturl);
                $(currentLinkPoster).attr('href', "/details.html?=" + url);
            }
            else {
                console.log("failed to find");
                continue;
            }

            counter += 1;
        }


    });

}
