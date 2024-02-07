"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react';


function Header() {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className='fixed flex'>

        <nav className='fixed flex w-full top-0 left-0 justify-center items-center mt-5 '>
          {scrolling ? <div className=' bg-[#72727233] backdrop-blur-md shadow-md py-2 px-3 rounded-xl select-none text-slate-400 font-bold'>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> Logo</Link>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> Home</Link>
                <Link href="#About" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> About</Link>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> Projects</Link>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> Contact</Link>
                </div> :
              <div className='py-2 px-3 rounded-xl select-none text-slate-400 font-bold'>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> Logo</Link>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> Home</Link>
                <Link href="#About" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> About</Link>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> Projects</Link>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> Contact</Link>
              </div>
              }
        </nav>

    </div>
  )
}

export default Header