// side nav
function openNav() {
document.getElementById("mySidenav").style.width = "200px";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

//tags
$(document).ready(function() {
   $("#exTitle").click(function(){
      $("#exTxt").toggle('slow', function(){
      });
   });
  });
$(document).ready(function() {
   $("#pro1Title").click(function(){
      $("#pro1Txt").toggle('slow', function(){
      });
   });
  });
$(document).ready(function() {
   $("#pro2Title").click(function(){
      $("#pro2Txt").toggle('slow', function(){
      });
   });
  });
$(document).ready(function() {
   $("#pro3Title").click(function(){
      $("#pro3Txt").toggle('slow', function(){
      });
   });
  });
