import React from 'react'
import { formateToLocalTime } from '../services/weatherService';

const TimeAndLocation = ({weather:{dt,timezone,name,country}}) => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center my6 gap-5'>
        <p className='text-white text-xl font-extralight'>{formateToLocalTime(dt,timezone)}</p>
        <p className='text-white text-3xl font-medium'>{`${name},${country}`}</p>
      </div>
    </div>
  )
}

export default TimeAndLocation

