import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[80vh]'>
        <div className='flex flex-1 justify-between items-center text-black py-12'>
            <div className='px-20'>
                <div className='flex flex-col gap-6'>
                    <h2 className='max-w-lg text-6xl font-bold'>Navigating the digital landscape for success</h2>
                    <p className='text-lg font-medium max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquam assumenda voluptas obcaecati dicta quos repellat quis qui, amet illum sequi! Nisi perspiciatis molestias maxime voluptate rerum.</p>
                    <button className='bg-black py-3 px-6 rounded-xl text-white w-60 font-bold'>Book a Consultation</button>
                </div>
            </div>
            <div className='px-20'>
                <Image src='/Hero.svg' alt='Hero' width={400} height={400} className='w-[35vw]' />
            </div>
        </div>
    </div>
  )
}

export default Hero
