$(document).ready(function(){
  getType();
})

function getType() {

  var typeID = getParameterByName("?");
  if (typeID === "M") {
    $(".title").html("Movies");
  }
  else if (typeID === "T") {
    $(".title").html("TV Shows");
  }

  loadDataFromJSON(typeID);

};

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

function loadDataFromJSON(type) {
  if (type === "M") {

  }
  else if (type === "T") {

  }
};

function createElement(link) {

}
