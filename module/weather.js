import {default as getWeather} from "./geocoding.js"




async function displayWeather () {

    const WeatherData =  await getWeather()
    

    console.log(WeatherData.data)
}

displayWeather()