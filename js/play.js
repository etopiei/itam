$(document).ready(function () {

    var query = getParameterByName("?");

    if (query === "") {
      unFound();
    }

    var firstCharacter = query.substr(0, 1);
    if (firstCharacter === "T") {
        getTVURL(query);
    }
    else if (firstCharacter === "M") {
        getMovieURL(query);
    }
    else {
      unFound();
    }

});

function unFound() {
  document.location = "/unfound.html";
  location.replace("/unfound.html");
}

function getTVURL(input) {

  var found = 0;

    $.getJSON("js/tv.json", function (json) {
        for (var prop in json) {

            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of prop
                console.log("prop fail");
                continue;
            }

            //make input (or url parameter) apply to details page, but first check if it should be mobile or not

            var detailsLink = document.getElementById("changeMe");
            var backButton = document.getElementById("backButton");

            if (screen.width <= 699 || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
              //it is mobile
              detailsLink.href = "/mobile/mobile-details.html?=" + input;
              backButton.setAttribute("class","upSized btn btn-primary");
            }
            else {
              //it is desktop
              detailsLink.href = "/details.html?=" + input;
            }

            var position = input.indexOf(".")
            var showID = input.slice(0, position);

            if (json[prop][0]["ID"] === showID) {

              found = 1;

                var numEpisodes = json[prop].length;

                for (var j = 1; j < numEpisodes; j++) {

                    if (json[prop][j]["EpisodeID"] === input) {

                        var linkURL = json[prop][j]["URL"];
                        var title = json[prop][j]["Name"];
                        var last = numEpisodes - 1;
                        if (j !== last) {
                            var nextLink = json[prop][j + 1]["EpisodeID"];
                            if (nextLink !== "") {
                                addNextButton(nextLink);
                            }
                          }
                        else {
                          deleteNextButton();
                        }
                        $(".video-title").html(title);
                        createPlayer(linkURL);

                    }
                }
            }
        }

        if (found === 0) {
          unFound();
        }

    });
}

function deleteNextButton () {
  document.getElementById('linkButton').setAttribute('style','visibility:hidden');
}

function addNextButton(link) {
    //change button link and make visible
    //access it via id Buttonlink
    var aLink = document.getElementById("a-bit");
    aLink.href = "play.html?=" + link;
    var linkButton = document.getElementById("linkButton");
    linkButton.style.visibility = "visible";

    if (screen.width <= 699) {
        linkButton.setAttribute("class", "upSized btn btn-primary");
    }
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
        linkButton.setAttribute("class", "upSized btn btn-primary");
    }

}

function getMovieURL(input) {

  deleteNextButton();

    $.getJSON("js/movies.json", function (json) {
        for (var prop in json) {

            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of prop
                console.log("prop fail");
                continue;
            }

            if (json[prop][0]["ID"] === input) {

                var linkURL = json[prop][0]["URL"];
                var title = json[prop][0]["Title"];
                $(".video-title").html(title);
                createPlayer(linkURL);

            }
        }
    });
}

function createPlayer(link) {

    var completeSrc = "http://www.youtube.com/embed/" + link + "?&version=3&autohide=1&autoplay=1&disablekb=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0";
    frm = document.createElement("IFRAME");
    frm.setAttribute("src", completeSrc);
    frm.setAttribute("frameborder", "0");
    frm.setAttribute("allowfullscreen", "1");
    frm.style.width = 640 + "px";
    frm.style.height = 480 + "px";
    place = document.getElementById("embeded-player");
    place.appendChild(frm);

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
