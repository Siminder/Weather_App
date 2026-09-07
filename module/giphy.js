import { giphyKey } from "./keys.js"
import {default as getWeather} from "./geocoding.js"
 


async function getImg(weatherType) {
    const img = document.querySelector("#weatherImg")
    const key = giphyKey

    try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${weatherType}`)
        const ImgData = await response.json();
        img.src = ImgData.data.images.original.url;


        
    } catch (e) {
        console.log(e) 
    }


}



async function WeatherType() {

    const weatherData = await getWeather()

    console.log(weatherData.data.weather[0].main)
    let search;

    switch (weatherData.data.weather[0].main) {
        case "Clear": 
            search = "anime sky clouds beautiful sky"
            break;
        
        case "Clouds":
            search = " anime cloudy sky"
            break;
        
        default: console.log("no opttion exist")
            break;
    }
    getImg(search);
}

WeatherType()







