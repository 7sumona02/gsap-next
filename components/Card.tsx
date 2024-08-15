import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

interface CardProps {
    title: string,
    bgTitle: string,
    cardImg: string,
    cardURL: string,
    colorURL: string,
    cardBg: string,
    iconColor: string,
    iconBg: string,
    className: string,
  }

const Card: React.FC<CardProps> = ({
    title, bgTitle, cardImg, cardURL, colorURL, cardBg, iconColor, iconBg, className
}) => {
  return (
    <div className={`p-10 rounded-3xl border-2 border-b-8 border-black max-w-md flex justify-between ${cardBg}`}>
      <div className='flex flex-col gap-6'>
        <div className='text-black max-w-60'>
            <h1 className={`${bgTitle} py-2 inline text-black text-xl font-bold leading-8`}>{title}</h1>
        </div>
        <div className='flex gap-2 items-center mt-6'>
            <div className={`${iconBg} rounded-full p-4 size-4 flex items-center justify-center`}>
                <div><BsArrowRight className={`text-xl -rotate-45 ${iconColor}`} /></div>
            </div>
            <Link href={cardURL} className={`font-medium ${colorURL} text-sm`}>Learn more</Link>
        </div>
      </div>
      <div>
        <Image src={cardImg} alt='Hero' width={400} height={400} className='w-[10vw]' />
      </div>
    </div>
  )
}

export default Card
