const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=78d12a22689288aeb8ad5c7f3ec10739&query=' + latitude + ',' + longitude + 'f';

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to the weather server', undefined); 
        } else if (response.body.error){
            callback('Unable to find the location', undefined); 
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ': It is currently ' + response.body.current.temperature 
               + ' degrees out. It feels like ' + response.body.current.feelslike 
               + ' degrees out.')
        }
    })
}

module.exports = forecast; 