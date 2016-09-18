$(document).ready(function () {

    fillDetails();

});

function fillDetails() {
    //get ID from URL after ?=
    var query = getParameterByName("?");

    if (query === "") {
      unFound();
    }

    var firstCharacter = query.substr(0, 1);
    //for tv shows and movies get slightly different details
    if (firstCharacter === "T") {
        getDetailsFromQuery(query);
    }
    else if (firstCharacter === "M") {
        getDetailsFromMovie(query);
    }
    else {
      unFound();
    }
}

function unFound() {
  document.location = "/unfound.html";
  location.replace("/unfound.html");
}

function getParameterByName(name, url) {
    //regex to get id from after ?=
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getDetailsFromQuery(queryString) {

  var found = 0; //Set it to unfound

    $.getJSON("/js/tv.json", function (json) {

        for (var prop in json) {

            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of prop
                console.log("prop fail");
                continue;
            }

            var position = queryString.indexOf(".");
            var showID = queryString.slice(0, position);

            if (json[prop][0]["ID"] === showID) {

                //set details on page

                found = 1; //show found

                var Genre = json[prop][0]["Genre"];
                var Creator = json[prop][0]["Creator"];
                var Runtime = json[prop][0]["Time"];
                var PostURL = json[prop][0]["PosterURL"];

                var episodeIndex = queryString.slice(position + 1);

                var episodeTitle = json[prop][episodeIndex]["ShortName"];
                var epsiodeID = json[prop][episodeIndex]["EpisodeID"];
                var Synopsis = json[prop][episodeIndex]["Plot"];

                $(".epTitle").html(episodeTitle);
                $(".Synopsis").html(Synopsis);
                $(".Genre").html(Genre);
                $(".Creator").html(Creator);
                $(".Time").html(Runtime + " mins");
                $(".poster").attr('src', PostURL);
                document.getElementById("play").href = "play.html?=" + queryString;

            }

        }

        //check if found, otherwise go to "unfound" page.

        console.log(found);

        if (found === 0) {
          unFound();
        }

    });
}

function getDetailsFromMovie(queryString) {

  var found = 0;

    $.getJSON("js/movies.json", function (json) {

        for (var prop in json) {

            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of prop
                console.log("prop fail");
                continue;
            }

            if (json[prop][0]["ID"] === queryString) {

                //set details on page

                found = 1;

                var Genre = json[prop][0]["Genre"];
                var Creator = json[prop][0]["Director"];
                var Runtime = json[prop][0]["Time"];
                var PostURL = json[prop][0]["PosterURL"];
                var episodeTitle = json[prop][0]["Title"];
                var epsiodeID = json[prop][0]["ID"];
                var Synopsis = json[prop][0]["Plot"];

                $(".epTitle").html(episodeTitle);
                $(".Synopsis").html(Synopsis);
                $(".Genre").html(Genre);
                $(".Creator").html(Creator);
                $(".Time").html(Runtime + " mins");
                $(".poster").attr('src', PostURL);
                document.getElementById("play").href = "play.html?=" + queryString;

            }
        }

        if (found === 0) {
          unFound();
        }

    });
}
