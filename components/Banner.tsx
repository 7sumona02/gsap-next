import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='bg-neutral-50'>
        <div className='container mx-auto py-10'>
        <div className='grid grid-cols-6 items-center justify-center saturate-0'>
            <div><Image src='/logos/l1.svg' alt='brand' width={400} height={400} className='w-[10vw]' /></div>
            <div><Image src='/logos/l2.svg' alt='brand' width={400} height={400} className='w-[10vw]' /></div>
            <div><Image src='/logos/l3.svg' alt='brand' width={400} height={400} className='w-[10vw]' /></div>
            <div><Image src='/logos/l4.svg' alt='brand' width={400} height={400} className='w-[10vw]' /></div>
            <div><Image src='/logos/l5.svg' alt='brand' width={400} height={400} className='w-[10vw]' /></div>
            <div><Image src='/logos/l6.svg' alt='brand' width={400} height={400} className='w-[10vw]' /></div>
        </div>
        </div>
    </div>
  )
}

export default Banner
