//Import 
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

//Routes
module.exports = {
    getWeather : async function(req, res) {
        //Params
        let city = req.body.city;
        console.log(city);
        if (city === undefined || city === "") {
            return res.status(400).json({ 'error': 'missing parameters' });
        }

        //Call API
        let api_url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&lang=fr&appid=13a6b0a5726c35c06b87cc719ded487e";
        const response = await fetch(api_url);
        const data = await response.json();

        //Return data
        res.setHeader("Content-Type", "application/json");
        return res.status(200).json(data);
        
    }
}