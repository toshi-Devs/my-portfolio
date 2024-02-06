import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='fixed flex'>

        <nav className='fixed flex w-full top-0 left-0 justify-center items-center mt-5'>
              <div className='py-2 px-3 rounded-md select-none text-slate-400 font-bold'>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> Logo</Link>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> Home</Link>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> About</Link>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> Projects</Link>
                <Link href="#" className='w-fit hover:bg-slate-50 py-2 px-5 rounded-full'> Contact</Link>
              </div>
        </nav>

    </div>
  )
}

export default Header