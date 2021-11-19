const { default: axios } = require('axios')
class Searches {
    historial = []
    constructor() {

    }
    async city(place = '') {
        try {
            const { data } = await axios.get('https://reqres.in/api/users?page=2')
            console.log(data)
            return []   
        } catch (error) {            
            return []
        }
        
    }
}
module.exports = Searches