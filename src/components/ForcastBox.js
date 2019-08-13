import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "../env.json";
import DayForcast from "./DayForcast";

let key = env.WEATHER_API;

const ForcastBox = () => {
  let [forcast, setForcast] = useState([]);
  let [city, setCity] = useState("");
  let [country, setcountry] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=portland,us&units=imperial&APPID=${key}`
      )
      .then(response => {
        console.log(response.data);
        setCity(response.data.city.name);
        setcountry(response.data.city.country);
        setForcast(response.data.list.slice(0, 7));
      });
  }, []);

  let mappedDateAndTime = forcast.map((day, i) => {
    // console.log(day);
    let temp = Math.round(day.main.temp);
    let temp_max = Math.round(day.main.temp_max)
    let temp_min = Math.round(day.main.temp_min)
    let humidity = day.main.humidity
    let time = new Date(day.dt_txt);
    let month = time.getMonth() + 1;
    let date = time.getDate();
    let year = time.getFullYear();
    return (
      <DayForcast
        key={i}
        date={month + "/" + date + "/" + year}
        time={time.toLocaleTimeString("en-US")}
        src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
        alt={day.weather[0].description}
        temp={temp}
        temp_max={temp_max}
        temp_min={temp_min}
        humidity={humidity}
      />
    );
  });
  return (
    <div>
      <h1>
        {city} {country}
      </h1>
      <div className="forcast-box">{mappedDateAndTime}</div>
    </div>
  );
};

export default ForcastBox;
