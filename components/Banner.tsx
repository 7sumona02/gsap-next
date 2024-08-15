'use client'
import React, { useRef } from 'react';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';
import Image from 'next/image'

gsap.registerPlugin(useGSAP);

const Banner: React.FC = () => {
    const banner = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline()
            tl.from('.banner .bannerImg', { opacity: 0, y: 30, stagger: 0.15, duration: 0.7 }); 
        },
        { scope: banner }
    ); 
  return (
    <div className='bg-neutral-50' ref={banner}>
        <div className='container mx-auto py-10 banner'>
        <div className='grid grid-cols-6 items-center justify-center saturate-0'>
            <div><Image src='/logos/l1.svg' alt='brand' width={400} height={400} className='w-[10vw] bannerImg' /></div>
            <div><Image src='/logos/l2.svg' alt='brand' width={400} height={400} className='w-[10vw] bannerImg' /></div>
            <div><Image src='/logos/l3.svg' alt='brand' width={400} height={400} className='w-[10vw] bannerImg' /></div>
            <div><Image src='/logos/l4.svg' alt='brand' width={400} height={400} className='w-[10vw] bannerImg' /></div>
            <div><Image src='/logos/l5.svg' alt='brand' width={400} height={400} className='w-[10vw] bannerImg' /></div>
            <div><Image src='/logos/l6.svg' alt='brand' width={400} height={400} className='w-[10vw] bannerImg' /></div>
        </div>
        </div>
    </div>
  )
}

export default Banner
