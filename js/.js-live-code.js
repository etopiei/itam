$(document).ready(function(){
console.log(document)
   
   getRecommendedData();
    
});

function getRecommendedData () {
    
    var counter = 0;
    
    $.getJSON("js/tv.json", function(json) {
        for (var prop in json) {
            
            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of prop

                continue;
            }
            
            var Posturl = json[prop][0]["PosterURL"];
            var url = json[prop][0]["ID"]; 
            var currentPoster = ".posterR";
            var currentLinkPoster = ".linkR"
            currentPoster += counter+1;
            currentLinkPoster += counter+1;
            
            if (url !== "") {
                $(currentPoster).attr('src',Posturl);
                $(currentLinkPoster).attr('href', "/episode-list.html?=" + url);
            }
            counter += 1;
        }
        
         getTVData(json);
        
    });
}

function getTVData (json) {
    
     var counter = 0;
     
        for (var prop in json) {
            
            if (!json.hasOwnProperty(prop)) {
                //The current property is not a direct property of p
                continue;
            }
            
            var Posturl = json[prop][0]["PosterURL"];
            var url = json[prop][0]["ID"]; 
            var currentPoster = ".posterT";
            var currentLinkPoster = ".linkT"
            currentPoster += counter+1;
            currentLinkPoster += counter+1;
            
            if (url !== "") {
                $(currentPoster).attr('src',Posturl);
                $(currentLinkPoster).attr('href', "/episode-list.html?=" + url);
            }
            else {
                continue;
            }
            
            counter += 1;
        } 
}

function getMovieData () { 
}