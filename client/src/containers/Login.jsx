import React from 'react';
import { LoginBg } from '../assets';

const Login = () => {
  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>
      {/* background image */}
      <img className='w-full h-full object-cover absolute top-0 left-0' src={LoginBg} alt="" />
      </div>
  )
}

export default Login;