import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "../env.json";
import DayForcast from "./DayForcast";
// import DetailedDay from "./DetailedDay";

let key = env.WEATHER_API;

const ForcastBox = () => {
  let [forcast, setForcast] = useState([]);
  let [city, setCity] = useState("");
  let [country, setcountry] = useState("");
  let [weatherImg, setWeatherImg] = useState([]);
  let [inputCity, setInputCity] =useState('san francisco')

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${inputCity},us&units=imperial&APPID=${key}`
      )
      .then(response => {
        // console.log(response.data);
        setCity(response.data.city.name);
        setcountry(response.data.city.country);
        setForcast(response.data.list.slice(0, 7));
        setWeatherImg(
          response.data.list.slice(0, 7).map(el => {
            return el.weather;
          })
        );
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${inputCity},us&units=imperial&APPID=${key}`)
    .then(response => {
      // console.log(response.data);
      setCity(response.data.city.name);
      setcountry(response.data.city.country);
      setForcast(response.data.list.slice(0, 7));
      setWeatherImg(
        response.data.list.slice(0, 7).map(el => {
          return el.weather;
        })
      );
    });
  }

  let temp = 0;

  let mappedDateAndTime = forcast.map((day, i) => {
    // console.log(day.main.temp);
    temp = Math.round(day.main.temp);
    let weather = day.weather[0].main;
    // let temp_max = Math.round(day.main.temp_max);
    // let temp_min = Math.round(day.main.temp_min);
    // let humidity = day.main.humidity;
    let time = new Date(day.dt_txt);
    let month = time.getMonth() + 1;
    let date = time.getDate();
    let year = time.getFullYear();
    let windSpeed = Math.round(day.wind.speed);
    return (
      <DayForcast
        key={i}
        date={month + "/" + date + "/" + year}
        time={time.toLocaleTimeString("en-US")}
        src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
        alt={day.weather[0].description}
        temp={temp}
        weather={weather}
        windSpeed={windSpeed}
        inputCIty={inputCity}
      />
    );
  });

  // console.log(weatherImg[0])
  let background = "";

  for (let i = 0; i < weatherImg.length; i++) {
    background = weatherImg[i][0].main;

  }


  // console.log(background);
  switch (background) {
    case "Clear":
      background =
        "url(https://media2.giphy.com/media/ivcVZnZAEqhs4/giphy.gif)";
      break;
    case "Thunderstorm":
    case "Drizzle":
    case "Rain":
      background =
        "url(https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif)";
      break;
    case "Clouds":
      background = 'url(https://media0.giphy.com/media/KwZoSJlvep6Vy/source.gif)'
      break;
    case "Snow":
      background = 'url(http://giphygifs.s3.amazonaws.com/media/lMr6k5bqTTioM/giphy.gif)'
      break;
    default:
      background =
      "url(https://media2.giphy.com/media/ivcVZnZAEqhs4/giphy.gif)";
      break;
  }
  // console.log(background);
  let styles = {
    clearVid: {
      backgroundImage: `${background}`,
      zIndex: "-1",
      height: "100vh",
      width: "90vw",
      backgroundRepeat: "repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 300px"
    }
  };



  function inputCItyChange(e) {
    e.preventDefault()
    console.log(e.target.value)
    setInputCity(e.target.value)
  }
  console.log(inputCity)

  return (
    <div style={styles.clearVid} className="forcast-container">
      <form onSubmit={handleSubmit}>
      <input onChange={inputCItyChange} placeholder='Please enter state' />
      <input type='submit' value="Enter City" />
      </form>
      {/* <video style={{height: "100%", width: '100vw', zIndex: '99'}} autoPlay>
        <source src={background} type="video/mp4" />
      </video> */}
      <h1>
        {city} {country}
      </h1>
      <div className="forcast-box">{mappedDateAndTime}</div>
      <div className="forcast-main-box">
        {/* <DetailedDay temp={temp} inputCIty={inputCIty} /> */}
      </div>
    </div>
  );
};

export default ForcastBox;
