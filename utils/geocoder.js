const NodeGeocoder = require('node-geocoder');
const config = require('config');

const options = {
  provider: config.get('GEOCODER_PROVIDER'),
  httpAdapter: 'https',
  apiKey: config.get('GEOCODER_API_KEY'), 
  formatter: null   
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;