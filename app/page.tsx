"use client"
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <main className="">
      <div className="bg-[#1A202C] h-screen">
        <div className="flex justify-normal items-center h-full">

          <div className="space-y-3 p-5">
            <div className="text-white text-6xl">Hey, I'm <span className=" text-[#00838D]">toshi.</span></div>
            <div className="text-white text-5xl">A <span className=" text-[#00838D]">Software Developer</span></div>
            <div className="text-white text-2xl font-mono">interested in </div>
            <div className='text-white text-2xl font-mono'> 
              <TypeAnimation
                    preRenderFirstString={true}
                    sequence={['creating impactful applications,', 1000, 
                                'exploring diverse and innovative technologies,', 1000, 
                                'crafting comprehensive solutions across the development stack.', 1000,
                                'and consistently delivering high quality products,', 1000,
                                'with agile methodologies.', 1000,
                              ]}
                    repeat={Infinity}
                  /> 
            </div>
          </div>  

          <div className='flex fixed right-10'>
            <img src="/toshi.png" alt="toshi" className="w-96 h-96" />
          </div>   
          
        </div>
        
      </div>
     
    </main>
  );
}
