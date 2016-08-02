$(document).ready(function () {

    loadEpsFromId();

});

function loadEpsFromId() {

    var showID = getParameterByName("?");

    if (showID === "") {
      unFound();
    }

    loadEpisodeTitles(showID);

}

function unFound() {
  document.location = "/unfound.html";
  location.replace("/unfound.html");
}

function loadEpisodeTitles(ID) {

  var found = 0;

  $.getJSON("/js/tv.json", function (json) {    
        for (var prop in json) {

            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of prop
                console.log("prop fail");
                continue;
            }

            if (json[prop][0]["ID"] === ID) {

              found = 1;

                var showPosterURL = json[prop][0]["PosterURL"];
                $(".showPoster").attr('src', showPosterURL);
                var header = json[prop][0]["Title"];
                $(".epsiodeHeading").html("Episode List: " + header);

                for (var i = 1; i < json[prop].length; i++) {

                    var episodeTitle = json[prop][i]["Name"];
                    var epsiodeID = json[prop][i]["EpisodeID"];
                    createElement(episodeTitle, epsiodeID);

                }

            }

        }

        if (found === 0) {
          unFound();
        }

    });

}

function createElement(title, epID) {

    var br = document.createElement("br");
    var place = document.getElementById("insert-episodes");
    place.appendChild(br);

    var a = document.createElement("a");
    a.textContent = title;
    a.href = "details.html?=" + epID;
    place.appendChild(a);

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
