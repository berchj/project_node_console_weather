require('dotenv').config()
const { default: axios } = require('axios')
class Searches {
    historial = []
    constructor() {

    }
    get paramsMapbox(){
        return {
            'access_token': process.env.mapbox_key,
            'limit':'5',
            'language':'en'
        }
    }
    async city(place = '') {
        try {
            const instance = axios.create({
                baseURL:`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapbox
            })
            const response = await instance.get()
            return response.data.features.map( place => ({
                id: place.id,
                name: place.place_name,
                lat: place.center[1],
                lng: place.center[0]
            }))
        } catch (error) {  
            console.error(error.message)          
            return []
        }
        
    }
}
module.exports = Searches