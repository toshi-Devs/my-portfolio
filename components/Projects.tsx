import React from 'react'
import { FaLink } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

function Projects() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-950 border-t-lime-200 border-t-2 py-10' id='Projects'>
        
        <h2 className='text-2xl font-bold text-slate-100 mx-10 pb-2'>Projects</h2>
           
                    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2'>
                        
                        <div className='bg-[#1C1C1C] m-3 border-2 border-lime-100 rounded-sm shadow-lg backdrop-blur-md p-5'>
                         {/* Now i will put a link to code and live website on top right of this div */}
                            <div className='flex flex-row justify-end space-x-3 pt-2'>
                                <a href='https://github.com/toshi-Devs/Dropbox-clone-nextjs' target='_blank' 
                                className='text-slate-100 hover:text-lime-200 transition-all duration-300 flex flex-col items-center'><FaGithub size={25} /></a>
                                <a href='https://dropbox-clone-nextjs.vercel.app/' target='_blank' 
                                className='text-slate-100 hover:text-lime-200 transition-all duration-300 flex flex-col items-center'><FaLink size={25} /> </a>
                            </div>

                            <div className='flex flex-col items-center justify-center space-y-5 pb-5 cursor-pointer'>
                                <h3 className='text-xl font-bold font-sans text-slate-100'>Dropbox Clone</h3>
                                <p className='text-lg text-slate-400 font-medium text-center'>Dropbox clone allows you upload and save you files using Typescript and NextJs</p>
                                <div className='flex flex-row space-x-1 gap-1 items-center uppercase font-mono'>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#FBD38D] border-[#FBD38D] bg-[#fbd38d29]'> NEXTJS</p>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#9DECF9] border-[#9DECF9] bg-[#fbd38d29]'> Typescript</p>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#FBB6CE] border-[#FBB6CE] bg-[#fbd38d29]'> TailwindCSS</p>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#FAF089] border-[#FAF089] bg-[#fbd38d29]'> Firebase</p>                                    
                                </div>  
                            </div>                          
                        </div>
                        
                        <div className='bg-[#1C1C1C] m-3 border-2 border-lime-100 rounded-sm shadow-lg backdrop-blur-md p-5'>
                         {/* Now i will put a link to code and live website on top right of this div */}
                            <div className='flex flex-row justify-end space-x-3 pt-2'>
                                <a href='https://github.com/toshi-Devs/auth-application' target='_blank'
                                className='text-slate-100 hover:text-lime-200 transition-all duration-300 flex flex-col items-center'><FaGithub size={25} /></a>
                                <a href='https://auth-application-wine.vercel.app/' target='_blank'
                                className='text-slate-100 hover:text-lime-200 transition-all duration-300 flex flex-col items-center'><FaLink size={25} /> </a>
                            </div>

                            <div className='flex flex-col items-center justify-center space-y-5 pb-5 cursor-pointer'>
                                <h3 className='text-xl font-bold font-sans text-slate-100'>Auth App</h3>
                                <p className='text-lg text-slate-400 font-medium'>A simple authentication app with React and Firebase</p>
                                <div className='flex flex-row space-x-1 gap-1 items-center uppercase font-mono'>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#FBD38D] border-[#FBD38D] bg-[#fbd38d29]'> Javascript</p>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#D6BCFA] border-[#D6BCFA] bg-[#fbd38d29]'> React</p>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#FBB6CE] border-[#FBB6CE] bg-[#fbd38d29]'> CSS</p>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#FAF089] border-[#FAF089] bg-[#fbd38d29]'> Firebase</p>  
                                </div>  
                            </div>
                          
                        </div>

                        <div className='bg-[#1C1C1C] m-3 border-2 border-lime-100 rounded-sm shadow-lg backdrop-blur-md p-5'>
                         {/* Now i will put a link to code and live website on top right of this div */}
                            <div className='flex flex-row justify-end space-x-3 pt-2'>
                                <a href='https://github.com/toshi-Devs/advice-generator-app' target='_blank'
                                className='text-slate-100 hover:text-lime-200 transition-all duration-300 flex flex-col items-center'><FaGithub size={25} /></a>
                                <a href='https://advice-generator-app-ivory-iota.vercel.app/' target='_blank'
                                className='text-slate-100 hover:text-lime-200 transition-all duration-300 flex flex-col items-center'><FaLink size={25} /> </a>
                            </div>

                            <div className='flex flex-col items-center justify-center space-y-5 pb-5 cursor-pointer'>
                                <h3 className='text-xl font-bold font-sans text-slate-100'>Advice Gennerator App</h3>
                                <p className='text-lg text-slate-400 font-medium text-center'>A very basic advice generator app calling an API for data, Practicing fetching data from APIs</p>
                                <div className='flex flex-row space-x-1 gap-1 items-center uppercase font-mono'>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#FBD38D] border-[#FBD38D] bg-[#fbd38d29]'> Javascript</p>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#D6BCFA] border-[#D6BCFA] bg-[#fbd38d29]'> React</p>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#FBB6CE] border-[#FBB6CE] bg-[#fbd38d29]'> CSS</p>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#FAF089] border-[#FAF089] bg-[#fbd38d29]'> API</p>
                                </div>  
                            </div>                          
                        </div>

                        <div className='bg-[#1C1C1C] m-3 border-2 border-lime-100 rounded-sm shadow-lg backdrop-blur-md p-5'>
                         {/* Now i will put a link to code and live website on top right of this div */}
                            <div className='flex flex-row justify-end space-x-3 pt-2'>
                                <a href='https://github.com/toshi-Devs/Dropbox-clone-nextjs' target='_blank' 
                                className='text-slate-100 hover:text-lime-200 transition-all duration-300 flex flex-col items-center'><FaGithub size={25} /></a>
                                <a href='https://dropbox-clone-nextjs.vercel.app/' target='_blank' 
                                className='text-slate-100 hover:text-lime-200 transition-all duration-300 flex flex-col items-center'><FaLink size={25} /> </a>
                            </div>

                            <div className='flex flex-col items-center justify-center space-y-5 pb-5 cursor-pointer'>
                                <h3 className='text-xl font-bold font-sans text-slate-100'>Dropbox Clone</h3>
                                <p className='text-lg text-slate-400 font-medium text-center'>Dropbox clone allows you upload and save you files using Typescript and NextJs</p>
                                <div className='flex flex-row space-x-1 gap-1 items-center uppercase font-mono'>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#FBD38D] border-[#FBD38D] bg-[#fbd38d29]'> NEXTJS</p>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#9DECF9] border-[#9DECF9] bg-[#fbd38d29]'> Typescript</p>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#FBB6CE] border-[#FBB6CE] bg-[#fbd38d29]'> TailwindCSS</p>
                                    <p className='text-sm font-semibold px-1 border-2 rounded-ee-lg text-[#FAF089] border-[#FAF089] bg-[#fbd38d29]'> Firebase</p>                                    
                                </div>  
                            </div>                          
                        </div>
                    </div>
                    
                    <p className='text-lg text-slate-400 font-medium text-center py-3 m-2'>If you want to see more of my projects, you can check my 
                    <a href='https://github.com/toshi-Devs' target='_blank' className='text-[#00838D] hover:text-lime-400 transition-all duration-300'> Github</a> page.</p>
                    

                    
    </div>
  )
}

export default Projects