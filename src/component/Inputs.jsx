import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Inputs = ({ setQuery, units, setUnits }) => {
    const [city, setCity] = useState('')

    const handleSearchClick = () => {
        if (city !== '') {
            setQuery({ q: city })
            setCity('')
        }
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((postion) => {
                const lat = postion.coords.latitude
                const lon = postion.coords.longitude

                setQuery({ lat, lon })
            })
        }
    }

    const handleUnitschange = (e) => {
        const selectedUnits = e.currentTarget.name
       if(units !== selectedUnits) setUnits(selectedUnits)      

    }

    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row items-center w-3/4 justify-center space-x-4 '>
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
                    placeholder='search for city..'
                />
                <UilSearch size={25} className='text-white cursor-pointer transition ease-in-out hover:scale-125' onClick={handleSearchClick} />
                <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-in-out hover:scale-125 ' onClick={handleLocationClick} />
            </div>
            <div className='flex flex-row items-center justify-center w-1/4'>
                <button name='metric' className='text-white text-xl font-light transition ease-in-out hover:scale-125' onClick={handleUnitschange} >°C</button>
                <p className='text-white text-xl mx-1'>|</p>
                <button name='imperial' className='text-white text-xl font-light transition ease-in-out hover:scale-125' onClick={handleUnitschange}>°F</button>
            </div>

        </div>
    )
}

export default Inputs
