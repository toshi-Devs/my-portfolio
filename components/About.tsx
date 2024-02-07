import React from 'react'

function About() {
  return (
    <div id='About' className=''>
        <div className='flex flex-col h-screen bg-slate-950 border-t-lime-200 border-t-2'>
            <div className='space-y-3 m-10'>
                <h2 className='text-2xl font-semibold text-slate-100'>About Me</h2>
                <p className=' text-lg text-slate-400 inline-block font-medium'>
                    At 21 years old, I'm knee-deep in my IT studies, fueled by a fascination for all things tech.
                    Credit my two brothers for sparking my coding journey <span className=' text-[#40CF8E]'>– their passion was contagious. </span>
                    While I haven't conquered full-stack development yet, I'm on the grind, soaking up knowledge like a sponge.
                    There's something thrilling about diving into the unknown, and coding feeds that craving for discovery.
                    Oh, and when I'm not tinkering with code, you'll find me in the virtual battlegrounds of Counter Strike, 
                    where I trade pixels for headshots. Life's an adventure, and I'm here for the ride!</p>
            </div>  
        </div>
    </div>
  )
}

export default About