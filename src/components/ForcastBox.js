import React, {useEffect, useState} from 'react';
import axios from 'axios';
import env from '../env.json'

let key = env.WEATHER_API

const ForcastBox = () => {
  let [forcast, setForcast] = useState([])

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${key}`)
    .then(response => {
      console.log(response.data)
    })
  })

  return (
    <div>
      forcast box
    </div>
  )
}

export default ForcastBox;