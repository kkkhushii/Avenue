
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'


function Feature() {

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
        {
            src: '/Icons/air-balloon 1.svg',
            title: '1,000+ local guides',
            description: 'Latin words that, as they are positioned not form sentences with complete.',
        },
        {
            src: '/Icons/price-tag 1.svg',
            title: '1,000+ local guides',
            description: 'Latin words that, as they are positioned not form sentences with complete.',
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(items.length / itemsPerPage);


    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
    };


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };



    return (
        <div className='p-10 feature-container'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='rounded-lg  shadow bg-white py-20  '>
                    <div>
                        <h2 className='text-4xl font-bold text-customcol text-center pb-[33px]'>Features</h2>
                    </div>
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                        >
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-1/3 flex-shrink-0 px-[30px] mb-4 grid place-items-center"
                                >
                                    <div className='rounded-full bg-colorbg w-[90px] h-[90px] grid justify-items-center place-items-center mb-6'>
                                        <Image src={item.src} height={50} width={50} alt={item.title} />
                                    </div>
                                    <h3 className='font-bold text-2xl text-customcol mb-2'>{item.title}</h3>
                                    <p className='text-base font-normal text-center text-lablecolor'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center  gap-4 mt-6 ">
                            <button onClick={prevSlide} >
                                <img src='/Icons/right-arrow (2) 1.svg' className="transform rotate-180" />
                            </button>
                            <button onClick={nextSlide}>
                                <img src='/Icons/right-arrow (2) 1.svg' />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feature
