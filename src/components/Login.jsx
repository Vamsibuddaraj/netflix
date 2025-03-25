import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { useSelector } from 'react-redux';
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMsge,setErrorMsge] = useState(null)
    const user = useSelector(store=>store.user)
    // const [authorized,setAuthorized] = useState(false)
    console.log("user",user)
    const email = useRef()
    const password = useRef()
    const handleButtonClick = () =>{
        //validate the form data
        const msge = checkValidData(email.current.value,password.current.value)
        setErrorMsge(msge)
        if(msge) return
        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // setAuthorized(user)
                // navigate("/browse")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsge(errorCode+" - "+errorMessage)
            });
        }
        if(isSignIn){
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // setAuthorized(user)
                // navigate("/browser")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsge(errorCode+" - "+errorMessage)
            });

        }
    }
    const  handleSignIn = () => {
        setIsSignIn(!isSignIn)
        email.current.value=null
        password.current.value=null
        setErrorMsge(null)
    }
    console.log("msge--",errorMsge)


  return (
    <div className='relative'>
        <Header />
        <div>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg' alt='background-logo'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute top-7 flex flex-col bg-black bg-opacity-80 w-1/4 mx-auto right-0 left-0 mt-50 text-white p-10 rounded-lg'>
            <h1 className='font-bold text-2xl'>{isSignIn?"Sign In":"Sign Up"}</h1>
            {!isSignIn&&<input type='text' placeholder='Full Name' className='p-3 my-3 bg-gray-500'/>}
            <input ref={email} type='text' placeholder='Email Address' className='p-3 my-3 bg-gray-500'/>
            <input ref={password} type='password' placeholder='Password' className='p-3 my-3 bg-gray-500 '/>
            {errorMsge&&<p className='text-red-500'>{errorMsge}</p>}
            <button className=' p-3 my-3 bg-red-600 cursor-pointer rounded-2xl' onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
            <p onClick={handleSignIn} className='cursor-pointer'>{isSignIn?"New to Netflix? Sign up now":"Already registered! Sign In"}</p>
        </form>
    </div>
  )
}

export default Login