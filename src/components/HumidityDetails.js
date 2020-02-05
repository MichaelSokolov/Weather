import React from 'react'

const HumidityDetails = ({humidity}) => {
    return (
        <div className = 'humidityDetails'>
            <i className='humudityIcon wi wi-humidity'></i>
            <div className = 'humidity'>{humidity} %</div>
        </div>
    )
}

export default HumidityDetails
