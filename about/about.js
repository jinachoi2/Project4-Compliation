function openNav() {
document.getElementById("mySidenav").style.width = "200px";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function() {
   $("#jinaTitle").click(function(){
      $("#jinaTxt").toggle('slow', function(){
      });
   });
  });


$(document).ready(function() {
   $("#ovan").click(function(){
      $("#song").toggle('slow', function(){
      });
   });
  });

// var audio = document.getElementById("MissFortune");
// function playAudio() {
//   audio.play();
// }
// function pauseAudio() {
//   audio.pause();
// }
