import React, { useState, useRef } from 'react';
import NAVBAR from '../layouts/navbar/navbar2'
import IMAGE3 from '../assests/smiley-man-eating-restaurant 3.png'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Login() {
 
  const navigate = useNavigate();

  const handleSignupButton =() => {
    navigate('/signup');
  }

  return (
    <div className=''>
        <NAVBAR />
        <div className=' w-[100%] h-[100%] min-h-[100vh] flex justify-center items-center'>
            <div className=' bg-white w-[100%] h-[100%] min-h-[100vh] flex flex-row justify-end  '>
                <div className=' bg-white h-[100%] w-[547px] min-h-[100vh] flex flex-row justify-center items-center'>
                    <form action="">

                        <div onClick={handleSignupButton} className='flex flex-row items-center mb-2'>
                            <IoMdArrowRoundBack className='w-[28px] h-[28px] text-[#78667E] cursor-pointer' />
                            <p className='text-[#78667E] font-mont font-normal text-[16px]'>Back</p>
                        </div>

                        <h1 className='text-black font-mont font-bold text-[18px] mb-7'>Login to continue</h1>

                        <label htmlFor="" className=''>
                                <p className='text-black font-mont font-bold text-[18px]'>Enter Email</p>
                                <input type="email" placeholder='testing@gmail.com' className=' border-[1px] w-[456px] h-[60px] rounded-[600px] px-3 outline-none mb-5'/>
                        </label>

                        <label htmlFor="">
                                <p className='text-black font-mont font-bold text-[18px]'>Password</p>
                                <input type="password" placeholder='Enter Password' className='border-[1px] mb-5 w-[456px] h-[60px] rounded-[600px] px-3 outline-none'/>
                        </label>

                        <button className='w-[456px] h-[60px] rounded-[600px] text-white font-bold font-mont text-[18px] bg-[#F6821F] items-center'>Login</button>
                    </form>
                </div>


                <div className=' bg-white h-[100%] w-[625px] min-h-[100vh] flex justify-center items-center '>
                    <img src={IMAGE3} alt=""  className='w-[100%] h-[100%]'/>
                   
                </div>
            </div>
        </div>
    </div>
  )
}
