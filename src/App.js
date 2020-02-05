import React, { Component } from 'react'
import './App.css'
import Widget from './components/Widget'

export class App extends Component {
  constructor(){
    super()
    this.state = {
      lang: '',
      city: '',
      temp: null,
      humidity: null,
      pressure: null,
      weatherID: null,
      weatherDesc: '',
      isFetching: true,
      time: null
    }
    this.getWeather=this.getWeather.bind(this)
  }
  
  async getWeather(city) {
    const keyOpenWeather = '70a85a758535f39ea23b6ff071db1d7e';
    const lang = this.state.lang;
    const units = 'metric';
    const time = new Date().getHours();
    const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${keyOpenWeather}&units=${units}&lang=${lang}`)
    const data = await responce.json()
    this.setState({
      city: data.name,
      temp: data.main.temp,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      weatherID: data.weather[0].id,
      weatherDesc: data.weather[0].description,
      isFetching: false,
      time
    })
  }
  
  async getLocation(){
    let language;
    window.navigator.languages ? language = window.navigator.languages[0] : language = window.navigator.userLanguage || window.navigator.language;
    this.setState({lang: language.slice(0, 2)})
    const keyIpStack = 'a3dbd17db9ce65aa30419907fa629a23';
    const responce = await fetch(`http://api.ipstack.com/check?access_key=${keyIpStack}`)
    const data = await responce.json()
    this.getWeather(data.city)
  }

  componentDidMount(){
    this.getLocation();
  }

  render() {
    const {isFetching, city, temp, humidity, pressure, weatherID, weatherDesc, lang, time} = this.state;
    return (
      isFetching ?
      <div className = 'app'> Loading...</div>
      :
      <div className = 'app' time={time}>
        <Widget city = {city}
                temp = {temp}
                weatherID = {weatherID}
                weatherDesc = {weatherDesc}
                humidity = {humidity}
                lang = {lang}
                pressure = {pressure}
                time = {time} />
      </div>
    
    )
  }
}

export default App

