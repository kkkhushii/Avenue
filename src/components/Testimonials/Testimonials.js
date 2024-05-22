'use client'

import React, { useState, useEffect } from 'react'


function Testimonials() {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % testimonialsData.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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
    return (
        <div className='pt-[116px]'>
            <div className='max-w-[1200px] mx-auto px-6'>
                <div className='flex'>
                    <div className='w-1/2'>
                        <h2 className='text-4xl font-bold mb-10'>
                            Testimonials
                        </h2>
                        <div className='relative'>
                            <div className='absolute inset-0 flex justify-center items-center'>
                                {testimonialsData.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className={`transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'} absolute inset-0 flex flex-col justify-center items-center`}
                                    >
                                        <div className='bg-white p-6 rounded-lg shadow-md max-w-md w-full'>
                                            <p className='mb-4 text-gray-700'>{testimonial.text}</p>
                                            <div className='flex items-center'>
                                                <img src={testimonial.image} alt={testimonial.name} className='w-12 h-12 rounded-full mr-4' />
                                                <div>
                                                    <div className='flex items-center'>
                                                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                                                            <span key={i} className='text-yellow-500'>&#9733;</span>
                                                        ))}
                                                    </div>
                                                    <p className='mt-2 text-gray-800 font-semibold'>{testimonial.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-center items-center'>
                        <img src='Icons/testimonials.jpg' alt='Testimonials' className='rounded-lg shadow-md' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
// https://svgshare.com/i/16M7.svg
/* <div className='pt-[116px]'>
<div className='max-w-[1200px] mx-auto px-6'>
    <div className='flex '>
        <div>
            <h2>
                Testimonials
            </h2>
            <div>
                <p>
                    lorem
                </p>
                <div>
                    <img></img>
                    <div>
                        <span>star</span>
                        <p>name</p>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <img src='Icons\testimonials.jpg'></img>
        </div>
    </div>

</div>

</div> */