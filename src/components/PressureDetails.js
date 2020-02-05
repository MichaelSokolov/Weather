import React from 'react'

const PressureDetails = ({lang, pressure}) => {
    const pressureUnits = lang === 'ru' && 'ua' ? 'гПа' : 'hPa'
    return (
        <div className = 'pressureDetails'>
            <i className='pressureIcon wi wi-barometer'></i>
            <div className ='pressure'>{pressure} {pressureUnits}</div>
        </div>
    )
}

export default PressureDetails
