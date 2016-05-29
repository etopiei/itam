$(document).ready(function () {
    
    'use strict';
    
    fillDetails();
    
});

function fillDetails() {
    
    var query = getParameterByName("?");
    getDetailsFromQuery(query);
    
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

function getDetailsFromQuery(queryString) {
    
    $.getJSON("js/tv.json", function (json) {
        
        for (var prop in json) {
            
            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of prop
                console.log("prop fail");
                continue;
            }
            
            var position = queryString.indexOf(".");
            var showID = queryString.slice(0,position);
            
            if (json[prop][0]["ID"] === showID) {
                
                var Genre = json[prop][0]["Genre"];
                var Creator = json[prop][0]["Creator"];
                var Runtime = json[prop][0]["Time"];
                var PostURL = json[prop][0]["PosterURL"];
                
                var episodeIndex = queryString.slice(position + 1);
                
                var episodeTitle = json[prop][episodeIndex]["ShortName"];
                var epsiodeID = json[prop][episodeIndex]["EpisodeID"];
                var Synopsis = json[prop][episodeIndex]["Plot"];
                
                $(".epTitle").html(episodeTitle);
                $(".Synopsis").html(Synopsis);
                $(".Genre").html(Genre);
                $(".Creator").html(Creator);
                $(".Time").html(Runtime + "mins");
                $(".poster").attr('src',PostURL);
                document.getElementById("play").href = "play.html?=" + queryString;
                    
                    
                }
                
            }            
            
        });
    
}