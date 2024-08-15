'use client'
import React, { useRef } from 'react';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';
import { PiStarFourFill } from 'react-icons/pi';
import Link from 'next/link';

gsap.registerPlugin(useGSAP);

const Page: React.FC = () => {
    const nav = useRef<HTMLDivElement>(null); 

    useGSAP(
        () => {
            const tl = gsap.timeline()
            tl.from('.nav .navLogo, .nav .navLink', { y: -30, opacity: 0, delay: 0.5, duration: 0.5 }); 
        },
        { scope: nav }
    ); 

    return (
        <div ref={nav} className='px-10 py-6 sticky inset-x-0 top-0 z-500 w-full bg-neutral-50/70 backdrop-blur-lg transitional-all nav'>
            <div className='text-xl text-black flex items-center justify-between'>
        <div className='flex items-center navLogo'>
            <div className='mr-2'><PiStarFourFill className='rotate-45 text-2xl' /></div>
            <h1 className='font-bold'>WizardZ</h1>
        </div>
        <div className='flex gap-6 items-center text-lg font-medium'>
            <Link href='/' className='navLink'>About us</Link>
            <Link href='#services' className='navLink'>Services</Link>
            <Link href='/' className='navLink'>Pricing</Link>
            <Link href='/' className='navLink'>Blog</Link>
            <button className='py-2 px-4 text-sm border-2 border-black bg-neutral-200 navLink'>Request a Demo</button>
        </div>
        </div>
        </div>
    );
}

export default Page;