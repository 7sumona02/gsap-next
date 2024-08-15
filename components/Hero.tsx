'use client'
import React, { useRef } from 'react';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';
import Image from 'next/image'
import Link from 'next/link'

gsap.registerPlugin(useGSAP);

const Hero: React.FC = () => {
    const hero = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline()
            tl.from('.hero .heroTitle', { x: -200, opacity: 0, duration: 0.5 }); 
            tl.from('.hero .heroContent', { x: -100, opacity: 0, duration: 0.4 });
            tl.from('.hero .heroButton', { opacity: 0, duration: 0.4 }); 
            tl.from('.hero .heroImg', { opacity: 0, duration: 0.5, x: 200 }, "-=0.7"); 
        },
        { scope: hero }
    ); 

  return (
    <div className='w-full h-[72vh]' ref={hero}>
        <div className='flex flex-1 justify-between items-center text-black py-10 hero'>
            <div className='px-20'>
                <div className='flex flex-col gap-6'>
                    <h2 className='max-w-lg text-6xl font-bold heroTitle'>Navigating the digital landscape for success</h2>
                    <p className='text-lg font-medium max-w-md heroContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquam assumenda voluptas obcaecati dicta quos repellat quis qui, amet illum sequi! Nisi perspiciatis molestias maxime voluptate rerum.</p>
                    <Link href='/'><button className='bg-black py-3 px-6 rounded-xl text-white w-60 font-bold heroButton'>Book a Consultation</button></Link>
                </div>
            </div>
            <div className='px-20'>
                <Image src='/Hero.svg' alt='Hero' width={400} height={400} className='w-[35vw] heroImg' />
            </div>
        </div>
    </div>
  )
}

export default Hero
