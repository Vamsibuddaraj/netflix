import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const  handleSignIn = () => {
        setIsSignIn(!isSignIn)
    }

  return (
    <div className='relative'>
        <Header />
        <div>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg
' alt='background-logo'/>
        </div>
        <form className='absolute top-7 flex flex-col bg-black bg-opacity-80 w-1/4 mx-auto right-0 left-0 mt-50 text-white p-10 rounded-lg'>
            <h1 className='font-bold text-2xl'>{isSignIn?"Sign In":"Sign Up"}</h1>
            {!isSignIn&&<input type='text' placeholder='Full Name' className='p-3 my-3 bg-gray-500'/>}
            <input type='text' placeholder='Email Address' className='p-3 my-3 bg-gray-500'/>
            <input type='password' placeholder='Password' className='p-3 my-3 bg-gray-500 '/>
            <button className=' p-3 my-3 bg-red-600 rounded-2xl'>{isSignIn?"Sign In":"Sign Up"}</button>
            <p onClick={handleSignIn} className='cursor-pointer'>{isSignIn?"New to Netflix? Sign up now":"Already registered! Sign In"}</p>
        </form>
    </div>
  )
}

export default Login