function getweather() {
    var city = document.getElementById("city").value;
    var country = document.getElementById("Country").value;
    var weatherTable = document.getElementById("weatherTable");

    var weathersettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://weather338.p.rapidapi.com/" + city,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b727dfdc2bmsh2a0c1bd8a388a4bp108461jsn6d791ba02122",
            "x-rapidapi-host": "weather338.p.rapidapi.com"
        }
    };

    $.ajax(weathersettings).done(function (response) {
        var weatherData = response.response[0].periods;
        var tableHTML = '<tr><th>Valid Time</th><th>Min Temperture(C)</th><th>Max Temperture(C)</th></tr>';

        for (var i = 0, len = weatherData.length; i < len; i++) {
            var row = '<tr>';
            row += '<td>' + weatherData[i].validTime + '</td>';
            row += '<td>' + weatherData[i].minTempC + '</td>';
            row += '<td>' + weatherData[i].maxTempC + '</td>';
            row += '</tr>';
            tableHTML += row;
        }

        weatherTable.innerHTML = tableHTML;
    });
}
