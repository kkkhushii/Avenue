'use client'

import React, { useState, useEffect } from 'react'


function Testimonials() {
    const testimonialsData = [
        {
            text: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company..",
            image: "/Icons/Ellipse 53.svg",
            stars: 5,
            name: "Jordhan Daniyel"
        },
        {
            text: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company..",
            image: "/Icons/Ellipse 53.svg",
            stars: 4,
            name: "Jane Smith"
        },
        {
            text: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company..",
            image: "/Icons/Ellipse 53.svg",
            stars: 5,
            name: "Alice Johnson"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, [testimonialsData.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };
    return (
        <div className='mt-[116px]'>
            <div className='max-w-[1200px] mx-auto px-6'>
                <div className='flex flex-wrap md:flex-nowrap gap-[79px]'>
                    <div className='w-full md:w-1/2 '>
                        <h2 className='text-[38px] font-bold mb-[21px] text-customcol'>
                            Testimonials
                        </h2>
                        <div className="relative overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {testimonialsData.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 mb-4"
                                    >
                                        <div className=' mx-auto'>
                                            <p className='mb-[26px] text-lablecolor font-normal  text-[22px]'>{testimonial.text}</p>
                                            <div className='flex items-center '>

                                                <img src={testimonial.image} alt={testimonial.name} className='w-[55px] h-[55px] rounded-full mr-[25px]' />
                                                <div>
                                                    <div className='flex items-center gap-[1px]'>
                                                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                                                            <span key={i} className=' text-customblue w-[12px] h-[12px] '>&#9733;</span>
                                                        ))}
                                                    </div>
                                                    <div className='flex gap-[213px]'>
                                                        <div>
                                                            <p className='font-medium text-[21px] text-customcol mt-[8px] cursor-default transition-colors duration-300 hover:text-blue-600'>{testimonial.name}</p>
                                                        </div>

                                                        <div className="flex justify-center  gap-[16px]">
                                                            <button onClick={handlePrev} >
                                                                <img src='/Icons/right-arrow (2) 1.svg' className="transform rotate-180" />
                                                            </button>
                                                            <button onClick={handleNext}>
                                                                <img src='/Icons/right-arrow (2) 1.svg' />
                                                            </button>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center items-center '>
                        <img src='Icons/testimonials.jpg' alt='Testimonials' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
// https://svgshare.com/i/16M7.svg
