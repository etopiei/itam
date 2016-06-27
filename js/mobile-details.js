$(document).ready(function () {

    getID();

});

function getID() {

    var ID = getParameterByName("?");

    if (ID === "") {
      unFound();
    }

    var type = ID.substr(0, 1);

    if (type === "M") {
        getMovieDetails(ID);
    }
    else {
        getTVDetails(ID);
    }

}

function unFound() {
  document.location = "/unfound.html";
  location.replace("/unfound.html");
}

function getMovieDetails(queryString) {

    $.getJSON("/js/movies.json", function (json) {

        for (var prop in json) {

            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of prop
                console.log("prop fail");
                continue;
            }

            if (json[prop][0]["ID"] === queryString) {

                //set details on page

                var Genre = json[prop][0]["Genre"];
                var Creator = json[prop][0]["Director"];
                var Runtime = json[prop][0]["Time"];
                var episodeTitle = json[prop][0]["Title"];
                var episodeID = json[prop][0]["ID"];
                var Synopsis = json[prop][0]["Plot"];

                //add details to page via insert-details

                $(".title").html(episodeTitle);
                $(".Plot").html("Plot: " + Synopsis);
                $(".Genre").html("Genre: " + Genre);
                $(".Creator").html("Creator: " + Creator);
                $(".Runtime").html("Runtime: " + Runtime + " mins");

                var btn = document.getElementById("button");
                btn.href = "/play.html?=" + episodeID;

            }
        }
    });
}

function getTVDetails(ID) {

    $.getJSON("/js/tv.json", function (json) {

        for (var prop in json) {

            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of prop
                console.log("prop fail");
                continue;
            }

            var position = ID.indexOf(".");
            var showID = ID.slice(0, position);

            if (json[prop][0]["ID"] === showID) {

                //set details on page

                var Genre = json[prop][0]["Genre"];
                var Creator = json[prop][0]["Creator"];
                var Runtime = json[prop][0]["Time"];

                var episodeIndex = ID.slice(position + 1);

                var episodeTitle = json[prop][episodeIndex]["ShortName"];
                var episodeID = json[prop][episodeIndex]["EpisodeID"];
                var Synopsis = json[prop][episodeIndex]["Plot"];

                $(".title").html(episodeTitle);
                $(".Plot").html("Plot: " + Synopsis);
                $(".Genre").html("Genre: " + Genre);
                $(".Creator").html("Creator: " + Creator);
                $(".Runtime").html("Runtime: " + Runtime + " mins");

                var btn = document.getElementById("button");
                btn.href = "/play.html?=" + episodeID;

            }
        }
    });
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
