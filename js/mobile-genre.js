$(document).ready(function () {

  var type = getParameterByName("?");

  if (type === "T") {
    createGenrePageTV();
  }
  else if (type === "M") {
    createGenrePageMovie();
  }
  else {
    unFound();
  }

});

function unFound() {
  document.location = "/unfound.html";
  location.replace("/unfound.html");
}

function createGenrePageTV() {

  //loop through all the genres

  for (var i = 0; i < 8; i++) {

    //add a div, with title of each genre

    var x = document.getElementById('addNew');
    var d = document.createElement('div');

    switch (i) {
      case 0:
        var currentClass = "Action";
        break;
      case 1:
        var currentClass = "Comedy";
        break;
      case 2:
        var currentClass = "Drama";
        break;
      case 3:
        var currentClass = "Sci-Fi";
        break;
      case 4:
        var currentClass = "Romance";
        break;
      case 5:
        var currentClass = "Adventure";
        break;
      case 6:
        var currentClass = "Mystery";
        break;
      case 7:
        var currentClass = "Thriller";
      }

      d.setAttribute("class", currentClass + " for-you");
      d.setAttribute("id", currentClass);
      var title = document.createElement('h3');
      title.appendChild(document.createTextNode(currentClass));
      x.appendChild(d);
      d.appendChild(title);

    }

      //loop through the shows and add them to the div's

      //get tv shows from json (add them to html page)

      $.getJSON("/js/tv-min.json", function (json) {

        for (var prop in json) {

          if (!json.hasOwnProperty(prop)) {
            //The current property is not a direct property of p
            continue;
          }

          var Posturl = json[prop][0]["PosterURL"];
          var url = json[prop][0]["ID"];
          var genre = json[prop][0]["Genre"];
          getGenre(Posturl, url, genre);

        }
      });
  }

function createGenrePageMovie () {

  //loop through all the genres

  for (var i = 0; i < 6; i++) {

    //add a div, with title of each genre

    var x = document.getElementById('addNew');
    var d = document.createElement('div');

    switch (i) {
      case 0:
        var currentClass = "Documentary";
        break;
      case 1:
        var currentClass = "Action";
        break;
      case 2:
        var currentClass = "Drama";
        break;
      case 3:
        var currentClass = "Comedy";
        break;
      case 4:
        var currentClass = "Animation";
        break;
      case 5:
        var currentClass = "Fantasy";
      }

      d.setAttribute("class", currentClass + " for-you");
      d.setAttribute("id", currentClass);
      var title = document.createElement('h3');
      title.appendChild(document.createTextNode(currentClass));
      x.appendChild(d);
      d.appendChild(title);

    }

      //get tv shows from json (add them to html page)

      $.getJSON("/js/movies.json", function (json) {

        for (var prop in json) {

          if (!json.hasOwnProperty(prop)) {
            //The current property is not a direct property of p
            continue;
          }

          var Posturl = json[prop][0]["PosterURL"];
          var url = json[prop][0]["ID"];
          var genre = json[prop][0]["Genre"];
          getMovieGenre(Posturl, url, genre);

        }
      });
}

function createTVElement(link, code, genre) {

  //create a poster that links to the code from the json

  var a = document.createElement("A");
  a.href = "/episode-list.html?=" + code;
  var x = document.createElement("IMG");
  x.setAttribute("class", "spaced");
  x.src = link;
  x.height = 536;
  x.width = 364;
  var box = document.getElementById(genre);
  box.appendChild(a);
  a.appendChild(x);

}

function createMovieElement(link, code, genre) {

  //create a poster that links to the code from the json

  var a = document.createElement("A");
  a.href = "/details.html?=" + code;
  var x = document.createElement("IMG");
  x.setAttribute("class", "spaced");
  x.src = link;
  x.height = 536;
  x.width = 364;
  var box = document.getElementById(genre);
  box.appendChild(a);
  a.appendChild(x);

}

function getGenre (poster, url, genreString) {

  //check for / in string and seperate them out into that many parts + 1
  //with each genre create a poster and put it in that class' div.

  if (genreString.includes("/")) {

    //split it into multiple genres
    //for however many genres there are:

    var numberOfGenres = genreString.split("/").length;
    var current = 0;

    for (var i = 0; i < numberOfGenres - 1; i++) {

      //split it and create element

      var position = genreString.indexOf("/", current);
      var genre = genreString.slice(current, position);
      createTVElement(poster, url, genre);
      current = position + 1;

    }

    var genre = genreString.slice(current);
    createTVElement(poster, url, genre);

  }

  else {

    createTVElement(poster,url,genreString);

  }
}

function getMovieGenre(poster, url, genreString) {

  //check for / in string and seperate them out into that many parts + 1
  //with each genre create a poster and put it in that class' div.

  if (genreString.includes("/")) {

    //split it into multiple genres
    //for however many genres there are:

    var numberOfGenres = genreString.split("/").length;
    var current = 0;

    for (var i = 0; i < numberOfGenres - 1; i++) {

      //split it and create element

      var position = genreString.indexOf("/", current);
      var genre = genreString.slice(current, position);
      createMovieElement(poster, url, genre);
      current = position + 1;

    }

    var genre = genreString.slice(current);
    createMovieElement(poster, url, genre);

  }

  else {

    createMovieElement(poster,url,genreString);

  }

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
