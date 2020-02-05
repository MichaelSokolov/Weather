import React from 'react'
import City from './City'
import WeatherDetails from './WeatherDetails'
import HumidityDetails from './HumidityDetails'
import PressureDetails from './PressureDetails'

const Widget = ({city, temp, weatherID, weatherDesc, humidity, lang, pressure, time}) => {
    
    return (
        <div className = 'widget'>
        <City name = {city}/>
        <WeatherDetails temp = {temp}
                        weatherID = {weatherID}
                        weatherDesc = {weatherDesc}
                        time = {time} />
        <HumidityDetails humidity = {humidity} />
        <PressureDetails  lang = {lang}
                          pressure = {pressure} />
            
        </div>
    )
}

export default Widget
