$(document).ready(function(){
    
   loadEpsFromId(); 
    
});

function loadEpsFromId () {
    
    var showID = getParameterByName("?");
    loadEpisodeTitles(showID);
    
}

function loadEpisodeTitles(ID) {
    
        $.getJSON("js/tv.json", function(json) {
        for (var prop in json) {
            
            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of prop
                console.log("prop fail");
                continue;
            }
            
            if (json[prop][0]["ID"] === ID) {
                
                for (var i = 1; i < json[prop].length; i++) {
                    
                    var episodeTitle = json[prop][i]["Name"];
                    var epsiodeID = json[prop][i]["EpisodeID"];
                    createElement(episodeTitle, epsiodeID);
                    
                }
                
            }            
            
        }
        
    });
    
}

function createElement (title, epID){
    
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