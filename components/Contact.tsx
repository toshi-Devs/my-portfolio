"use client"

import { useRef, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuMail, LuSend } from 'react-icons/lu'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import Footer from '@/components/Footer';


function Contact() {

    const form : any = useRef();
    const [sendEmail, setSendEmail] = useState({
        from_name: "",
        from_email: "",
        message: "",
      });
    const { from_name, from_email, message } = sendEmail;

    const onChange = (e:any) =>
    setSendEmail({ ...sendEmail, [e.target.name]: e.target.value });


    const formSubmit = (e:any) => {
    e.preventDefault();

    if (!from_name || !from_email || !message){
        toast.error("Please fill all fields!")
        return;
    }

    emailjs
      .sendForm('service_bnklgsj', 'template_ii75rkk', form.current, {
        publicKey: '64HuHTaVnUhYVn-UF',
      })
      .then(
        () => {

          console.log('SUCCESS!');
          toast.success('Message sent. Thanks for getting in touch!', {
            style: {
              border: '1px solid #bfff00',
              padding: '16px',
              color: '#1A202C',
            },
            iconTheme: {
              primary: '#713200',
              secondary: '#1A202C',
            },
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Oops. Something went wrong!", {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
              },
              iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
              },
          })
        },
      );
      setSendEmail({
        from_name: "",
        from_email: "",
        message: "",
      });
  };


  return (
    <div id='Contact' className='flex flex-col h-screen bg-slate-950 border-t-lime-200 border-t-2 py-10 space-y-5'>
        <div className='space-y-3 mx-10'>
            <h2 className='text-2xl font-bold text-slate-100'>Contact</h2>
            <p className=' text-lg text-slate-400 inline-block font-medium'>
                Feel free to drop a message or connect with me on social media. I'm always open to new opportunities and collaborations.
            </p>
        </div>

        <div className='flex flex-col space-y-3 mx-10 pt-10 justify-center items-center bg-slate-950'>
        <form className="flex flex-col space-y-3 w-2/3" ref={form} onSubmit={formSubmit}>
          <label htmlFor="name" className="text-lg text-slate-400">Name</label>
          <input 
            type="text"
            value={from_name}
            name="from_name"
            onChange={onChange}
            className="bg-slate-950 border-2 border-lime-100 p-3 rounded-md text-slate-100 backdrop-blur-md"
          />
          <label htmlFor="email" className="text-lg text-slate-400">Email</label>
          <input
            type="email"
            value={from_email}
            name="from_email"
            onChange={onChange}
            className="bg-slate-950 border-2 border-lime-100 p-3 rounded-md text-slate-100 backdrop-blur-md"
          />
          <label htmlFor="message" className="text-lg text-slate-400">Message</label>
          <textarea
            name="message"
            value={message}
            onChange={onChange}
            className="bg-slate-950 border-2 border-lime-100 p-3 rounded-md text-slate-100 h-40 max-h-40 backdrop-blur-md"
          ></textarea>
          <button type="submit" value="Send" className="bg-lime-200 text-slate-950 p-3 rounded-md font-semibold w-fit flex items-center justify-center hover:bg-[#00838D]">
            Send <LuSend className="ml-1" />
          </button>
        </form>
        {/* <Footer /> */}
            {/* <div className='flex flex-row space-x-3 pt-5 bg-slate-950'>
                <a href='https://www.linkedin.com/in/mostafa-trahim/' target='_blank' 
                className='text-slate-100 hover:text-[#40CF8E] transition-all duration-300 flex flex-col items-center hover:scale-110'><FaLinkedin size={40} /></a>
                <a href='https://github.com/toshi-Devs' target='_blank' 
                className='text-slate-100 hover:text-[#40CF8E] transition-all duration-300 flex flex-col items-center hover:scale-110'><FaGithub size={40} /></a>
                <a href='mailto:trahim87mustapha@gmail.com' target='_blank' 
                className='text-slate-100 hover:text-[#40CF8E] transition-all duration-300 flex flex-col items-center hover:scale-110'><LuMail size={40} /></a>

                
            </div>
            <p className='text-lg text-slate-100 font-semibold text-center py-3 m-2 font-mono'>Designed and Coded by 
            <a href='https://github.com/toshi-Devs' target='_blank' className='text-[#40CF8E] hover:text-lime-400 transition-all duration-300'> Toshi-Devs</a></p> */}
        </div>
    </div>
  )
}

export default Contact