import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='fixed flex'>

        <nav className='fixed flex w-full top-0 left-0 justify-center items-center mt-5'>
              <div className='bg-slate-100 py-2 px-3 rounded-md'>
                <Link href="#" className='w-fit hover:bg-slate-200 py-2 px-3 rounded-full'> Logo</Link>
                <Link href="#" className='w-fit hover:bg-slate-200 py-2 px-3 rounded-full'> Home</Link>
                <Link href="#" className='w-fit hover:bg-slate-200 py-2 px-3 rounded-full'> About</Link>
                <Link href="#" className='w-fit hover:bg-slate-200 py-2 px-3 rounded-full'> Projects</Link>
                <Link href="#" className='w-fit hover:bg-slate-200 py-2 px-3 rounded-full'> Contact</Link>
              </div>
        </nav>

    </div>
  )
}

export default Header