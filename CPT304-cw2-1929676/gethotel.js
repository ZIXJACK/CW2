function gethotels() {
	var city = document.getElementById("city").value;
	var getHotelsettings = {
		"async": true,
		"crossDomain": true,
		"url": "https://travel-advisor.p.rapidapi.com/" + city,
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "b727dfdc2bmsh2a0c1bd8a388a4bp108461jsn6d791ba02122",
			"x-rapidapi-host": "travel-advisor.p.rapidapi.com"
		}
	};
	$.ajax(getHotelsettings).done(function (response) {
		var hotelList = response.suggestions[1].entities.filter(function (entity) {
			return entity.type === "HOTEL";
		});
		var table = "<tr><th>Latitude</th><th>Longitude</th><th>Caption</th><th>Name</th></tr>";
		for (var i = 0; i < hotelList.length; i++) {
			var latitude = hotelList[i].latitude;
			var longitude = hotelList[i].longitude;
			var caption = hotelList[i].caption;
			var name = hotelList[i].name;
			table += "<tr><td>" + latitude + "</td><td>" + longitude + "</td><td>" + caption + "</td><td>" + name + "</td></tr>";
		}
		document.getElementById("hotelTable").innerHTML = table;
	});
}
