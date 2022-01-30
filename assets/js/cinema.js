document.getElementById("screen1").src = "assets/videos/movie 02.mp4";

var linkArray = ["assets/videos/movie 01.mp4", "assets/videos/movie 02.mp4"];

var time = 1;
var i = 0;

sasa();

function sasa(){
  var interval = setInterval(function() { 
      if (time <= linkArray.length) { 
          document.getElementById("screen1").src = linkArray[i];
          time++;
          i++
      }
      else { 
        clearInterval(interval);
        sasa();
      }
  }, 2000);
}