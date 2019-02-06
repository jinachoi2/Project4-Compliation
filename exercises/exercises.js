// Testing grid side bar
// $(document).ready(function(){
//   $(".titleBtn").click(function(){
//     $(".btnMenu").toggle();
//   });
// });

// side nav
function openNav() {
document.getElementById("mySidenav").style.width = "200px";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

//exercise buttons
  $(document).ready(function() {
     $("#ex1Title").click(function(){
        $("#ex1").toggle('slow', function(){
        });
     });
    });
  $(document).ready(function() {
     $("#ex2Title").click(function(){
        $("#ex2").toggle('slow', function(){
        });
     });
    });
