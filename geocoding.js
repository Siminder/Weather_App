import Keys from "./keys.js";


function grabCord(){
    const city = "windsor"
    const country = "CA"          
    let lat = 0
    let lon = 0
    
    fetch(`https://api.openweathermap.org/data/2.0/onecall/timeline/1min?lat=${lat}&lon=${lon}&appid=${Keys}`)
    .then(response => response.json())
    .then(function (data){
         lat = data[0].lat
         lon = data[0].lon

        console.log( lon,  lat)

        return lat, lon

      
    })
    .catch(function(error) {
        console.log(error)
    })
    
    return {lat, lon}
    
}



function getWeather(){
    const {lat, lon } = async() => await grabCord()

    console.log(lat, lon)
    fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Keys}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
}

getWeather()
