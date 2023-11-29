import React, { useState } from 'react';
import { LoginBg, Logo } from '../assets';
import { LoginInput } from '../components';
import { FaEnvelope, FaLock } from '../assets/icons';
import { motion } from "framer-motion";
import { buttonClick } from '../animations';




const Login = () => {


  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");




  return (

    <div className='w-screen h-screen relative overflow-hidden flex'>
      {/* background image */}
      <img className='w-full h-full object-cover absolute top-0 left-0' src={LoginBg} alt="" />

      {/* CONTENT BOX */}
      <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
        {/* top logo section */}
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={Logo} className='w-8' alt="" />
          <p className='text-headingColor font-semibold text-2xl'>City</p>
        </div>

        {/* welcome text */}
        <p className='text-3xl font-semibold text-headingColor'>Welcome Back</p>
        <p className='text-xl text-textColor font-bold -mt-6'>{ isSignUp ? "Sign up" : "Sign in" } with following</p>

        {/* input section */}
        <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
          <LoginInput
            placeHolder={"Email Here"}
            icon={<FaEnvelope className='text-xl text-textColor' />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />

          <LoginInput
            placeHolder={"Password Here"}
            icon={<FaLock className='text-xl text-textColor' />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignUp={isSignUp}
          />


          {isSignUp && (

            <LoginInput
              placeHolder={"Confirm Password Here"}
              icon={<FaLock className='text-xl text-textColor' />}
              inputState={confirmPassword}
              inputStateFunc={setConfirmPassword}
              type="password"
              isSignUp={isSignUp}
            />


          )}

          {!isSignUp ? (
            <p>Doesn't have an account: <motion.button className='text-red-600 font-bold underline cursor-pointer bg-transparent'
            onClick={() => setIsSignUp(true)}
              {...buttonClick}>
              Create one </motion.button>
            </p>

          ) : (

            <p>Already have an account: <motion.button className='text-red-600 font-bold underline cursor-pointer bg-transparent'
            onClick={() => setIsSignUp(false)}
              {...buttonClick}>
              Sign in here </motion.button>
            </p>
          )}

        </div>
      </div>
    </div>
  )
}

export default Login;