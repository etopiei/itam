$(document).ready(function () {

  var searchTerm = getParameterByName("?");

  if (searchTerm === "") {
    unFound();
  }

  var fixedInput = sanitiseInput(searchTerm);
  search(fixedInput);

});

function unFound() {
  document.location = "/unfound.html";
  location.replace("/unfound.html");
}

function search(text) {

  var found = false;

  $.getJSON("/js/tv-min.json", function (json) {
    for (var prop in json) {

      if (!json.hasOwnProperty(prop)) {
        //The current property is not a direct property of prop
        console.log("prop fail");
        continue;
      }

      var showTitle = json[prop][0]["Title"];
      var upperCaseTitle = showTitle.toUpperCase();
      var upperCaseSearchTerm = text.toUpperCase();

      if (upperCaseTitle.includes(upperCaseSearchTerm)) {

        var showPosterURL = json[prop][0]["PosterURL"];
        var url = json[prop][0]["ID"];
        createTVPoster(url, showPosterURL);
        found = true;

      }
    }

  });
  //search movie titles also.

  var counter = 0;

  $.getJSON("/js/movies.json", function (json) {
    for (var prop in json) {

      if (!json.hasOwnProperty(prop)) {
        //The current property is not a direct property of prop
        console.log("prop fail");
        continue;
      }

      var title = json[prop][0]["Title"];
      var titleUpperCase = title.toUpperCase();
      var upperCaseSearchTerm = text.toUpperCase();

      if (titleUpperCase.includes(upperCaseSearchTerm)) {

        var moviePosterURL = json[prop][0]["PosterURL"];
        var url = json[prop][0]["ID"]
        createMoviePoster(url, moviePosterURL); //make this function work
        found = true;


      }

      counter += 1;
    }


  });

  if (found === false) {
    $(".title").html("No Results Found!");
  }

}

function createTVPoster(link, poster) {

  var a = document.createElement("A");
  a.href = "/episode-list.html?=" + link;
  var x = document.createElement("IMG");
  x.setAttribute("class", "spaced hor-spaced");
  x.src = poster;
  if (screen.width <= 699 || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
    x.height = 536;
    x.width = 364;
  }
  else {
    x.height = 268;
    x.width = 182;
  }
  var box = document.getElementById("addNew");
  box.appendChild(a);
  a.appendChild(x);
  $(".title").html("Results");
}

function createMoviePoster(link, poster) {

  var a = document.createElement("A");
  a.href = "/details.html?=" + link;
  var x = document.createElement("IMG");
  x.setAttribute("class", "spaced hor-spaced");
  x.src = poster;
  if (screen.width <= 699 || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
    x.height = 536;
    x.width = 364;
  }
  else {
    x.height = 268;
    x.width = 182;
  }
  var box = document.getElementById("addNew");
  box.appendChild(a);
  a.appendChild(x);
  $(".title").html("Results");
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

function sanitiseInput(input) {

  var tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

  var tagOrComment = new RegExp(
      '<(?:'
      // Comment body.
      + '!--(?:(?:-*[^->])*--+|-?)'
      // Special "raw text" elements whose content should be elided.
      + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
      + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
      // Regular name
      + '|/?[a-z]'
      + tagBody
      + ')>',
      'gi');

var x = removeTags(input);

  function removeTags(html) {
    var oldHtml;
    do {
      oldHtml = html;
      html = html.replace(tagOrComment, '');
    } while (html !== oldHtml);
    return html.replace(/</g, '&lt;');
  }

  return x;

}
