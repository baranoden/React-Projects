import { createContext, useEffect, useState } from "react";
import cities from "./cityList";
const weatherContext = createContext()


export const WeatherProvider = ({children}) => {
    const apiKey = process.env.REACT_APP_API_KEY
   const [selectedCity, setSelectedCity] = useState(cities[33])
   const [weatherData, setWeatherData] = useState([])

    useEffect(() =>{
             async function getWeather(){
                 const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${selectedCity.lat}&lon=${selectedCity.long}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`)
                 const res = await apiCall.json()
                 console.log(`gelen veri`, res.daily);
                 setWeatherData(res.daily)

          }
      getWeather()
    }, [selectedCity, apiKey])


    const values ={
        cities,
        selectedCity,
        setSelectedCity,
        weatherData,
        setWeatherData,
    }

    return(
        <weatherContext.Provider value={values}>{children}</weatherContext.Provider>
    )
}




export default weatherContext