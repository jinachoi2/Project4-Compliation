// side nav
function openNav() {
document.getElementById("mySidenav").style.width = "200px";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

//reading buttons
  $(document).ready(function() {
     $("#read1Title").click(function(){
        $("#read1").toggle('slow', function(){
        });
     });
    });
  $(document).ready(function() {
     $("#read2Title").click(function(){
        $("#read2").toggle('slow', function(){
        });
     });
    });
  $(document).ready(function() {
     $("#read3Title").click(function(){
        $("#read3").toggle('slow', function(){
        });
     });
    });
  $(document).ready(function() {
     $("#read4Title").click(function(){
        $("#read4").toggle('slow', function(){
        });
     });
    });
