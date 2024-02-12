"use client"
import { TypeAnimation } from 'react-type-animation'
import Animation from "@/components/Animation"
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';


export default function Home() {



  return (
    <main className="">
      <div className="bg-slate-950 h-screen">
        <div className="flex justify-normal items-center h-full">

          <div className="space-y-3 p-5 select-none">
            <div className="text-white text-6xl">Hey, I'm <span className=" text-[#00838D] font-semibold">toshi.</span></div>
            <div className="text-white text-5xl">A <span className=" text-[#00838D]">Software Developer</span></div>
            <div className="text-white text-2xl font-mono">interested in </div>
            <div className='text-white text-2xl font-mono sm:text-xl'> 
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
            {/* <Image src='smalldeer.svg' alt='toshi' width={300} height={300} /> */}
            <Animation />

          </div>  
          
          
        </div>
        <About /> 
        <Projects />
        <Contact />
        
        
      </div>
     
    </main>
  );
}
