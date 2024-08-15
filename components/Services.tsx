'use client';

import Card from '@/components/Card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';


gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const service = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service', {
        scrollTrigger: {
          trigger: '.service',
          start: 'top 50%',
          end: 'top 0%',
          scrub: 2,
        },
        y: 30,
        duration: 0.3,
        opacity: 0,
        stagger: 0.15
      });
    }, service);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.card', {
        scrollTrigger: {
          trigger: '.card',
          start: 'top 50%',
          end: 'top 20%',
          scrub: 2,
        },
        x: 300,
        duration: 0.3,
        opacity: 0,
      });
    }, service);

    return () => ctx.revert();
  }, []);

  return (
    <div className="p-20 bg-neutral-50 -z-40" id="services" ref={service}>
      <div className="text-black flex gap-10 max-w-3xl service">
        <h2 className="text-2xl font-bold bg-green-300 py-2 px-2 inline sTitle">Services</h2>
        <p className="font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi dolorem
          voluptatibus eveniet quos, ab eum iste saepe doloribus hic.
        </p>
      </div>

      <div className="flex justify-start mt-20">
        <div className="grid grid-cols-2 gap-10 card">
          <Card
            title="Search engine optimization"
            cardBg="bg-white"
            bgTitle="bg-green-300"
            cardImg="/Hero.svg"
            cardURL="/"
            colorURL="text-black"
            iconBg="bg-black"
            iconColor="text-white" className='card1'
          />
          <Card
            title="Pay per click advertising"
            cardBg="bg-black"
            bgTitle="bg-white"
            cardImg="/Hero2.svg"
            cardURL="/"
            colorURL="text-white"
            iconBg="bg-white"
            iconColor="text-black" className='card2'
          />
          <Card
            title="Pay per click advertising"
            cardBg="bg-black"
            bgTitle="bg-white"
            cardImg="/Hero4.svg"
            cardURL="/"
            colorURL="text-white"
            iconBg="bg-white"
            iconColor="text-black" className='card3'
          />
          <Card
            title="Search engine optimization"
            cardBg="bg-white"
            bgTitle="bg-green-300"
            cardImg="/Hero3.svg"
            cardURL="/"
            colorURL="text-black"
            iconBg="bg-black"
            iconColor="text-white" className='card4'
          />
        </div>
      </div>
    </div>
  );
};

export default Services;