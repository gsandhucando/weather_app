import React, {useState} from 'react';
import DetailedDay from './DetailedDay';

const DayForcast = ({date,time,src,alt,temp,temp_max,temp_min,humidity}) => {

  let [detailedDay, setDetailedDay] = useState(false)

  function detailedModal() {
    setDetailedDay(!detailedDay)
  }

  return (
    <div className='day-forcast' onClick={detailedModal}>
      <p>{`${date}`}</p>
      <p>{`${time}`}</p>
      <p>{temp}</p>
      <img src={src} alt={alt}/>
      {detailedDay ? <DetailedDay temp_max={temp_max} temp_min={temp_min} humidity={humidity} /> : null}
    </div>
  )
}

export default DayForcast;