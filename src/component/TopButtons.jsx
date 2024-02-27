import React from 'react'

const TopButtons = ({setQuery}) => {
    const cityes = [
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Sydney'
        },
        {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 4,
            title: 'Toronto'
        },
        {
            id: 5,
            title: 'Paris'
        },
    ]
    return (
        <div className='flex justify-around items-center my-6 '>
            {cityes.map((city) => (
                <button key={city.id} className='text-white text-lg font-medium' onClick={()=>setQuery({q:city.title})}>{city.title}</button>

            ))}
        </div>
    )
}

export default TopButtons
