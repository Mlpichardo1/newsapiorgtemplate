
/*global $
ftoi
*/
$(document).ready(function(){
    var feet = ftoi * 24;
}) 


$.ajax({
  method: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });