//Main Javascript code for handling the weather info.
var proxy = window.parent.location.origin + "/proxy.php?url=";
//var jsonobject = '{ "latitude": 51.51121, "longitude": -0.11982, "timezone": "Europe/London", "offset": 1, "currently": { "time": 1381233672, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 19.35, "apparentTemperature": 19.35, "dewPoint": 12.95, "windSpeed": 5.31, "windBearing": 248, "cloudCover": 0.39, "humidity": 0.67, "pressure": 1023.77, "visibility": 9.61, "ozone": 250.61 }, "minutely": { "data": [{ "time": 1381233660, "precipIntensity": 0, "precipProbability": 0 }, { "time": 1381233720, "precipIntensity": 0, "precipProbability": 0 }] }, "hourly": { "summary": "Partly cloudy overnight.", "icon": "partly-cloudy-day", "data": [{ "time": 1381186800, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 15.47, "apparentTemperature": 15.47, "dewPoint": 13.29, "windSpeed": 3.06, "windBearing": 230, "cloudCover": 0.68, "humidity": 0.87, "pressure": 1024.37, "visibility": 10.87, "ozone": 249.5 }, { "time": 1381190400, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 15.46, "apparentTemperature": 15.46, "dewPoint": 13.05, "windSpeed": 2.64, "windBearing": 228, "cloudCover": 0.67, "humidity": 0.86, "pressure": 1024.34, "visibility": 10.75, "ozone": 249.59 }, { "time": 1381194000, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 14.91, "apparentTemperature": 14.91, "dewPoint": 13.27, "windSpeed": 2.5, "windBearing": 237, "cloudCover": 0.75, "humidity": 0.9, "pressure": 1024.29, "visibility": 9.78, "ozone": 251.52 }, { "time": 1381197600, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 14.85, "apparentTemperature": 14.85, "dewPoint": 13.52, "windSpeed": 3.46, "windBearing": 253, "cloudCover": 0.85, "humidity": 0.92, "pressure": 1024.05, "visibility": 9.62, "ozone": 254.22 }, { "time": 1381201200, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 14.56, "apparentTemperature": 14.56, "dewPoint": 13.27, "windSpeed": 3.66, "windBearing": 262, "cloudCover": 0.87, "humidity": 0.92, "pressure": 1023.87, "visibility": 8.34, "ozone": 255.41 }, { "time": 1381204800, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 14.82, "apparentTemperature": 14.82, "dewPoint": 13.01, "windSpeed": 3.41, "windBearing": 258, "cloudCover": 0.73, "humidity": 0.89, "pressure": 1023.89, "visibility": 7.77, "ozone": 253.45 }, { "time": 1381208400, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 14.54, "apparentTemperature": 14.54, "dewPoint": 12.99, "windSpeed": 2.75, "windBearing": 249, "cloudCover": 0.69, "humidity": 0.9, "pressure": 1024.03, "visibility": 8.08, "ozone": 249.97 }, { "time": 1381212000, "summary": "Partly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 14.49, "apparentTemperature": 14.49, "dewPoint": 12.92, "windSpeed": 2.64, "windBearing": 242, "cloudCover": 0.31, "humidity": 0.9, "pressure": 1024.16, "visibility": 9.22, "ozone": 247.63 }, { "time": 1381215600, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 14.61, "apparentTemperature": 14.61, "dewPoint": 12.97, "windSpeed": 2.76, "windBearing": 242, "cloudCover": 0.22, "humidity": 0.9, "pressure": 1024.15, "visibility": 9.24, "ozone": 247.78 }, { "time": 1381219200, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 15.54, "apparentTemperature": 15.54, "dewPoint": 13.32, "windSpeed": 3.58, "windBearing": 245, "cloudCover": 0.38, "humidity": 0.87, "pressure": 1024.16, "visibility": 9.32, "ozone": 249.07 }, { "time": 1381222800, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 16.4, "apparentTemperature": 16.4, "dewPoint": 13.06, "windSpeed": 4.06, "windBearing": 247, "cloudCover": 0.3, "humidity": 0.81, "pressure": 1024.13, "visibility": 9.39, "ozone": 250.13 }, { "time": 1381226400, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 17.37, "apparentTemperature": 17.37, "dewPoint": 12.85, "windSpeed": 4.25, "windBearing": 247, "cloudCover": 0.29, "humidity": 0.75, "pressure": 1024.03, "visibility": 9.36, "ozone": 250.35 }, { "time": 1381230000, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 18.69, "apparentTemperature": 18.69, "dewPoint": 12.83, "windSpeed": 5.15, "windBearing": 246, "cloudCover": 0.38, "humidity": 0.69, "pressure": 1023.91, "visibility": 9.33, "ozone": 250.33 }, { "time": 1381233600, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 19.35, "apparentTemperature": 19.35, "dewPoint": 12.95, "windSpeed": 5.31, "windBearing": 248, "cloudCover": 0.39, "humidity": 0.67, "pressure": 1023.77, "visibility": 9.61, "ozone": 250.6 }, { "time": 1381237200, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 19.33, "apparentTemperature": 19.33, "dewPoint": 13.01, "windSpeed": 5.08, "windBearing": 255, "cloudCover": 0.41, "humidity": 0.67, "pressure": 1023.61, "visibility": 9.48, "ozone": 251.44 }, { "time": 1381240800, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 19.34, "apparentTemperature": 19.34, "dewPoint": 13.15, "windSpeed": 4.8, "windBearing": 264, "cloudCover": 0.46, "humidity": 0.67, "pressure": 1023.44, "visibility": 9.75, "ozone": 252.55 }, { "time": 1381244400, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 19.27, "apparentTemperature": 19.27, "dewPoint": 13.34, "windSpeed": 4.46, "windBearing": 269, "cloudCover": 0.52, "humidity": 0.69, "pressure": 1023.35, "visibility": 10.55, "ozone": 253.54 }, { "time": 1381248000, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 18.94, "apparentTemperature": 18.94, "dewPoint": 13.51, "windSpeed": 4.21, "windBearing": 265, "cloudCover": 0.49, "humidity": 0.71, "pressure": 1023.37, "visibility": 11.84, "ozone": 254.29 }, { "time": 1381251600, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0.01371, "precipProbability": 0.03, "precipType": "rain", "temperature": 18.25, "apparentTemperature": 18.25, "dewPoint": 13.76, "windSpeed": 4.02, "windBearing": 256, "cloudCover": 0.37, "humidity": 0.75, "pressure": 1023.45, "visibility": 13.93, "ozone": 254.91 }, { "time": 1381255200, "summary": "Partly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0.01527, "precipProbability": 0.02, "precipType": "rain", "temperature": 17.71, "apparentTemperature": 17.71, "dewPoint": 13.84, "windSpeed": 3.95, "windBearing": 252, "cloudCover": 0.3, "humidity": 0.78, "pressure": 1023.53, "visibility": 15, "ozone": 255.34 }, { "time": 1381258800, "summary": "Partly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0.0145, "precipProbability": 0.02, "precipType": "rain", "temperature": 17.33, "apparentTemperature": 17.33, "dewPoint": 13.99, "windSpeed": 3.7, "windBearing": 255, "cloudCover": 0.37, "humidity": 0.81, "pressure": 1023.61, "visibility": 15.31, "ozone": 255.38 }, { "time": 1381262400, "summary": "Partly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 16.98, "apparentTemperature": 16.98, "dewPoint": 14.13, "windSpeed": 3.37, "windBearing": 262, "cloudCover": 0.5, "humidity": 0.83, "pressure": 1023.71, "visibility": 15.15, "ozone": 255.24 }, { "time": 1381266000, "summary": "Partly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 16.52, "apparentTemperature": 16.52, "dewPoint": 14.04, "windSpeed": 3.12, "windBearing": 270, "cloudCover": 0.58, "humidity": 0.85, "pressure": 1023.74, "visibility": 15, "ozone": 255.38 }, { "time": 1381269600, "summary": "Partly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 15.95, "apparentTemperature": 15.95, "dewPoint": 13.67, "windSpeed": 3.09, "windBearing": 278, "cloudCover": 0.53, "humidity": 0.86, "pressure": 1023.68, "visibility": 15.3, "ozone": 256.2 }] }, "daily": { "data": [{ "time": 1381186800, "summary": "Partly cloudy throughout the day.", "icon": "partly-cloudy-day", "sunriseTime": 1381212837, "sunsetTime": 1381253060, "precipIntensity": 0.00759, "precipIntensityMax": 0, "precipProbability": 0.19, "precipType": "rain", "temperatureMin": 14.49, "temperatureMinTime": 1381212000, "temperatureMax": 19.35, "temperatureMaxTime": 1381233600, "apparentTemperatureMin": 14.49, "apparentTemperatureMinTime": 1381212000, "apparentTemperatureMax": 19.35, "apparentTemperatureMaxTime": 1381233600, "dewPoint": 13.32, "windSpeed": 3.71, "windBearing": 252, "cloudCover": 0.5, "humidity": 0.81, "pressure": 1023.86, "visibility": 10.92, "ozone": 252.24 }] }, "flags": { "sources": ["isd", "fnmoc", "cmc", "gfs", "metar", "datapoint", "darksky"], "isd-stations": ["037683-99999", "037780-99999", "037790-99999", "037820-99999", "037830-99999"], "metar-stations": ["EGKB", "EGLC", "EGWU"], "datapoint-stations": ["uk-352409", "uk-353331", "uk-353605"], "darksky-stations": ["uk_london"], "units": "si" } }';
//var result = jQuery.parseJSON(jsonobject);
function getData(lat,long,time) {
    //use current time stamp and also get data for 24 hours before that one (so -24 to -48)
    //but taking current time stamp - 86400 (seconds in 24 hours).
    var historicTime = time - 86400;
    lat = 51.51121;
    long = -0.11982;
    time = 1381233672;

    var currentTimeStampURL = "https://api.forecast.io/forecast/e2dddd80bae83bb53ae1ebf9ce536678/" + lat + "," + long + "," + time + "?units=si";
    var historicTimeStampURL = "https://api.forecast.io/forecast/e2dddd80bae83bb53ae1ebf9ce536678/" + lat + "," + long + "," + historicTime + "?units=si";
    var currentTimeStampURL = "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/310069?res=3hourly&key=365d7193-6f42-4eb6-8e38-0f144163c204";

    var minTemp = 99;
    var humidHours = 0;
    var newOne = encodeURIComponent(currentTimeStampURL);
     var encodedImageURL = proxy + newOne;
     var resultsArray = [];
    
    var newReq = new XMLHttpRequest();
    newReq.open("GET", encodedImageURL, false);
  

    newReq.onreadystatechange = function () {
        if (newReq.readyState == 4 && newReq.status == 200) {
            var result = newReq.responseText;
            var jsonResult = jQuery.parseJSON(result);
            var arrayOfDays = jsonResult.SiteRep.DV.Location.Period;
            var resultDate = jsonResult.SiteRep.DV.dataDate;
            var resultLocationLat = jsonResult.SiteRep.DV.Location.lat;
            var resultLocationLon = jsonResult.SiteRep.DV.Location.lon;

            for (var i = 0; i < arrayOfDays.length; i++) {
                for (var j = 0; j < arrayOfDays[i].Rep.length; j++) {
                    
                    if (parseInt(arrayOfDays[i].Rep[j].T) < minTemp ) {
                        minTemp = parseInt(arrayOfDays[i].Rep[j].T);
                    } 
                    if (parseInt(arrayOfDays[i].Rep[j].H) > 90) {
                        humidHours = humidHours + 3;
                    }
                }
                
                var smithDay = false;
                var smithEvent = null;
                if ((minTemp > 10)&&(humidHours >11)) {
                    smithDay = true;
                }
                resultsArray.push([arrayOfDays[i].value, minTemp, humidHours, smithDay, smithEvent]);
                minTemp = 99;
                humidHours = 0;
            }

        }


    }

    newReq.send();

    doStuffMO(resultsArray);

}
var chart;
var series;


