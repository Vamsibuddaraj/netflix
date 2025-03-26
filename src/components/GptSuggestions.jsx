import React from 'react'
import { BG_LOGO } from '../utils/constants'

const GptSuggestions = () => {
  return (
    <div className='absolute'>
        <img className='opacity-30' src={BG_LOGO} alt='bg-logo'/>
        <div className='w-screen flex justify-center absolute top-40'>
            <form className='bg-black py-6 px-3 w-[50%]'>
                <input className='bg-gray-400  w-[70%] px-6 py-4 mx-3' placeholder='what do you want to watch?'/>
                <button className='bg-red-600 w-[20%] text-white px-3  py-3 rounded-xl'>Search</button>
            </form>
        </div>
    </div>
  )
}

export default GptSuggestions