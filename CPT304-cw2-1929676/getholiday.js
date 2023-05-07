function getholiday() {
    var year = document.getElementById("year").value;
    var country = document.getElementById("Countrycode").value;
    var holidaySettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://public-holiday.p.rapidapi.com/" + year + "/" + country,
        "dataType": "json",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "b727dfdc2bmsh2a0c1bd8a388a4bp108461jsn6d791ba02122",
            "X-RapidAPI-Host": "public-holiday.p.rapidapi.com"
        }
    };

    $.ajax(holidaySettings).done(function (response) {
        console.log(response);
        var holidays = response;
        var table = "<tr><th>Name</th><th>Local Name</th><th>Date</th></tr>";
        for (var i = 0; i < holidays.length; i++) {
            table += "<tr><td>" + holidays[i].name + "</td><td>" + holidays[i].localName + "</td><td>" + holidays[i].date + "</td></tr>";
        }
        document.getElementById("holidayTable").innerHTML = table;
    });
}
