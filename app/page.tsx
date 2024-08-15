import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div className='bg-neutral-50 h-screen w-full'>
      <Navbar />
      <Hero />
      <Banner />
      <Services />
    </div>
  )
}

export default page
