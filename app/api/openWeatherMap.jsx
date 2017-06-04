var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=1364daa19325b6a3073cf280c7c3b7c9&units=metric";

module.exports = {
    getTemp: function (location) {
        {/*Build string ES6 STYLE*/}
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl).then(function(res){
            // debugger; 
            // to pause the app and debug (to check problemes in the console)
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}