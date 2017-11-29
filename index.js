/*global $
*/
$(document).ready(function(){
    $.ajax({
  method: "GET",
  url: "https://newsapi.org/v2/sources",
  data: { category:"business", country:"us", language:"en", apikey: APIKEY},
  success: function(data) {
      if (data.status === "ok") {
          for (var i = 0; i < data.sources.length; i++){
             var source = document.createElement("OPTION");
             source.innerHTML = data.sources[i].name;
             document.getElementById('selection').appendChild(source);
          }
      
      }
  }
        
    })
//   .done(function( msg ) {
//     console.log( "Data Saved: " + msg );
//   });
}) 


