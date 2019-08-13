import React from 'react';

const DetailedDay = ({temp_max,temp_min,humidity}) => {
  return (
    <div className='detailed-day'>
     <h1>max temp:{temp_max}</h1>
     <h1>min temp:{temp_min}</h1>
     <h1>humidity:{humidity}</h1>
    </div>
  )
}

export default DetailedDay;