function doStuffMO(result) {
    //var test = result.hourly.data;
    //for (i = 0; i < test.length; i++) {
    //    if (test[i].temperature > 10) {
    //        tempHours++;
    //    }
    //    if (test[i].humidity > 0.9) {
    //        humidHours++;
    //    }
    //}

    for (var i = 0; i < result.length; i++) {
        var theDate = new Date(result[i][0]);
        var unixDate = theDate.getTime() / 1000;
        chart.series[0].addPoint([theDate, result[i][1], true, false]); //false = don't refresh on this one - only on the next one. 
        chart.series[1].addPoint([theDate, result[i][2], true, true]);

        if (result[i - 1] != undefined) {
            if ((result[i][3] == true) && (result[i - 1][3] == true)) {
                result[i][4] = true;
            } else {
                result[i][4] = false;
            }
        }

        document.getElementById('results').innerHTML += theDate + "    Smith Day: " + result[i][3] + "   Smith Period: " + result[i][4] + "</br>";
    }
   


}



function doStuff(result) {
    var test = result.hourly.data;
    for (i = 0; i < test.length; i++) {
        if (test[i].temperature > 10) {
            tempHours++;
        }
        if (test[i].humidity > 0.9) {
            humidHours++;
        }
    }

    chart.series[0].addPoint([result.currently.time, humidHours, true, true]);
    chart.series[1].addPoint([result.currently.time, tempHours, true, true]);


 //   var humidThreshold = 0.9;
 //   var tempThreshold = 10;
    
 //   colorAbove = '#4572EE',
 //colorBelow = '#EE4643';

 //    internal
 //   var humidity = this.chart.series[0].points;
 //   var temp = this.chart.series[1].points;

 //   for (var i = 0; i < humidity.length; i++) {
 //       if ((humidity[i].y >= humidThreshold)&&(temp[i].y >= tempThreshold)) {
 //           humidity[i].graphic.attr('fill', colorBelow);
 //           temp[i].graphic.attr('fill', colorBelow);
 //       } else {
 //           humidity[i].graphic.attr('fill', colorAbove);
 //           temp[i].graphic.attr('fill', colorAbove);
 //       }
 //   }

 //   delete this.chart.series[0].pointAttr.hover.fill;
 //   delete this.chart.series[0].pointAttr[''].fill;
 //   delete this.chart.series[1].pointAttr.hover.fill;
 //   delete this.chart.series[1].pointAttr[''].fill;
}


function init() {

    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

   
chart = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: 'container', 
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {
                    series = this.series[0];
                }
            }
        },
        title: {
            text: 'Hours of Humidity and Temperature at Smith Period Levels'
        },
        xAxis: {
            type: 'datetime',
         //  pointInterval: 24 * 3600 * 1000 // one day
            tickPixelInterval: 24 * 3600 * 1000
        },
        yAxis: {
            title: {
                text: 'Count'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Minimum Temperature',
            data: [],
            pointInterval: 24 * 3600 * 1000 // one day
        },{
            name: 'Hours of qualifying Humidity',
            data: [],
            pointInterval: 24 * 3600 * 1000 // one day
        }]
});



}
