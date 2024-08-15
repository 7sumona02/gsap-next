import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <div className='p-20 bg-neutral-50 -z-40' id='services'>
      <div className='text-black flex gap-10 max-w-3xl'>
        <h2 className='text-2xl font-bold bg-green-300 py-2 px-2 inline'>Services</h2>
        <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi dolorem voluptatibus eveniet quos, ab eum iste saepe doloribus hic.</p>
      </div>

      <div className='flex justify-start mt-20'>
        <div className='grid grid-cols-2 gap-10'>
            <Card
                title='Search engine optimization'
                cardBg='bg-white'
                bgTitle='bg-green-300'
                cardImg='/Hero.svg'
                cardURL='/'
                colorURL='text-black'
                iconBg='bg-black'
                iconColor='text-white'
                />
            <Card
                title='Pay per click advertising'
                cardBg='bg-black'
                bgTitle='bg-white'
                cardImg='/Hero2.svg'
                cardURL='/'
                colorURL='text-white'
                iconBg='bg-white'
                iconColor='text-black'
                />
            <Card
                title='Pay per click advertising'
                cardBg='bg-black'
                bgTitle='bg-white'
                cardImg='/Hero4.svg'
                cardURL='/'
                colorURL='text-white'
                iconBg='bg-white'
                iconColor='text-black'
                />
            <Card
                title='Search engine optimization'
                cardBg='bg-white'
                bgTitle='bg-green-300'
                cardImg='/Hero3.svg'
                cardURL='/'
                colorURL='text-black'
                iconBg='bg-black'
                iconColor='text-white'
                />
        </div>
      </div>
    </div>
  )
}

export default Services
