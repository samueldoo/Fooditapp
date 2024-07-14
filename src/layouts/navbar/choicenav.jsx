import React from 'react'
import { NavLink } from 'react-router-dom'


export default function choicenav() {
  return (
    <ul className={`flex flex-row  bg-[#1A1A1A26] text-white justify-evenly w-[744px] h-[53px] rounded-[26px] items-center font-mont mt-40`}>
            <NavLink to='' className={`hover:border-[1px] text-white`}>FOOD NEAR BY</NavLink>
            <NavLink to='' className={`hover:border-[1px] text-white`}>FREQUENTLY ORDERED</NavLink>
            <NavLink to='' className={`hover:border-[1px] text-white`}>SUPRISE ME</NavLink>
    </ul>
  )
}
