import React from 'react'

const Header = () => {
  return (
    <div className='absolute flex w-11/12 justify-between'>
      <div className='  py-1 px-3 bg-gradient-to-b from-black'>
          <img className='w-40 h-30' src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png' alt='logo'/>
      </div>
      <div className='py-8'>
        <img className='w-12 h-12 ' src='https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg' alt='user-logo'/>
      </div>
    </div>
  )
}

export default Header