//Imports
let express = require("express");
let weather = require("./routes/weatherInfo");

//Router 
exports.router = (function() {
    let apiRouter = express.Router();

    //   routes
    apiRouter.route("/weather/get")
        .post(weather.getWeather);

    return apiRouter;
})();