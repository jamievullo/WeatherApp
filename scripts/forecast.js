
class Forecast{
    //no params needed in constructor because of having no unique properties
    constructor(){
        this.key = 'IkP5AC5lXU4F6DGegNG73FTk9GMzT7R5'
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }
    async updateCity(city){   
        const cityDetails = await this.getCity(city)
        const weather = await this.getWeather(cityDetails.Key)    
        return { cityDetails, weather }
    }
    async getCity(city){
        const query = `?apikey=${ this.key }&q=${ city }`
        const response = await fetch(this.cityURI + query)
        const data = await response.json()
        return data[0]
    }
    async getWeather(id){
        const query = `${ id }?apikey=${ this.key }`
        const response = await fetch(this.weatherURI + query)
        const data = await response.json()
        return data[0]
    }
}


// //const key = "IkP5AC5lXU4F6DGegNG73FTk9GMzT7R5"

// // get weather info
// const getWeather = async (id) => {

//     //const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
//     const query = `${id}?apikey=${key}`
//     const response = await fetch(base + query)
//     const data = await response.json()

//     return data[0]    
// }

// // get city info
// const getCity = async (city) => {
    
//     //const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
//     const query = `?apikey=${key}&q=${city}`
//     const response = await fetch(base + query)
//     const data = await response.json()

//     return data[0]
// }

// getCity('Scranton').then(data => {
//         return getWeather(data.Key)
//     }).then(data => {
//         console.log(data)
//     }).catch(err => console.log(err))

// getWeather("330292")


