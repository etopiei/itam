$(document).ready(function () {

  checkType();

});

function checkType() {

  var typeID = getParameterByName("?");

  if (typeID === "") {
    unFound();
  }

  if (typeID === "M") {
    $(".title").html("Movies");
  }
  else if (typeID === "T") {
    $(".title").html("TV Shows");
  }
  else {
    unFound();
  }

  loadPosters(typeID);

}

function unFound() {
  document.location = "/unfound.html";
  location.replace("/unfound.html");
}

function loadPosters(typeID) {

  if (typeID === "M") {
    //load movies
    //change background colour

    document.getElementById("bg").style.backgroundColor = "#4169e1";

    //get movies from json (add them to html page)

    $.getJSON("/js/movies.json", function (json) {

      for (var prop in json) {

        if (!json.hasOwnProperty(prop)) {
          //The current property is not a direct property of p
          continue;
        }

        var Posturl = json[prop][0]["PosterURL"];
        var url = json[prop][0]["ID"];

        createMoviePoster(url, Posturl);

      }
    });

  }
  else if (typeID === "T") {
    //load tv shows
    //change background colour

    document.getElementById("bg").style.backgroundColor = "#20b2aa";

    //get tv shows from json (add them to html page)
    $.getJSON("/js/tv-min.json", function (json) {

      for (var prop in json) {

        if (!json.hasOwnProperty(prop)) {
          //The current property is not a direct property of p
          continue;
        }

        var Posturl = json[prop][0]["PosterURL"];
        var url = json[prop][0]["ID"];

        createTVPoster(url, Posturl);

      }
    });
  }
}

function createMoviePoster(link, poster) {

  var a = document.createElement("A");
  a.href = "/mobile/mobile-details.html?=" + link;
  var x = document.createElement("IMG");
  x.setAttribute("class", "spaced hor-spaced");
  x.src = poster;
  x.height = 512;
  x.width = 300;
  var box = document.getElementById("insert-posters");
  box.appendChild(a);
  a.appendChild(x);
}

function createTVPoster(link, poster) {

  var a = document.createElement("A");
  a.href = "/mobile/mobile-episode-list.html?=" + link;
  var x = document.createElement("IMG");
  x.setAttribute("class", "spaced hor-spaced");
  x.src = poster;
  x.height = 512;
  x.width = 300;
  var box = document.getElementById("insert-posters");
  box.appendChild(a);
  a.appendChild(x);
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
