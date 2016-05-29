$(document).ready(function (){
   
   var query = getParameterByName("?");
   getURL(query);
    
});

function getURL (input) {
    
        $.getJSON("js/tv.json", function(json) {
        for (var prop in json) {
            
            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of prop
                console.log("prop fail");
                continue;
            }
            
            var position = input.indexOf(".")
            var showID = input.slice(0,position);
            
            if (json[prop][0]["ID"] === showID) {
                
                for (var j = 1; j < json[prop].length; j++) {
                    
                    if (json[prop][j]["EpisodeID"] === input) {
                        
                        var linkURL = json[prop][j]["URL"];
                        var title = json[prop][i]["Name"];
                        $(".video-title").html(title);
                        changePlayerURL(linkURL);
                        
                    }
                    
                }
                
            }            
            
        }
        
    }); 
    
}

function changePlayerURL (link) {
    
    var completeSrc = "https://www.youtube.com/embed/" + link + "?&version=3&autohide=1&autoplay=1&disablekb=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0";
    
    $(player).attr('src', completeSrc);
    
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