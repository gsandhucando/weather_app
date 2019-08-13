import React, {useState} from 'react';
// import DetailedDay from './DetailedDay';

const DayForcast = ({date,time,src,alt,temp,weather,temp_max,temp_min,humidity,windSpeed}) => {

  // let [detailedDay, setDetailedDay] = useState(false)

  // function detailedModal() {
  //   setDetailedDay(!detailedDay)
  // }

  return (
    <div className='day-forcast'>
      <p>{`${date}`}</p>
      <p>{`${time}`}</p>
      <p>{temp}{'\u00b0'}</p>
      <p>{weather}</p>
      <img src={src} alt={alt}/>
      <p>Wind Speed:{windSpeed}</p>
      {/* <div>
     <DetailedDay temp_max={temp_max} temp_min={temp_min} humidity={humidity} windSpeed={windSpeed} />
      </div> */}
    </div>
  )
}

export default DayForcast;