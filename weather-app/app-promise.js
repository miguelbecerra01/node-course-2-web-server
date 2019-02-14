const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: false,
            alias: 'address',
            describe: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodedAddress = argv.address ?  encodeURIComponent(argv.address) :  encodeURIComponent('Chimbarongo');

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAK93ioH2IsEAsoyAsSgTcjYD_RAScW8Tk&address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that adress');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weather = `https://api.darksky.net/forecast/9d28913424ce4878b5a62a1a195f45ea/${lat},${lng}?units=si&lang=es`;
    console.log(response.data.results[0].formatted_address);

    return axios.get(weather);

}).then((response) => {

    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    var summary = response.data.currently.summary;

    console.log(`El clima es "${summary}", ` +
        `la temperatura es ${temperature} grados, ` +
        `se siente como ${apparentTemperature} grados`);

}).catch((e) => {
    console.log(e);
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers')
    } else {
        console.log(e.message);
    }
});

