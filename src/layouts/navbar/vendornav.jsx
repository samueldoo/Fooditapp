import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function vendornav() {
  return (
    <nav className={`navbar bg-opacity-50 backdrop-blur-md px-20 flex flex-row justify-between items-center `}>
      <div className='flex flex-row gap-2 items-center'>
        <button className='w-[44px] h-[44px] rounded-[26px] bg-white place-content-center px-2'>
            <IoMdArrowRoundBack className={`w-[24px] h-[24px]`} />
        </button>

        <h1 className='font-mont font-black text-white text-[26px]'>DELE<span className='font-mont font-semibold text-[#E58D3A] text-[26px]'>CANTEEN</span></h1>
      </div>
      {/* <ul className={`flex flex-row  bg-[#1A1A1A26] text-white justify-evenly w-[410px] h-[53px] rounded-[26px] items-center font-mont`}>
        <NavLink to='' className={`hover:border-[1px] text-white`}>Home</NavLink>
        <NavLink to='' className={`hover:border-[1px] text-white`}>About Us</NavLink>
        <NavLink to='' className={`hover:border-[1px] text-white`}>Favourite Vendor</NavLink>
      </ul> */}
      <div className={`w-[112px] h-[44px] rounded-[9px] bg-[#F8A307] text-white gap-2 flex flex-row items-center px-3 cursor-pointer`}>
            <p>Cart</p>
          <BsCart4 className={`w-[24px] h-[24px]`} />
          <p>1</p>
        </div>
    </nav>
  )
}
