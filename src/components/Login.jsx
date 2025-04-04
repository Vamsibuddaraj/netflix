import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_LOGO } from '../utils/constants';
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMsge,setErrorMsge] = useState(null)
    // const user = useSelector(store=>store.user)
    const dispatch = useDispatch()
    const email = useRef()
    const password = useRef()
    const name  = useRef()
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
                updateProfile(auth.currentUser, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    // Profile updated!
                    const {uid,displayName,email} = auth.currentUser;
                    dispatch(addUser({"uid":uid,"displayName":displayName,"email":email}))
                  }).catch((error) => {
                    // An error occurred
                  });
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


  return (
    <div className='relative'>
        <Header />
        <div>
            <img src={BG_LOGO} alt='background-logo'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute top-7 flex flex-col bg-black bg-opacity-80 w-1/4 mx-auto right-0 left-0 mt-50 text-white p-10 rounded-lg'>
            <h1 className='font-bold text-2xl'>{isSignIn?"Sign In":"Sign Up"}</h1>
            {!isSignIn&&<input ref={name} type='text' placeholder='Full Name' className='p-3 my-3 bg-gray-500'/>}
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