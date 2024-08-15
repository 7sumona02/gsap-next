import Link from 'next/link'
import React from 'react'
import { PiStarFourFill } from 'react-icons/pi'

const Navbar = () => {
  return (
    <div className='px-10 py-6 sticky inset-x-0 top-0 z-500 w-full bg-neutral-50/70 backdrop-blur-lg transitional-all'>
      <div className='text-xl text-black flex items-center justify-between'>
        <div className='flex items-center'>
            <div className='mr-2'><PiStarFourFill className='rotate-45 text-2xl' /></div>
            <h1 className='font-bold'>WizardZ</h1>
        </div>
        <div className='flex gap-6 items-center text-lg font-medium'>
            <Link href='/'>About us</Link>
            <Link href='#services'>Services</Link>
            <Link href='/'>Pricing</Link>
            <Link href='/'>Blog</Link>
            <button className='py-2 px-4 text-sm border-2 border-black bg-neutral-200'>Request a Demo</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
