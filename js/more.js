$(document).ready(function () {
  getType();
})

function getType() {

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

  loadDataFromJSON(typeID);

}

function unFound() {
  document.location = "/unfound.html";
  location.replace("/unfound.html");
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

function loadDataFromJSON(type) {
  if (type === "M") {

    //change background colour

    document.getElementById("bg").style.backgroundColor = "#7592A4";

    var link = document.getElementById("genreLink");
    link.href="genre.html?=M";

    //get movies from json (add them to html page)

    $.getJSON("/js/movies.json", function (json) {

      for (var prop in json) {

        if (!json.hasOwnProperty(prop)) {
          //The current property is not a direct property of p
          continue;
        }

        var Posturl = json[prop][0]["PosterURL"];
        var url = json[prop][0]["ID"];

        createMovieElement(Posturl, url);

      }
    });


  }
  else if (type === "T") {

    //change background colour and button link

    document.getElementById("bg").style.backgroundColor = "#7592A4";
    var link = document.getElementById("genreLink");
    link.href="genre.html?=T";

    //get tv shows from json (add them to html page)
    $.getJSON("/js/tv-min.json", function (json) {

      for (var prop in json) {

        if (!json.hasOwnProperty(prop)) {
          //The current property is not a direct property of p
          continue;
        }

        var Posturl = json[prop][0]["PosterURL"];
        var url = json[prop][0]["ID"];

        createTVElement(Posturl, url);

      }
    });
  }
}

function createTVElement(link, code) {

  //create a poster that links to the code from the json

  var a = document.createElement("A");
  a.href = "/episode-list.html?=" + code;
  var x = document.createElement("IMG");
  x.setAttribute("class", "spaced");
  x.src = link;
  x.height = 256;
  x.width = 150;
  var box = document.getElementById("addNew");
  box.appendChild(a);
  a.appendChild(x);

}

function createMovieElement(link, code) {

  //create a poster that links to the code from the json

  var a = document.createElement("A");
  a.href = "/details.html?=" + code;
  console.log(a.href);
  var x = document.createElement("IMG");
  x.setAttribute("class", "spaced");
  x.src = link;
  x.height = 256;
  x.width = 150;
  var box = document.getElementById("addNew");
  box.appendChild(a);
  a.appendChild(x);

}
