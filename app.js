require('dotenv').config()
const { inquirerMenu,pause, readInput } = require('./helpers/inquirer');
const Searches = require('./models/searches');
const main = async () => {
    const searches = new Searches()
    let opt;
    do {
        opt = await inquirerMenu()
        switch (opt) {
            case 1:
                const place = await readInput('City: ')
                const places = await searches.city(place)
                console.log(places)
                console.log('Info city:',)
                console.log('City:',)
                console.log('Lat:',)
                console.log('Lng:',)
                console.log('Temperature:',)
                console.log('Min:',)
                console.log('Max:',)
                break;                
            case 2:
                console.log(opt)
                break;
            default:
                break;
        }
        await pause()
    } while (opt !== 0);
}
main()