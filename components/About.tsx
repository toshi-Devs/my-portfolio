
import React from 'react'
import { DiMaterializecss } from "react-icons/di";
import { FaCss3Alt } from 'react-icons/fa'
import { FaBootstrap, FaGitAlt, FaNodeJs, FaNpm, FaReact } from 'react-icons/fa6'
import { ImHtmlFive } from 'react-icons/im'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiFirebase, SiNextdotjs, SiTailwindcss } from 'react-icons/si'


function About() {
  return (
    <div id='About' className='bg-slate-950'>
        <div className=' container mx-auto flex flex-col min-h-screen bg-slate-950 border-t-lime-200 border-t-2 py-10'>
            <div className='space-y-3 mx-10'>
                <h2 className='text-2xl font-bold text-slate-100'>About Me</h2>
                <p className=' text-lg text-slate-400 inline-block font-medium'>
                    At 21 years old, I'm knee-deep in my IT studies, fueled by a fascination for all things tech.
                    Credit my two brothers for sparking my coding journey <span className=' text-[#40CF8E]'>– their passion was contagious. </span>
                    While I haven't conquered full-stack development yet, I'm on the grind, soaking up knowledge like a sponge.
                    There's something thrilling about diving into the unknown, and coding feeds that craving for discovery.
                    Oh, and when I'm not tinkering with code, you'll find me in the virtual battlegrounds of <span className='text-[#E58716] font-bold'>Counter Strike</span>, 
                    where I trade pixels for headshots. Life's an adventure, and I'm here for the ride!</p>
            </div>  

            <div className='space-y-3 py-10 mx-10'>
                <h2 className='text-2xl font-bold text-slate-100'>Skills</h2>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-center'>
                    <div className='bg-slate-950 p-5 flex flex-col items-center '>
                        <ImHtmlFive className='text-white transform transition-all hover:scale-110' size={60}/>
                        <p className='text-lg text-slate-400 font-medium mt-2'>HTML5</p>
                    </div>

                    <div className='bg-slate-950 p-5 flex flex-col items-center'>
                        <FaCss3Alt className='text-white transform transition-all hover:scale-110' size={60}/>
                        <p className='text-lg text-slate-400 font-medium mt-2'>CSS3</p>
                    </div>

                    <div className='bg-slate-950 p-5 flex flex-col items-center'>
                        <RiJavascriptFill className='text-white transform transition-all hover:scale-110' size={60}/>
                        <p className='text-lg text-slate-400 font-medium mt-2'>JavaScript</p>
                    </div>

                    <div className='bg-slate-950 p-5 flex flex-col items-center'>
                        <SiTailwindcss className='text-white transform transition-all hover:scale-110' size={60}/>
                        <p className='text-lg text-slate-400 font-medium mt-2'>TailwindCSS</p>
                    </div>  

                    <div className='bg-slate-950 p-5 flex flex-col items-center'>
                        <FaReact className='text-white transform transition-all hover:scale-110' size={60}/>
                        <p className='text-lg text-slate-400 font-medium mt-2'>React</p>
                    </div>

                    <div className='bg-slate-950 p-5 flex flex-col items-center'>
                        <SiNextdotjs className='text-white transform transition-all hover:scale-110' size={60}/>
                        <p className='text-lg text-slate-400 font-medium mt-2'>Nextjs</p>
                    </div>

                    <div className='bg-slate-950 p-5 flex flex-col items-center'>
                        <FaNodeJs className='text-white transform transition-all hover:scale-110' size={60}/>
                        <p className='text-lg text-slate-400 font-medium mt-2'>Nodejs</p>
                    </div>

                    <div className='bg-slate-950 p-5 flex flex-col items-center'>
                        <DiMaterializecss className='text-white transform transition-all hover:scale-110' size={60}/>
                        <p className='text-lg text-slate-400 font-medium mt-2'>Materialize</p>
                    </div>

                    <div className='bg-slate-950 p-5 flex flex-col items-center'>
                        <SiFirebase className='text-white transform transition-all hover:scale-110' size={60}/>
                        <p className='text-lg text-slate-400 font-medium mt-2'>Firebase</p>
                    </div>

                    <div className='bg-slate-950 p-5 flex flex-col items-center'>
                        <FaGitAlt className='text-white transform transition-all hover:scale-110' size={60}/>
                        <p className='text-lg text-slate-400 font-medium mt-2'>Git</p>
                    </div>

                    <div className='bg-slate-950 p-5 flex flex-col items-center'>
                        <FaNpm className='text-white transform transition-all hover:scale-110' size={60}/>
                        <p className='text-lg text-slate-400 font-medium mt-2'>npm</p>
                    </div>

                    <div className='bg-slate-950 p-5 flex flex-col items-center'>
                        <FaBootstrap className='text-white transform transition-all hover:scale-110' size={60}/>
                        <p className='text-lg text-slate-400 font-medium mt-2'>Bootstrap</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About