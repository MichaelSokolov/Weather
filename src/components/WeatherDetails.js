import React from 'react'

const WeatherDetails = ({weatherID, temp, weatherDesc, time}) => {
    const icon = time >= 7 && time <= 19 ? 'day' :  'night'
    const className = `weather-icon wi wi-owm-${icon}-${weatherID}`;
    return (
        <div className = 'weatherDetails'>
                <i className={className}></i>
                <div className = 'temp'>{Math.round(temp)} &#8451;</div>
                <div className = 'weatherDesc'>{weatherDesc}</div>
        </div>
    )
}

export default WeatherDetails
