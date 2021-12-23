const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5oY2Fvb28iLCJhIjoiY2t4YnRic2RpMGJoYjJubW13anFyenl2byJ9.KQ4GC3sD62JK5Z14m7v1NQ';
    
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to the network. Please check your network again.', undefined)
        } else if (response.body.features.length === 0){
            callback('Unable to find the location. Try another one.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1], 
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}
module.exports = geocode;