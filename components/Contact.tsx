import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuSend } from 'react-icons/lu'

function Contact() {

    //create a function to send the message to my email
    
    // after sending the message i want to receive the message in my email
    // close the modal after 5 seconds
    // create a modal to show that the form has been submitted
    // create a modal to show that the form has been submitted
    // create a button to submit the form


  return (
    <div id='Contact' className='flex flex-col h-screen bg-slate-950 border-t-lime-200 border-t-2 py-10 space-y-5'>
        <div className='space-y-3 mx-10'>
            <h2 className='text-2xl font-bold text-slate-100'>Contact</h2>
            <p className=' text-lg text-slate-400 inline-block font-medium'>
                Feel free to drop a message or connect with me on social media. I'm always open to new opportunities and collaborations.
            </p>
        </div>

        <div className='flex flex-col space-y-3 mx-10 pt-10 backdrop-blur-md justify-center items-center'>
            <form className='flex flex-col space-y-3 w-2/3'>
                <label htmlFor="text" className='text-lg text-slate-400'>Name</label>
                <input type='text' className='bg-slate-950 border-2 border-lime-100 p-3 rounded-md text-slate-100' />
                <label htmlFor="email" className='text-lg text-slate-400'>Email</label>
                <input type='email' className='bg-slate-950 border-2 border-lime-100 p-3 rounded-md text-slate-100' />
                <label htmlFor="message" className='text-lg text-slate-400'>Message</label>
                <textarea className='bg-slate-950 border-2 border-lime-100 p-3 rounded-md text-slate-100 h-40 max-h-40'></textarea>
                <button type='submit' className='bg-lime-200 text-slate-950 p-3 rounded-md font-semibold w-fit flex items-center justify-center hover:bg-[#00838D]'>Send <LuSend className='ml-1' /></button>
            </form>
            <div className='flex flex-row space-x-3 pt-5'>
                <a href='https://www.linkedin.com/in/mostafa-trahim/' target='_blank' 
                className='text-slate-100 hover:text-[#40CF8E] transition-all duration-300 flex flex-col items-center hover:scale-110'><FaLinkedin size={40} /></a>
                <a href='https://github.com/toshi-Devs' target='_blank' 
                className='text-slate-100 hover:text-[#40CF8E] transition-all duration-300 flex flex-col items-center hover:scale-110'><FaGithub size={40} /></a>
            </div>
        
        </div>
    </div>
  )
}

export default Contact