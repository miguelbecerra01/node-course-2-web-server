const request = require('request');

var getWeather = (lat, lng, callback) => {
    const url = `https://api.darksky.net/forecast/9d28913424ce4878b5a62a1a195f45ea/${lat},${lng}?units=si&lang=es`;

    request({
        url: url,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                summary: body.currently.summary
            });
        } else {
            callback('Unable to fetch Weather');
        }
    });
};


module.exports.getWeather = getWeather;

