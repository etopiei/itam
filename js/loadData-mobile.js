$(document).ready(function () {

  loadMobileData();

});

function loadMobileData() {

  var counter = 0;
  var category = "R";

  // $.getJSON("js/tv.json", function(json) {
  $.getJSON("/js/rec.json", function (json) {

    console.log("JSON Received");

    for (var prop in json) {
      if (!json.hasOwnProperty(prop)) {
        //The current property is not a direct property of prop
        continue;
      }

      if (counter === 6) {
        getTVData();
        return;
      }

      var Posturl = json[prop][0]["PosterURL"];
      var url = json[prop][0]["ID"];
      var type = url.substr(0, 1);

      if (url !== "") {
        if (type === "M") {
          createMoviePoster(url, Posturl, category);
        }
        else {
          createTVPoster(url, Posturl, category);
        }
      }
      else {
        console.log("failed to find");
        continue;
      }

      counter += 1;
    }

  }).fail(function (d, textStatus, error) {
    console.error("getJSON failed, status: " + textStatus + ", error: " + error)
  });
}

function getTVData() {

  var counter = 0;
  var category = "T";

  console.log(category);

  $.getJSON("/js/tv-min.json", function (json) {

    console.log("JSON Received");

    for (var prop in json) {

      if (!json.hasOwnProperty(prop)) {
        //The current property is not a direct property of p
        continue;
      }

      if (counter === 6) {
        getMovieData();
        return;
      }

      var Posturl = json[prop][0]["PosterURL"];
      var url = json[prop][0]["ID"];

      if (url !== "") {
        createTVPoster(url, Posturl, category);
      }
      else {
        console.log("failed to find");
        continue;
      }

      counter += 1;
    }

  }).fail(function (d, textStatus, error) {
    console.error("getJSON failed, status: " + textStatus + ", error: " + error)
  });
}

function getMovieData() {

  var counter = 0;
  var category = "M";

  $.getJSON("/js/movies.json", function (json) {
    for (var prop in json) {

      if (!json.hasOwnProperty(prop)) {
        //The current property is not a direct property of prop
        console.log("prop fail");
        continue;
      }

      if (counter === 6) {
        return;
      }

      var Posturl = json[prop][0]["PosterURL"];
      var url = json[prop][0]["ID"];

      if (url !== "") {
        createMoviePoster(url, Posturl, category);
      }
      else {
        console.log("failed to find");
        continue;
      }

      counter += 1;
    }


  });
}

function createMoviePoster(link, poster, cat) {

  var a = document.createElement("A");
  a.href = "/mobile/mobile-details.html?=" + link;
  var x = document.createElement("IMG");
  x.setAttribute("class", "spaced hor-spaced");
  x.src = poster;
  x.height = 536;
  x.width = 364;
  //depending on category add it to a differnt "box"
  if (cat === "R") {
    var box = document.getElementById("insert-rec");
  }
  else {
    var box = document.getElementById("insert-movies");
  }
  box.appendChild(a);
  a.appendChild(x);
}

function createTVPoster(link, poster, cat) {

  var a = document.createElement("A");
  a.href = "/mobile/mobile-episode-list.html?=" + link;
  var x = document.createElement("IMG");
  x.setAttribute("class", "spaced hor-spaced");
  x.src = poster;
  x.height = 536;
  x.width = 364;
  if (cat == "R") {
    var box = document.getElementById("insert-rec");
  }
  else {
    var box = document.getElementById("insert-tv");
  }
  box.appendChild(a);
  a.appendChild(x);
}
