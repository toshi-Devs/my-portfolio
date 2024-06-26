"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';


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

  const smoothScrollTo = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='fixed flex z-50'>

        <nav className='fixed flex w-full top-0 left-0 justify-center items-center mt-5 '>
          {scrolling ? 
            <div className=' bg-[#72727233] backdrop-blur-md shadow-md py-2 px-3 rounded-xl select-none text-slate-300 font-bold flex items-center'>
              {/* put the image next to the navbar items*/}
              <div className='rounded-full overflow-hidden cursor-pointer'>
                <Link href='/'>
                    <Image src='/toshi-logo-nobg.png' alt='logo' width={40} height={40} />
                </Link>
              </div>
                <Link href="/" className='w-fit hover:bg-[#000042] py-2 px-5 rounded-full'> Home</Link>
                <Link href="#About" onClick={() => smoothScrollTo('About')} className='w-fit hover:bg-[#000042] py-2 px-5 rounded-full'> About</Link>
                <Link href="#Projects" onClick={() => smoothScrollTo('Projects')} className='w-fit hover:bg-[#000042] py-2 px-5 rounded-full'> Projects</Link>
                <Link href="#Contact" onClick={() => smoothScrollTo('Contact')} className='w-fit hover:bg-[#000042] py-2 px-5 rounded-full'> Contact</Link>
            </div> :
              <div className='py-2 px-3 rounded-xl select-none text-slate-300 font-bold flex items-center'>
                <div className='rounded-full overflow-hidden cursor-pointer'>
                <Link href='/'>
                    <Image src='/toshi-logo-nobg.png' alt='logo' width={40} height={40} />
                </Link>
              </div>
                  <Link href="/" className='w-fit hover:bg-[#000042] py-2 px-5 rounded-full'> Home</Link>
                  <Link href="#About" onClick={() => smoothScrollTo('About')} className='w-fit hover:bg-[#000042] py-2 px-5 rounded-full'> About</Link>
                  <Link href="#Projects" onClick={() => smoothScrollTo('Projects')} className='w-fit hover:bg-[#000042] py-2 px-5 rounded-full'> Projects</Link>
                  <Link href="#Contact" onClick={() => smoothScrollTo('Contact')} className='w-fit hover:bg-[#000042] py-2 px-5 rounded-full'> Contact</Link>
              </div>
              }
        </nav>

    </div>
  )
}

export default Header