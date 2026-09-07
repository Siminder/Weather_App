import { Keys }  from "./keys.js";


async function grabCord(){
    const city = "windsor"
    const country = "CA"          
  

    try{
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}, ${country}&limit=5&appid=${Keys}`)
        const data =  await response.json()
        const lat = data[0].lat
        const lon = data[0].lon
        
        console.log(lat, lon)

          
        return { lat, lon, city };
    } catch (error){
        console.log(error)
    }
   
}



async function getWeather(){
    const { lat, lon, city } = await grabCord();

    


    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Keys}&units=metric`
    );

    const data = await response.json();
    const cityName = city
    
    return {
        cityName,
        data
    }
    
}

export default getWeather 



