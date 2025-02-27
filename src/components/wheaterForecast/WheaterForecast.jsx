import temperature from '../../img/temperature.gif'
import wind from '../../img/wind.gif'
import partly_cloudy from '../../img/partly_cloudy.gif'
import rain from '../../img/rain.gif'
import snow from '../../img/snow.gif'

import GetWheater from "./GetWheater"
import ListWheater from "./ListWheater"

import {useState} from "react"


function WheaterForecast(props) {

  const [weatherData, setWeatherData] = useState()

  function handleWeatherSubmit(data) {
    setWeatherData(data)
  }

  return (
    <div className="kontajner" id="predpoved">
      <h2>{props.phrase["Weather forecast"]}</h2>
      
      <GetWheater phrase={props.phrase} onWeatherSubmit={handleWeatherSubmit}/>
      <ListWheater phrase={props.phrase} weatherData={weatherData}/>

      <p>{props.phrase["The data is obtained"]} <strong><a href="https://open-meteo.com/">open-meteo.com</a></strong></p>
    </div>
  )
}

export default WheaterForecast
