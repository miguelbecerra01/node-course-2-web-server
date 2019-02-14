const request = require('request');

var geocodeAddress = (address, callback) => {

    const encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAK93ioH2IsEAsoyAsSgTcjYD_RAScW8Tk&address=${encodedAddress}`,
        json: true //converts the output to json
    }, (error, response, body) => {

        if (error) {
            callback('Unable to connect to google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};
/*
module.exports = {
    geocodeAddress
};
*/
module.exports.geocodeAddress = geocodeAddress;