
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Carousel from '../Caresoual'

function Feature() {

    // const [currentIndex, setCurrentIndex] = useState(0)
    const items = [
        {
            src: '/Icons/customer 1.svg',
            title: '1,000+ local guides',
            description: 'Latin words that, as they are positioned not form sentences with complete.',
        },
        {
            src: '/Icons/air-balloon 1.svg',
            title: '1,000+ local guides',
            description: 'Latin words that, as they are positioned not form sentences with complete.',
        },
        {
            src: '/Icons/price-tag 1.svg',
            title: '1,000+ local guides',
            description: 'Latin words that, as they are positioned not form sentences with complete.',
        },
        {
            src: '/Icons/customer 1.svg',
            title: '1,000+ local guides',
            description: 'Latin words that, as they are positioned not form sentences with complete.',
        },
        {
            src: '/Icons/air-balloon 1.svg',
            title: '1,000+ local guides',
            description: 'Latin words that, as they are positioned not form sentences with complete.',
        },
        {
            src: '/Icons/price-tag 1.svg',
            title: '1,000+ local guides',
            description: 'Latin words that, as they are positioned not form sentences with complete.',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);


    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='bg-[#DAE7FF] p-10'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='rounded-lg bg-white py-11  '>
                    <div>
                        <h2 className='text-4xl font-bold text-customcol text-center pb-[33px]'>Features</h2>
                    </div>



                    {/* 
                    <div className='grid grid-cols-12 gap-4  '>
                        <div className='col-span-4  px-[30px] mb-4 grid  place-items-center'>
                            <div className=' rounded-full bg-colorbg w-[90px] h-[90px] grid justify-items-center place-items-center  mb-6  '>
                                <Image src='\Icons\customer 1.svg' height={50} width={50}></Image>
                            </div>
                            <h3 className='font-bold text-2xl text-customcol mb-2'>1,000+ local guides</h3>
                            <p className='text-base font-normal text-center text-lablecolor'>Latin words that, as they are positioned not form sentences with complete.</p>
                        </div>
                        <div className='col-span-4   px-[30px] mb-4   grid  place-items-center'>

                            <div className='rounded-full bg-colorbg w-[90px] h-[90px] grid justify-items-center place-items-center   mb-6  '>
                                <Image src='\Icons\air-balloon 1.svg' height={50} width={50}></Image>
                            </div>
                            <h3 className='font-bold text-2xl text-customcol mb-2'>1,000+ local guides</h3>
                            <p className='text-base font-normal text-center text-lablecolor'>Latin words that, as they are positioned not form sentences with complete.</p>


                        </div>
                        <div className='col-span-4   px-[30px] mb-4   grid  place-items-center'>
                            <div className='rounded-full bg-colorbg w-[90px] h-[90px]  grid justify-items-center place-items-center  mb-6  '>
                                <Image src='\Icons\price-tag 1.svg' height={50} width={50}></Image>
                            </div>
                            <h3 className='font-bold text-2xl text-customcol mb-2'>1,000+ local guides</h3>
                            <p className='text-base font-normal text-center text-lablecolor'>Latin words that, as they are positioned not form sentences with complete.</p>


                        </div>



                    </div> */}

                    <div className="rounded-lg bg-white py-11 relative">

                        <div className="grid grid-cols-12 gap-4 overflow-hidden">
                            {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
                                <div key={index} className="col-span-4 px-[30px] mb-4 grid place-items-center">
                                    <div className="rounded-full bg-colorbg w-[90px] h-[90px] grid justify-items-center place-items-center mb-6">
                                        <Image src={item.src} height={50} width={50} alt={item.title} />
                                    </div>
                                    <h3 className="font-bold text-2xl text-customcol mb-2">{item.title}</h3>
                                    <p className="text-base font-normal text-center text-lablecolor">{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
                        >
                            &#9664;
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
                        >
                            &#9654;
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Feature
