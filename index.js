/*global $ APIKEY
 */
$(document).ready(function() {
	$.ajax({
		method: "GET",
		url: "https://newsapi.org/v2/sources",
		data: {
			category: "business",
			country: "us",
			language: "en",
			apikey: APIKEY
		},
		success: function(data) {
			if (data.status === "ok") {
				for (var i = 0; i < data.sources.length; i++) {
					var source = document.createElement("OPTION");
					source.setAttribute("value", data.sources[i].id);
					source.innerHTML = data.sources[i].name;
					document.getElementById('selection').appendChild(source);
				}
			}
		}
	})
});
$("#source").submit(function(event) {
	event.preventDefault();
	$.ajax({
		method: "GET",
		url: "https://newsapi.org/v2/top-headlines",
		data: {
			sources: document.getElementById('selection').value,
			country: "us",
			language: "en",
			category: "business",
			apikey: APIKEY
		},
		success: function(show) {
			if (show.status === "ok") {
				for (var i = 0; i < show.articles.length; i++) {
					var choice = document.createElement("LI");
					choice.innerHTML = "<img src=" + show.articles[i].urlToImage + " height= 100vh> <br> " + show.articles[i].title + " <br> " + show.articles[i].description + "";
					document.getElementById('newsart').appendChild(choice);
				}
			}
		}
	})
});