//side nav
  function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  }
  function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  }


//project buttons
  $(document).ready(function() {
     $("#titleProject1").click(function(){
        $(".project1").toggle('slow', function(){
        });
     });
    });
  $(document).ready(function() {
     $("#titleProject2").click(function(){
        $(".project2").toggle('slow', function(){
        });
     });
    });
  $(document).ready(function() {
     $("#titleProject3").click(function(){
        $(".project3").toggle('slow', function(){
        });
     });
    });
  $(document).ready(function() {
     $("#titleProject4").click(function(){
        $(".project4").toggle('slow', function(){
        });
     });
    });
