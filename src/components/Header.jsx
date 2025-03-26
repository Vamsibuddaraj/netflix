import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store=>store.user)
  const handleSignout = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")
        console.log("succesfully signed out")
      }).catch((error) => {
        // An error happened.
        // navigate("/error")
      });
  }
  return (
    <div className='absolute flex w-12/12 justify-between bg-gradient-to-b from-black z-50'>
      <div className='  py-1 px-3 '>
          <img className='w-40 h-30' src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png' alt='logo'/>
      </div>
      {user&&<div onClick={handleSignout} className='py-8 px-10 cursor-pointer'>
        <img className='w-12 h-12 ' src='https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg' alt='user-logo'/>
      </div>}
    </div>
  )
}

export default Header