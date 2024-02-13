import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuMail } from 'react-icons/lu'

function Footer() {
  return (
    <div className='bg-slate-950 flex items-center justify-center flex-col'>
        <div className='flex flex-row space-x-3 pt-5 '>
            <a href='https://www.linkedin.com/in/mostafa-trahim/' target='_blank' 
            className='text-slate-100 hover:text-[#40CF8E] transition-all duration-300 flex flex-col items-center hover:scale-110'><FaLinkedin size={40} /></a>
            <a href='https://github.com/toshi-Devs' target='_blank' 
            className='text-slate-100 hover:text-[#40CF8E] transition-all duration-300 flex flex-col items-center hover:scale-110'><FaGithub size={40} /></a>
            <a href='mailto:trahim87mustapha@gmail.com' target='_blank' 
            className='text-slate-100 hover:text-[#40CF8E] transition-all duration-300 flex flex-col items-center hover:scale-110'><LuMail size={40} /></a>

    
        </div>
        <div className='flex '>
            <p className='text-lg text-slate-100 font-semibold text-center py-3 m-2 font-mono'>Designed and Coded by 
            <a href='https://github.com/toshi-Devs' target='_blank' className='text-[#40CF8E] hover:text-lime-400 transition-all duration-300'> Toshi-Devs</a></p>

        </div>
    </div>
  )
}

export default Footer