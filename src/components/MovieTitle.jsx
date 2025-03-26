import React from 'react'

const MovieTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video bg-gradient-to-r from-black pt-[20%] px-20 absolute text-white'>
        <p className='text-5xl font-bold'>{title}</p>
        <p className='my-10 w-100'>{overview}</p>
        <div className='flex'>
            <button className='bg-gray-500 text-white py-2 px-10 rounded-xl cursor-pointer'>Play</button>
            <button className='bg-gray-500 text-white mx-2 py-2 px-7 rounded-xl cursor-pointer'>More Info</button>
        </div>
    </div>
  )
}

export default MovieTitle