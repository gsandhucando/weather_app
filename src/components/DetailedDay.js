import React, { useEffect, useState } from "react";
import env from "../env.json";
import axios from "axios";

let key = env.WEATHER_API;

const DetailedDay = ({ temp, inputCIty }) => {
  let [weather, setWeather] = useState([]);
  let [forcast, setForcast] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${inputCIty},us&units=imperial&APPID=${key}`
      )
      .then(response => {
        console.log(response.data)
        setForcast(response.data.list.slice(0, 7))
        // setForcast(response.data.list.slice(0, 7).map((temp, i) => {
        //   console.log(temp.main)
        //   // return Math.round(temp.main.temp_max)
        // }))
        setWeather(response.data.list.slice(0,7).map(forcast => {
          return forcast.weather
        }))
      })
      .catch(err => console.log(err))
  }, []);

  // let mappedWeather = weather.map(forcast => {
    //   return <p>{forcast[0].main}</p>
    // })
    let mappedWeather;
    for (let i = 0; i < weather.length; i++) {
      mappedWeather = weather[0][0].main
    }

  // for (let i = 0; i < forcast.length; i++) {
  //   // console.log(Math.max(forcast[i]))
  // }

  console.log(forcast)

  return (
    <div className="detailed-day">
      <h1>{temp}{'\u00b0'}</h1>
      <h1>max temp:</h1>
      <h1>min temp:</h1>
      <h1>humidity:</h1>
      <h1>{mappedWeather}</h1>
    </div>
  );
};

export default DetailedDay;
