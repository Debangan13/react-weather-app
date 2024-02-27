import React from 'react'

const Forecast = ({title}) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6 '>
                <p className='text-white font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-2' />
            <div className='flex justify-between '>
                <div className='flex flex-col items-center text-white'>
                    <p className='font-lignt text-sm'>2:00 PM</p>
                    <img src="http://openweathermap.org/img/wn/02d.png" className='w-12 my-1' alt="cloud" />
                    <p>19°</p>
                </div>
                <div className='flex flex-col items-center text-white'>
                    <p className='font-lignt text-sm'>2:00 PM</p>
                    <img src="http://openweathermap.org/img/wn/02d.png" className='w-12 my-1' alt="cloud" />
                    <p>19°</p>
                </div>
                <div className='flex flex-col items-center text-white'>
                    <p className='font-lignt text-sm'>2:00 PM</p>
                    <img src="http://openweathermap.org/img/wn/02d.png" className='w-12 my-1' alt="cloud" />
                    <p>19°</p>
                </div>
                <div className='flex flex-col items-center text-white'>
                    <p className='font-lignt text-sm'>2:00 PM</p>
                    <img src="http://openweathermap.org/img/wn/02d.png" className='w-12 my-1' alt="cloud" />
                    <p>19°</p>
                </div>
                <div className='flex flex-col items-center text-white'>
                    <p className='font-lignt text-sm'>2:00 PM</p>
                    <img src="http://openweathermap.org/img/wn/02d.png" className='w-12 my-1' alt="cloud" />
                    <p>19°</p>
                </div>
            </div>
        </div>
    )
}

export default Forecast
